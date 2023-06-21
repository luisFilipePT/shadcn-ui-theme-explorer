"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import {useTheme} from "@/components/shadcn-theme-provider";
import {ThemeArrows} from "@/components/theme-arrows";

export default function IndexPage() {
  const { currentTheme } = useTheme()

  if (!currentTheme) {
    return null
  }

  return (
    <ThemeArrows>
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-5">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              {currentTheme.name} <br className="hidden sm:inline" />
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              {currentTheme.description}
            </p>
          </div>
        </section>
        <section className="container grid grid-cols-1 md:grid-cols-3 items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="grid gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <div>
            <div className="flex flex-col md:flex-row gap-3 pb-8">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        </section>
    </ThemeArrows>
  )
}
