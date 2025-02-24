import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

export type SavedWordsState = {
  words: Word[]
}

export type SavedWordsAction = {
  addWord: (word: Word) => void
  removeWord: (word: string) => void
}

export const defaultInitialState: SavedWordsState = {
  words: []
}

export type SavedWordsStore = SavedWordsState & SavedWordsAction

export const initSavedWordsStore = ():SavedWordsState => {
  return defaultInitialState
}

export const createSavedWordsStore = (initState:SavedWordsState = defaultInitialState) => {
  return createStore<SavedWordsStore>()(persist((set) => ({
    ...initState,
    addWord: (word) => {
      set(() => ({
        words: [word]
      }))
    },
    removeWord: (word) => {
      set((state) => ({
        words: state.words.filter((w) => w.word !== word)
      }))
    }
  }), { name: 'saved-words' }))
}