"use client"

import { useTheme } from "@/components/shadcn-theme-provider"

export default function PageHeader() {
  const {
    currentTheme: { name, author, description },
  } = useTheme()

  return (
    <section className="grid min-h-[150px] w-full grid-cols-2 items-center justify-between pb-8 pt-6 md:py-5">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {name}
          <span
            className={
              "pl-2 text-lg font-light leading-normal tracking-wide md:text-xl"
            }
          >
            by {author}
          </span>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  )
}
