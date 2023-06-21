"use client"

import { useEffect } from "react"
import themes from "@/themes/index.json"

import PageContent from "@/components/home/pageContent"
import { ShadcnTheme, useTheme } from "@/components/shadcn-theme-provider"

export default function ThemePage({ params }: { params: { theme: string } }) {
  const { setCurrentTheme } = useTheme()
  const currentTheme =
    themes.find((t) => t.name.toLowerCase() === params.theme.toLowerCase()) ??
    themes[0]

  useEffect(() => {
    setCurrentTheme(currentTheme as ShadcnTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageContent
      name={currentTheme.name}
      description={currentTheme.description}
    />
  )
}
