import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        global: { value: "var(--font-libre-baskerville)" }
      },
      colors: {
        lightBackground: { value: '#f8f8f8' },
        lightInputBackground: { value: '#fff4f4' },
        mainText: { value: '#0c0c0c' },
        secondaryText: { value: '#d1d1d1' }
      }
    }
  }
})