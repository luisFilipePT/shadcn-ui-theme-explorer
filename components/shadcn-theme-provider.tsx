"use client"

import * as React from "react"
import { ReactNode, useEffect, useState } from "react";
import themes from "@/themes/index.json";

type ShadcnTheme = {
  index: number;
  author: string,
  authorUsername: string;
  version: string,
  name: string,
  description: string
}

type ShadcnThemeContextType = {
  currentTheme: ShadcnTheme | undefined;
  setCurrentTheme: (theme: ShadcnTheme) => void;
  nextTheme: (theme: ShadcnTheme) => void;
  previousTheme: (theme: ShadcnTheme) => void;
};

export const ShadcnThemeContext = React.createContext<ShadcnThemeContextType>(
  {
    currentTheme: undefined,
    setCurrentTheme: () => {},
    nextTheme: () => {},
    previousTheme: () => {},
  }
);

export function ShadcnThemeProvider({ children }: {children: ReactNode}) {

  const [currentTheme, setCurrentTheme] = useState<ShadcnTheme>({
    index: 0,
    ...themes[0],
  })

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          previousTheme()
          break
        case "ArrowRight":
          nextTheme()
          break
        default:
          break
      }
    }

    const handleDrag = ( event: any): any => {
      console.log(event.type)

      return;
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("drag", handleDrag)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("drag", handleDrag)
    }
  }, [currentTheme.name])
  function clearThemeClass() {
    // remove class that contains theme keyword
    document.documentElement.classList.remove(
      ...Array.from(document.documentElement.classList).filter((c) =>
        c.startsWith("theme-")
      )
    )
  }

  function applyTheme(theme: string) {
    document.documentElement.classList.toggle(`theme-${theme.toLowerCase()}`)
  }

  function nextTheme() {
    clearThemeClass()

    const nextThemeIndex =
      currentTheme.index + 1 >= themes.length ? 0 : currentTheme.index + 1
    const nextTheme = themes[nextThemeIndex]

    applyTheme(nextTheme.name)
    setCurrentTheme({ ...nextTheme, index: nextThemeIndex })
  }

  function previousTheme() {
    clearThemeClass()

    const nextThemeIndex =
      currentTheme.index - 1 >= 0 ? currentTheme.index - 1 : themes.length - 1
    const nextTheme = themes[nextThemeIndex]

    applyTheme(nextTheme.name)
    setCurrentTheme({ ...nextTheme, index: nextThemeIndex })
  }

  return (
    <ShadcnThemeContext.Provider value={{
      currentTheme,
      setCurrentTheme,
      nextTheme,
      previousTheme
    }}>
      {children}
    </ShadcnThemeContext.Provider>
  )
}

export function useTheme() {
  const { currentTheme, setCurrentTheme, nextTheme, previousTheme } = React.useContext(ShadcnThemeContext);
  return { currentTheme, setCurrentTheme, nextTheme, previousTheme };
}
