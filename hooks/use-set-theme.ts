"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import themes from "@/themes/index.json";
import { sanitizeName } from "@/lib/utils";
import { ShadcnTheme, useTheme } from "@/components/shadcn-theme-provider";


const themesNames = themes.map((t) => sanitizeName(t.name))

const useSetTheme = (theme: string) => {
  const router = useRouter()
  const { setCurrentTheme } = useTheme()
  const pathname = usePathname()

  const [, , ...nested] = pathname.split("/")

  const currentPage = nested ? `/${nested.join("/")}` : ""

  
  if (typeof window !== "undefined" && !themesNames.includes(theme)) {
      router.replace(`/${sanitizeName(themes[0].name)}/${currentPage}`)
  }

  const currentTheme =
    themes.find((t) => sanitizeName(t.name) === sanitizeName(theme)) ??
    themes[0]

  useEffect(() => {
    setCurrentTheme(currentTheme as ShadcnTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export { useSetTheme }