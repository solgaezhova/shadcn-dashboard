import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { CalendarDaysIcon, UsersIcon, ClockIcon } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
          <div>
            <h1 className="text-base font-medium">Urgent Care Clinic</h1>
            <div className="text-xs text-muted-foreground">Open · Accepting walk-ins</div>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden sm:flex gap-3 items-center">
            <div className="flex items-center gap-2">
              <Badge variant="secondary"><UsersIcon className="size-3 mr-1" />72</Badge>
              <div className="text-xs text-muted-foreground">Patients Today</div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary"><ClockIcon className="size-3 mr-1" />28m</Badge>
              <div className="text-xs text-muted-foreground">Avg Wait</div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary"><CalendarDaysIcon className="size-3 mr-1" />3</Badge>
              <div className="text-xs text-muted-foreground">Open Rooms</div>
            </div>
          </div>

          <Button size="sm">New Check-in</Button>
        </div>
      </div>
    </header>
  )
}
