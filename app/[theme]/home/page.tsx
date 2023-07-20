import * as React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Home page",
  description: "Beautifully designed themes built for shadcn/ui",
}

export default function HomePage() {
  return (
    <section className="container max-w-[80%] p-2 md:pb-10">
      <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
        <p className="center py-4 text-center text-3xl md:py-8 md:text-8xl">
          Why so bland?
        </p>
        <span className="inline-block bg-gradient-to-r from-ring to-foreground bg-clip-text py-2 text-transparent md:p-2">
          Color the web with beautifully designed themes
        </span>
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Inspired by{" "}
        <Link
          href="https://twitter.com/peduarte"
          target="_blank"
          className="font-medium text-primary underline underline-offset-4"
        >
          @peduarte
        </Link>{" "}
        work on{" "}
        <Link
          href="https://themes.ray.so"
          target="_blank"
          className="font-medium text-primary underline underline-offset-4"
        >
          Raycast Theme Explorer
        </Link>
        , a collection of themes designed to complement{" "}
        <Link
          href="https://ui.shadcn.com/"
          target="_blank"
          className="font-medium text-primary underline underline-offset-4"
        >
          shadcn/ui
        </Link>{" "}
        beautifully crafted components.
      </p>
      <h2 className="mt-6 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0 md:mt-10 md:text-3xl">
        Contributions are welcome, upload new themes or help us improve
      </h2>
      <p className="mt-4 pb-4 leading-7 md:mt-10">
        If you enjoy using this tool, please consider
        <Link
          href="https://github.com/luisFilipePT/shadcn-ui-theme-explorer"
          target="_blank"
          className="px-2"
        >
          <Star
            className="mb-1 inline text-amber-300"
            size={20}
            fill="yellow"
          />
        </Link>
        the repo and follow the authors to hear them rumbling on Open Source and
        more.
      </p>
    </section>
  )
}
