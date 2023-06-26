import { sanitizeName } from "@/lib/utils"
import themes from "@/themes/index.json"

export default function PageHeader({ theme }: { theme: string }) {
  const currentTheme =
    themes.find((t) => sanitizeName(t.name) === sanitizeName(theme)) ??
    themes[0]

  return (
    <section className="min-h-[180px] md:min-h-[160px] w-full items-center justify-between pb-2 md:pb-8 pt-6 md:py-5">
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
        <p className="max-w-[700px] text-base md:text-lg text-muted-foreground">
          {currentTheme.description}
        </p>
      </div>
    </section>
  )
}
