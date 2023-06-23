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
    <section className="container p-2 max-w-[80%] md:pb-10">
      <h1 className="scroll-m-20 text-xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
        <p className="center py-4 md:py-8 text-center text-3xl md:text-8xl">Why so bland?</p>
        <span className="inline-block bg-gradient-to-r from-ring to-foreground bg-clip-text py-2 md:p-2 text-transparent">
          Color the web with beautifully designed themes
        </span>
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Inspired by{" "}
        <Link
          href="https://twitter.com/peduarte"
          className="font-medium text-primary underline underline-offset-4"
        >
          @peduarte
        </Link>{" "}
        work on{" "}
        <Link
          href="https://themes.ray.so"
          className="font-medium text-primary underline underline-offset-4"
        >
          Raycast Theme Explorer
        </Link>
        , a collection of themes designed to complement{" "}
        <Link
          href="https://ui.shadcn.com/"
          className="font-medium text-primary underline underline-offset-4"
        >
          shadcn/ui
        </Link>{" "}
        beautifully crafted components.
      </p>
      <h2 className="mt-6 md:mt-10 scroll-m-20 border-b pb-2 text-xl md:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Contributions are welcome, upload new themes or help us improve
      </h2>
      <p className="mt-4 md:mt-10 leading-7 pb-4">
        If you enjoy using this tool, please consider{" "}
        <Star className="mb-1 inline text-amber-300" size={20} fill="yellow" />{" "}
        the repo and follow the authors to hear them rumbling on Open Source and
        more.
      </p>
    </section>
  )
}
