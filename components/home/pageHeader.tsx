import themes from "@/themes/index.json"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { sanitizeName } from "@/lib/utils"

export default function PageHeader({ theme }: { theme: string }) {
  const currentTheme =
    themes.find((t) => sanitizeName(t.name) === sanitizeName(theme)) ??
    themes[0]

  return (
    <section className="flex min-h-[120px] w-full flex-col items-center justify-between pb-2 pt-6 sm:flex-row md:min-h-[100px] md:py-5 md:pb-8">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {currentTheme.name}
          <span
            className={
              "pl-2 text-base font-light leading-normal tracking-wide md:text-xl"
            }
          >
            by {currentTheme.author}
          </span>
        </h1>
        <p className="max-w-[700px] text-base text-muted-foreground md:text-lg">
          {currentTheme.description}
        </p>
      </div>
      <div className="mt-3 flex flex-col items-center justify-center rounded-lg border bg-card p-4 text-card-foreground shadow-sm sm:mt-0 sm:max-w-[50%] md:max-w-[35%]">
        <div className="flex flex-col items-center text-base font-semibold">
          <div>
            Use the{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
              &lt; Left
            </code>{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono">
              Right &gt;
            </code>{" "}
            keys or click the{" "}
            <span className="mb-[-6px] inline-block">
              <ChevronLeft className="h-6 w-6 text-primary" />
            </span>{" "}
            and{" "}
            <span className="mb-[-6px] inline-block">
              <ChevronRight className="h-6 w-6 text-primary" />
            </span>{" "}
            arrows below to navigate between themes
          </div>
          <div className="flex items-center"></div>
        </div>
        <p className="pt-4 text-muted-foreground">
          All themes support both dark and light mode.
        </p>
      </div>
    </section>
  )
}
