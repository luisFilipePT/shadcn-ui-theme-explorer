"use client"

import * as React from "react"
import { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import themes from "@/themes/index.json"

import { sanitizeName } from "@/lib/utils"

export type ShadcnTheme = {
  index: number
  author: string
  authorUsername: string
  version: string
  name: string
  description: string
}

type ShadcnThemeContextType = {
  currentTheme: ShadcnTheme
  setCurrentTheme: (theme: ShadcnTheme) => void
  nextTheme: string
  previousTheme: string
}

type ShadcnThemeProviderProps = {
  children: ReactNode
}

export const ShadcnThemeContext = React.createContext<ShadcnThemeContextType>({
  currentTheme: { index: 0, ...themes[0] },
  setCurrentTheme: () => {},
  nextTheme: "",
  previousTheme: "",
})

function getNextThemeName(currentThemeIndex: number) {
  const nextThemeIndex =
    currentThemeIndex + 1 >= themes.length ? 0 : currentThemeIndex + 1

  return sanitizeName(themes[nextThemeIndex].name)
}

function getPreviousThemeName(currentThemeIndex: number) {
  const previousThemeIndex =
    currentThemeIndex - 1 >= 0 ? currentThemeIndex - 1 : themes.length - 1

  return sanitizeName(themes[previousThemeIndex].name)
}

export function ShadcnThemeProvider({ children }: ShadcnThemeProviderProps) {
  const router = useRouter()
  const [nextThemeName, setNextThemeName] = useState(themes[1].name)
  const [previousThemeName, setPreviousThemeName] = useState(
    themes[themes.length - 1].name
  )
  const [currentTheme, setCurrentTheme] = useState<ShadcnTheme>({
    index: 0,
    ...themes[0],
  })

  useEffect(() => {
    const nextThemeName = getNextThemeName(currentTheme.index)
    setNextThemeName(nextThemeName)

    const previousThemeName = getPreviousThemeName(currentTheme.index)
    setPreviousThemeName(previousThemeName)

    const handleKeyDown = (event: KeyboardEvent) => {
      const pathname = window?.location?.pathname || "default"

      const [, , ...nested] = pathname.split("/")

      const currentPage = nested ? `/${nested.join("/")}` : ""

      switch (event.key) {
        case "ArrowLeft":
          router.push(`/${previousThemeName}/${currentPage}`)
          break
        case "ArrowRight":
          router.push(`/${nextThemeName}/${currentPage}`)
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentTheme.name])

  function handleThemeChange(theme: ShadcnTheme) {
    setCurrentTheme({ ...theme, index: theme.index ?? themes.indexOf(theme) })
  }

  return (
    <ShadcnThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme: handleThemeChange,
        nextTheme: nextThemeName,
        previousTheme: previousThemeName,
      }}
    >
      {children}
    </ShadcnThemeContext.Provider>
  )
}

export function useTheme() {
  const { currentTheme, setCurrentTheme, nextTheme, previousTheme } =
    React.useContext(ShadcnThemeContext)
  return { currentTheme, setCurrentTheme, nextTheme, previousTheme }
}
