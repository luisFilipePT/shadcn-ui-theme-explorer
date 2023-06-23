"use client"

import { type ReactNode } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { useTheme } from "@/components/shadcn-theme-provider"
import { useSetTheme } from "@/hooks/use-set-theme"
import { usePathname } from "next/navigation"

export function ThemeArrows({ children, params }: { children: ReactNode, params: any }) {

  useSetTheme(params.theme)
  const { nextTheme, previousTheme } = useTheme()
  const pathname = usePathname()

  const [, , ...nested] = pathname.split('/');

  const currentPage = nested ? `${nested.join('/')}` : ''

  return (
    <>
      <Link href={`/${previousTheme}/${currentPage}`}>
        <ChevronLeft className="absolute left-0 top-1/2 h-10 w-10 cursor-pointer text-primary md:h-20 md:w-20" />
      </Link>
      <Link href={`/${nextTheme}/${currentPage}`}>
        <ChevronRight className="absolute right-0 top-1/2 h-10 w-10 cursor-pointer text-primary md:h-20 md:w-20" />
      </Link>
      {children}
    </>
  )
}
