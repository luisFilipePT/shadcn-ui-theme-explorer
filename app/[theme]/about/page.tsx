import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import AuthorsTabs from "@/components/home/tabs"

export default function AboutPage() {
  return (
    <div>
      <section className="container grid w-full grid-cols-2 items-center justify-between pb-8 pt-6 md:py-5">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Exploring... <br className="hidden sm:inline" />
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Get to know
          </p>
        </div>
      </section>
      <section className="container grid w-full grid-cols-2 items-center justify-between gap-6 pb-8 pt-6 md:py-5">
        <AuthorsTabs />
        <div className="grid w-full gap-2">
          <Label htmlFor="message-2">Your Message</Label>
          <Textarea placeholder="Type your message here." id="message-2" />
          <p className="text-sm text-muted-foreground">
            Your message will be copied to the support team.
          </p>
        </div>
      </section>
    </div>
  )
}
