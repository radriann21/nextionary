"use client"

import { type ReactNode, createContext, useRef, useContext } from "react"
import { useStore } from "zustand"
import { type WordStore, createWordStore, initWordStore } from "@/stores/WordStore"

export type WordStoreApi = ReturnType<typeof createWordStore>

export const WordStoreContext = createContext<WordStoreApi | null>(null)

export const WordStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<WordStoreApi>(null)
  if (!storeRef.current) {
    storeRef.current = createWordStore(initWordStore())
  }
  return (
    <WordStoreContext.Provider value={storeRef.current}>
      {children}
    </WordStoreContext.Provider>
  )
}

export const useWordStore = <T,>(selector: (store: WordStore) => T,): T => {
  const wordStoreContext = useContext(WordStoreContext)

  if (!wordStoreContext) {
    throw new Error("useWordStore must be used within a WordStoreProvider")
  }

  return useStore(wordStoreContext, selector)
}