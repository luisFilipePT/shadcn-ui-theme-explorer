"use client"

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import { useTheme } from "@/components/shadcn-theme-provider"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const { currentTheme } = useTheme()

  const themeName = currentTheme.name.toLowerCase()

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href={`/${themeName}`} className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger>Help</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Link href={`/${themeName}/`}>shadcn/ui</Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Upload a theme...</DropdownMenuItem>
          <DropdownMenuItem>Install a theme...</DropdownMenuItem>
          <DropdownMenuItem>Download theme</DropdownMenuItem>
          <DropdownMenuItem>Copy URL to share</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
