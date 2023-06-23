'use client'

import Image from "next/image"
import Link from "next/link"
import logo from "@/images/logo.png"

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
import { useToast } from "./ui/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

export function copyToClipboard(value: string) {
  navigator.clipboard.writeText(value);
}

const redirectUrls = {
  shadcnUi: 'https://ui.shadcn.com/',
  uploadTheme: 'https://github.com/luisFilipePT/shadcn-ui-theme-explorer#upload-a-theme',
  installTheme: 'https://github.com/luisFilipePT/shadcn-ui-theme-explorer#install-a-theme'
}


export function MainNav() {

  const { toast } = useToast()

  const handleCopyURL = () => {
    copyToClipboard(window.location.href)
    toast({
      title: 'URL copied to clipboard'
    })
  }

  return (
    <div className="flex gap-6 md:gap-10">
      <div className="flex items-center space-x-2">
        <Image
          src={logo}
          alt="shadcn/ui Theme Explorer logo"
          width="45"
          height="45"
        />
        <span className="hidden md:inline-block font-bold">{siteConfig.name}</span>
      </div>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger>Help</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Link href={redirectUrls.shadcnUi}>shadcn/ui</Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={redirectUrls.uploadTheme}>
                Upload a theme...
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={redirectUrls.installTheme}>
                Install a theme...
              </Link>
            </DropdownMenuItem>
            <DialogTrigger asChild>
              <DropdownMenuItem>
                Download theme
              </DropdownMenuItem> 
            </DialogTrigger>
            <DropdownMenuItem onClick={handleCopyURL}>Copy URL to share</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
