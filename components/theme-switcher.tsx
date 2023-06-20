"use client"

import { useEffect } from "react"
import themes from "@/themes/index.json"

import { Button } from "@/components/ui/button"

export default function ThemeSwitcher({ currentTheme, setCurrentTheme }) {
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

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
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
    <section>
      <div className="flex gap-4">
        <Button variant="outline" onClick={previousTheme}>
          Previous Theme
        </Button>
        <div>or use the arrow keys</div>
        <Button onClick={nextTheme}>Next Theme</Button>
      </div>
    </section>
  )
}
