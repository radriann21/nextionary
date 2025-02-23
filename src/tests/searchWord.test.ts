import { searchWord } from "../services/searchWord"
import { test, describe, expect } from "vitest";

describe("searchWord", () => {
  const word = "hello"

  test.fails("should return an error", async () => {
    const res = await searchWord(word)
    expect(res.error).toEqual("Request error. Try again later.")
  })

  test("should return a word", async () => {
    const res = await searchWord(word)
    expect(res.Word).toBeDefined()
  })

  test("should return the word hello", async () => {
    const res = await searchWord(word)
    expect(res.Word?.word).toEqual(word)
  })

  test("should return word not found", async () => {
    const res = await searchWord("hello123")
    expect(res.error).toEqual("Word not found.")
  })
})