"use client"

import { type ReactNode } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { useTheme } from "@/components/shadcn-theme-provider"

export function ThemeArrows({ children }: { children: ReactNode }) {
  const { nextTheme, previousTheme } = useTheme()

  return (
    <div className="relative">
      <div className="md:block">
        <Link href={`/${previousTheme}`}>
          <ChevronLeft className="absolute left-0 top-1/2 h-10 w-10 cursor-pointer text-primary md:h-20 md:w-20" />
        </Link>
        <Link href={`/${nextTheme}`}>
          <ChevronRight className="absolute right-0 top-1/2 h-10 w-10 cursor-pointer text-primary md:h-20 md:w-20" />
        </Link>
      </div>
      {children}
    </div>
  )
}
