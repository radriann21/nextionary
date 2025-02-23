import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        global: { value: "var(--font-libre-baskerville)" }
      },
      colors: {
        lightBackground: { value: '#f8f8f8' },
        lightInputBackground: { value: '#f3f3f3' },
        mainText: { value: '#0c0c0c' },
        mainTextDark: { value: '#ffffff' },
        secondaryText: { value: '#111111' },
        secondaryTextDark: { value: '#fff4f4' },
        darkBackground: { value: '#0f0e0e' },
      }
    }
  }
})