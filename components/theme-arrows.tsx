"use client"

import * as React from "react"
import {ReactNode} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useTheme} from "@/components/shadcn-theme-provider";

export function ThemeArrows({ children }: { children: ReactNode}) {
  const { nextTheme, previousTheme } = useTheme()

  return (
    <div className={'relative'}>
      <div className={'md:block'}>
        <ChevronLeft className={'text-primary absolute left-0 top-52 w-10 h-10 md:w-20 md:h-20'} onClick={previousTheme} />
        <ChevronRight className={'text-primary absolute right-0 top-52 w-10 h-10 md:w-20 md:h-20'} onClick={nextTheme} />
      </div>
      <div className={'container'}>
        {children}
      </div>
    </div>
  )
}
