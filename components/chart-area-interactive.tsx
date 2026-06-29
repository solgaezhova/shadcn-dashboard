"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "Patients and average wait time"

const chartData = [
  { date: "2024-04-01", patients: 45, avgWait: 32 },
  { date: "2024-04-02", patients: 38, avgWait: 28 },
  { date: "2024-04-03", patients: 52, avgWait: 25 },
  { date: "2024-04-04", patients: 60, avgWait: 30 },
  { date: "2024-04-05", patients: 58, avgWait: 27 },
  { date: "2024-04-06", patients: 63, avgWait: 35 },
  { date: "2024-04-07", patients: 50, avgWait: 22 },
  { date: "2024-04-08", patients: 72, avgWait: 29 },
  { date: "2024-04-09", patients: 34, avgWait: 20 },
  { date: "2024-04-10", patients: 55, avgWait: 26 },
  { date: "2024-04-11", patients: 61, avgWait: 31 },
  { date: "2024-04-12", patients: 49, avgWait: 24 },
  { date: "2024-04-13", patients: 58, avgWait: 28 },
  { date: "2024-04-14", patients: 41, avgWait: 21 },
  { date: "2024-04-15", patients: 39, avgWait: 19 },
  { date: "2024-04-16", patients: 44, avgWait: 23 },
  { date: "2024-04-17", patients: 75, avgWait: 34 },
  { date: "2024-04-18", patients: 68, avgWait: 30 },
  { date: "2024-04-19", patients: 52, avgWait: 27 },
  { date: "2024-04-20", patients: 36, avgWait: 18 },
  { date: "2024-04-21", patients: 43, avgWait: 22 },
  { date: "2024-04-22", patients: 56, avgWait: 26 },
  { date: "2024-04-23", patients: 46, avgWait: 24 },
  { date: "2024-04-24", patients: 70, avgWait: 31 },
  { date: "2024-04-25", patients: 53, avgWait: 25 },
  { date: "2024-04-26", patients: 29, avgWait: 17 },
  { date: "2024-04-27", patients: 74, avgWait: 33 },
  { date: "2024-04-28", patients: 40, avgWait: 20 },
  { date: "2024-04-29", patients: 66, avgWait: 28 },
  { date: "2024-04-30", patients: 82, avgWait: 36 },
  { date: "2024-05-01", patients: 48, avgWait: 24 },
  { date: "2024-05-02", patients: 60, avgWait: 29 },
  { date: "2024-05-03", patients: 54, avgWait: 26 },
  { date: "2024-05-04", patients: 71, avgWait: 32 },
  { date: "2024-05-05", patients: 77, avgWait: 34 },
  { date: "2024-05-06", patients: 81, avgWait: 38 },
  { date: "2024-05-07", patients: 69, avgWait: 30 },
  { date: "2024-05-08", patients: 45, avgWait: 22 },
  { date: "2024-05-09", patients: 51, avgWait: 24 },
  { date: "2024-05-10", patients: 63, avgWait: 29 },
  { date: "2024-05-11", patients: 68, avgWait: 27 },
  { date: "2024-05-12", patients: 41, avgWait: 20 },
  { date: "2024-05-13", patients: 42, avgWait: 18 },
  { date: "2024-05-14", patients: 79, avgWait: 36 },
  { date: "2024-05-15", patients: 82, avgWait: 33 },
  { date: "2024-05-16", patients: 66, avgWait: 29 },
  { date: "2024-05-17", patients: 84, avgWait: 35 },
  { date: "2024-05-18", patients: 58, avgWait: 26 },
  { date: "2024-05-19", patients: 49, avgWait: 22 },
  { date: "2024-05-20", patients: 46, avgWait: 24 },
  { date: "2024-05-21", patients: 28, avgWait: 16 },
  { date: "2024-05-22", patients: 27, avgWait: 15 },
  { date: "2024-05-23", patients: 52, avgWait: 28 },
  { date: "2024-05-24", patients: 58, avgWait: 25 },
  { date: "2024-05-25", patients: 46, avgWait: 23 },
  { date: "2024-05-26", patients: 48, avgWait: 21 },
  { date: "2024-05-27", patients: 76, avgWait: 34 },
  { date: "2024-05-28", patients: 55, avgWait: 24 },
  { date: "2024-05-29", patients: 31, avgWait: 18 },
  { date: "2024-05-30", patients: 66, avgWait: 29 },
  { date: "2024-05-31", patients: 41, avgWait: 22 },
  { date: "2024-06-01", patients: 41, avgWait: 21 },
  { date: "2024-06-02", patients: 86, avgWait: 36 },
  { date: "2024-06-03", patients: 33, avgWait: 19 },
  { date: "2024-06-04", patients: 77, avgWait: 31 },
  { date: "2024-06-05", patients: 30, avgWait: 18 },
  { date: "2024-06-06", patients: 58, avgWait: 26 },
  { date: "2024-06-07", patients: 64, avgWait: 30 },
  { date: "2024-06-08", patients: 77, avgWait: 28 },
  { date: "2024-06-09", patients: 86, avgWait: 37 },
  { date: "2024-06-10", patients: 36, avgWait: 20 },
  { date: "2024-06-11", patients: 28, avgWait: 18 },
  { date: "2024-06-12", patients: 94, avgWait: 39 },
  { date: "2024-06-13", patients: 28, avgWait: 17 },
  { date: "2024-06-14", patients: 82, avgWait: 31 },
  { date: "2024-06-15", patients: 60, avgWait: 29 },
  { date: "2024-06-16", patients: 73, avgWait: 27 },
  { date: "2024-06-17", patients: 93, avgWait: 38 },
  { date: "2024-06-18", patients: 26, avgWait: 16 },
  { date: "2024-06-19", patients: 70, avgWait: 28 },
  { date: "2024-06-20", patients: 84, avgWait: 33 },
  { date: "2024-06-21", patients: 35, avgWait: 19 },
  { date: "2024-06-22", patients: 65, avgWait: 25 },
  { date: "2024-06-23", patients: 98, avgWait: 40 },
  { date: "2024-06-24", patients: 28, avgWait: 17 },
  { date: "2024-06-25", patients: 30, avgWait: 18 },
  { date: "2024-06-26", patients: 83, avgWait: 32 },
  { date: "2024-06-27", patients: 86, avgWait: 35 },
  { date: "2024-06-28", patients: 32, avgWait: 20 },
  { date: "2024-06-29", patients: 22, avgWait: 15 },
  { date: "2024-06-30", patients: 88, avgWait: 37 },
]

const chartConfig = {
  patients: { label: "Patients", color: "var(--chart-1)" },
  avgWait: { label: "Avg Wait (min)", color: "var(--chart-2)" },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Patients & Average Wait</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">Trends for the selected range</span>
          <span className="@[540px]/card:hidden">Trends</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:px-4! @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillPatients" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-patients)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-patients)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillAvgWait" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-avgWait)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-avgWait)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="avgWait"
              type="natural"
              fill="url(#fillAvgWait)"
              stroke="var(--color-avgWait)"
              stackId="a"
            />
            <Area
              dataKey="patients"
              type="natural"
              fill="url(#fillPatients)"
              stroke="var(--color-patients)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
