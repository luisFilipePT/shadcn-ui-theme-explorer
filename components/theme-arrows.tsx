"use client"

import { type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { useSetTheme } from "@/hooks/use-set-theme"
import { useTheme } from "@/components/shadcn-theme-provider"

export function ThemeArrows({
  children,
  params,
}: {
  children: ReactNode
  params: any
}) {
  useSetTheme(params.theme)
  const { nextTheme, previousTheme } = useTheme()
  const pathname = usePathname()

  const [, , ...nested] = pathname.split("/")

  const currentPage = nested ? `${nested.join("/")}` : ""

  return (
    <div>
      <Link href={`/${previousTheme}/${currentPage}`}>
        <ChevronLeft className="fixed left-0 top-1/2 h-10 w-10 cursor-pointer text-primary md:h-20 md:w-20" />
      </Link>
      <Link href={`/${nextTheme}/${currentPage}`}>
        <ChevronRight className="fixed right-0 top-1/2 h-10 w-10 cursor-pointer text-primary md:h-20 md:w-20" />
      </Link>
      {children}
    </div>
  )
}
