export const searchWord = async (word: string): Promise<ResponseWord> => {
  const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  try {
    const res = await fetch(API_URL)
    if (!res.ok) {
      return {
        error: "Word not found."
      }
    }
    const data = await res.json()
    if (data.length === 0) {
      return {
        error: "Word not found."
      }
    }
    return {
      Word: data[0]
    }
  } catch (err) {
    let errorMessage = "Something went wrong. Try again later."
    if (err instanceof Error) {
      errorMessage += ` (${err.message})`
    }
    return {
      error: errorMessage
    }
  }
}