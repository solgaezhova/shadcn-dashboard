"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingUpIcon, TrendingDownIcon } from "lucide-react"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card border-l-4" style={{ borderLeftColor: "var(--chart-1)", background: "linear-gradient(180deg, color-mix(in oklab, var(--chart-1) 10%, white 90%), var(--card))" }}>
        <CardHeader>
          <CardDescription>Patients Today</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            72
          </CardTitle>
          <CardAction>
            <Badge variant="secondary" className="text-primary">
              <TrendingUpIcon />
              +6%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Slight increase vs yesterday <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Includes walk-ins & appointments</div>
        </CardFooter>
      </Card>

      <Card className="@container/card border-l-4" style={{ borderLeftColor: "var(--chart-2)", background: "linear-gradient(180deg, color-mix(in oklab, var(--chart-2) 10%, white 90%), var(--card))" }}>
        <CardHeader>
          <CardDescription>Average Wait Time</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            28 min
          </CardTitle>
          <CardAction>
            <Badge variant="secondary" className="text-primary">
              <TrendingDownIcon />
              -12%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Wait time improving <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Target: under 30 minutes</div>
        </CardFooter>
      </Card>

      <Card className="@container/card border-l-4" style={{ borderLeftColor: "var(--chart-3)", background: "linear-gradient(180deg, color-mix(in oklab, var(--chart-3) 10%, white 90%), var(--card))" }}>
        <CardHeader>
          <CardDescription>Open Exam Rooms</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            3
          </CardTitle>
          <CardAction>
            <Badge variant="secondary" className="text-primary">
              <TrendingDownIcon />
              -1
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Rooms available for triage
          </div>
          <div className="text-muted-foreground">Total rooms: 8</div>
        </CardFooter>
      </Card>

      <Card className="@container/card border-l-4" style={{ borderLeftColor: "var(--chart-5)", background: "linear-gradient(180deg, color-mix(in oklab, var(--chart-5) 10%, white 90%), var(--card))" }}>
        <CardHeader>
          <CardDescription>Staff On Duty</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            12
          </CardTitle>
          <CardAction>
            <Badge variant="secondary" className="text-primary">
              <TrendingUpIcon />
              +2
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Current clinical staff on shift
          </div>
          <div className="text-muted-foreground">Includes nurses & physicians</div>
        </CardFooter>
      </Card>
    </div>
  )
}
