import { createStore } from "zustand/vanilla";
import { searchWord } from "@/services/searchWord";

export type WordState = {
  word: Word | null
  error: string | null
}

export type WordActions = {
  manageSearchWord: (word: string) =>void
}

export type WordStore = WordState & WordActions

export const defaultInitialState: WordState = {
  word: null,
  error: null
}

export const initWordStore = ():WordState => {
  return {
    word: null,
    error: null,
  }
}

export const createWordStore = (initState:WordState = defaultInitialState) => {
  return createStore<WordStore>()((set) => ({
    ...initState,
    manageSearchWord: async (word) => {
      const res = await searchWord(word)
      if (res.error) {
        set(() => ({ error: res.error }))
      }
      set(() => {
        console.log(res.Word)
        return {
          word: res.Word
        }
      })
    }
  }))
}