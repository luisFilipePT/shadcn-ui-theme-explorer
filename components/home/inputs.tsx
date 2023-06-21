import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Inputs() {
  return (
    <div className={"flex flex-col gap-4"}>
      <Input type="email" placeholder="Email" />
      <Input disabled type="email" placeholder="Email" />
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email-2">Email</Label>
        <Input type="email" id="email-2" placeholder="Email" />
        <p className="text-sm text-muted-foreground">
          Enter your email address.
        </p>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
    </div>
  )
}
