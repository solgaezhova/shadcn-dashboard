"use client"

import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, CommandIcon, CalendarDaysIcon } from "lucide-react"

const data = {
  user: {
    name: "Urgent Care Clinic",
    email: "frontdesk@clinic.example",
    avatar: "/avatars/clinic.jpg",
  },
  navMain: [
    { title: "Dashboard", url: "/", icon: <LayoutDashboardIcon />, isActive: true },
    { title: "Check-ins", url: "/check-ins", icon: <ListIcon /> },
    { title: "Appointments", url: "/appointments", icon: <CalendarDaysIcon /> },
    { title: "Triage", url: "/triage", icon: <ChartBarIcon /> },
    { title: "Staff", url: "/staff", icon: <UsersIcon /> },
    { title: "Rooms", url: "/rooms", icon: <FolderIcon /> },
  ],
  navClouds: [],
  navSecondary: [
    { title: "Settings", url: "/settings", icon: <Settings2Icon /> },
    { title: "Get Help", url: "/help", icon: <CircleHelpIcon /> },
    { title: "Search", url: "/search", icon: <SearchIcon /> },
  ],
  documents: [
    { name: "EMR", url: "/emr", icon: <DatabaseIcon /> },
    { name: "Lab Results", url: "/labs", icon: <FileChartColumnIcon /> },
    { name: "Billing", url: "/billing", icon: <FileIcon /> },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5! bg-primary/10 text-primary ring-1 ring-primary/20"
            >
              <a href="#">
                <CommandIcon className="size-5!" />
                <span className="text-base font-semibold">UC Cypress</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <NavUser user={data.user} />
          </div>
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
