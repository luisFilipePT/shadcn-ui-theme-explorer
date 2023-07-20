import Image from "next/image"
import Link from "next/link"
import joanaMemoji from "@/images/joana-memoji.webp"
import luisMemoji from "@/images/luis-memoji.png"
import { Copyright } from "lucide-react"

export default function Footer() {
  return (
    <footer className="container inset-x-0 bottom-0">
      <p className="py-2 text-sm text-muted-foreground">
        For the best experience, we recommend viewing on desktop.
      </p>
      <div className="flex justify-between">
        <div className="flex items-end">
          <Link href="https://www.luisfilipept.com/" target="_blank">
            <Image
              src={luisMemoji}
              alt="Luis avatar, just a memoji"
              width="50"
              height="50"
              loading="lazy"
            />
          </Link>
          <Link
            href="https://www.luisfilipept.com/"
            target="_blank"
            className="hidden sm:inline"
          >
            <span className="text-sm font-medium text-muted-foreground underline underline-offset-4">
              Luis Oliveira
            </span>
          </Link>
        </div>
        <div className="self-end pb-1">
          <div className="flex items-end text-sm">
            <Copyright height={17} width={17} />
            <Link
              href="https://ui.shadcn.com/"
              target="_blank"
              className="hidden sm:inline"
            >
              &nbsp;
              <span className="text-sm font-medium text-muted-foreground underline underline-offset-4">
                shadcn/ui
              </span>
            </Link>
            &nbsp;Theme Explorer {new Date().getFullYear()}.
          </div>
        </div>
        <div className="flex items-end">
          <Link href="https://joanasantos.vercel.app/" target="_blank">
            <Image
              src={joanaMemoji}
              alt="Joana's avatar, just a memoji"
              width="50"
              height="50"
              loading="lazy"
            />
          </Link>
          <Link
            href="https://joanasantos.vercel.app/"
            target="_blank"
            className="hidden sm:inline"
          >
            <span className="text-sm font-medium text-muted-foreground underline underline-offset-4">
              Joana Santos
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
