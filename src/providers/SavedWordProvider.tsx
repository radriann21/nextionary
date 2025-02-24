"use client"
import { type ReactNode, createContext, useContext, useRef } from "react"
import { useStore } from "zustand"
import { type SavedWordsStore, createSavedWordsStore, initSavedWordsStore } from "@/stores/SavedWordsStore"

export type SavedWordStoreApi = ReturnType<typeof createSavedWordsStore>

export const SavedWordStoreContext = createContext<SavedWordStoreApi | null>(null)

export const SavedWordStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<SavedWordStoreApi>(null)
  if (!storeRef.current) {
    storeRef.current = createSavedWordsStore(initSavedWordsStore())
  }
  return (
    <SavedWordStoreContext.Provider value={storeRef.current}>
      {children}
    </SavedWordStoreContext.Provider>
  )
}

export const useSavedWordStore = <T,>(selector: (store: SavedWordsStore) => T,): T => {
  const savedWordStoreContext = useContext(SavedWordStoreContext)
  if (!savedWordStoreContext) {
    throw new Error("useSavedWordStore must be used within a SavedWordStoreProvider")
  }
  return useStore(savedWordStoreContext, selector)
}