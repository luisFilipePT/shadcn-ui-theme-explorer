import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  <Icons.twitter className="h-5 w-5 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noreferrer"
                  >
                    @__luisFilipePT
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                  href={siteConfig.links.twitterJoana}
                  target="_blank"
                  rel="noreferrer"
                  >
                    @joanamcsa
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>     
            
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
