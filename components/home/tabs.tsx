import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Element = React.JSX.Element

type CardsContent = {
  name: string
  value: string
  description: string
  content: string
  footer: Element
}

const cardsContent: CardsContent[] = [
  {
    name: "Luís Oliveira",
    value: "luisFilipePT",
    description: "Product Engineer, father and adventurer.",
    content:
      "I’m Luis, a Full-stack product engineer based in Portugal. Helping to create a better world one company at a time. Crafting user experiences supported by data to solve real problems.",
    footer: (
      <HoverCard>
        <HoverCardTrigger>@luisFilipePT</HoverCardTrigger>
        <HoverCardContent>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    ),
  },
  {
    name: "🐞 Joana Santos",
    value: "joanamcs",
    description: "Full-stack Product Engineer",
    content:
      "I’m Joana, a Full-stack product product engineer based in Portugal. The will to learn runs through my veins just as much as the will to share knowledge.",
    footer: (
      <HoverCard>
        <HoverCardTrigger>@joanamcs</HoverCardTrigger>
        <HoverCardContent>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    ),
  },
]

export default function AuthorsTabs() {
  return (
    <Tabs
      defaultValue={cardsContent[0].value}
      className="max-w-[400px] md:max-w-[980px]"
    >
      <TabsList>
        {cardsContent.map((card) => (
          <TabsTrigger value={card.value} key={card.value}>
            {card.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {cardsContent.map((card) => (
        <TabsContent value={card.value} key={card.value}>
          <Card>
            <CardHeader>
              <CardTitle>{card.name}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
            <CardFooter>{card.footer}</CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}
