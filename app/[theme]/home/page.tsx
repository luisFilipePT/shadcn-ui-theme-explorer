import AuthorsTabs from "@/components/home/tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home page",
    description: "Beautifully designed themes built for shadcn/ui",
  }

export default function HomePage(){
    return (
        <section className="grid w-full grid-cols-2 items-center justify-between pb-8 pt-6 md:py-5 px-4">
            <AuthorsTabs/>
        </section>
    )
}