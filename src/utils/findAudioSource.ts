export const findAudioSource = (word: Word | null) => {
  for (const phonetic of word?.phonetics || []) {
    if (phonetic.audio) {
      return phonetic.audio
    }
  }
  return ""
}