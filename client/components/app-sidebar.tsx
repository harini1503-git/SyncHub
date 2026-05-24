"use client"

import * as React from "react"
import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  FolderKanban,
  MessageSquare,
  CalendarDays,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Alex Carter",
    email: "alex@syncHub.com",
    avatar: "/avatars/alex.jpg",
  },

  teams: [
    {
      name: "SyncHub",
      logo: Command,
      plan: "Enterprise",
    },
  ],

  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: FolderKanban,
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: SquareTerminal,
    },
    {
      title: "Chat",
      url: "/chat",
      icon: MessageSquare,
    },
    {
      title: "Meetings",
      url: "/meetings",
      icon: CalendarDays,
    },
    {
      title: "Teams",
      url: "/teams",
      icon: Users,
    },
  ],
}

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Header */}
      <SidebarHeader className="border-b border-transparent">
        <SidebarMenu>
          <SidebarMenuItem>
            {/* <SidebarMenuButton className="h-16 bg-[#0B1120] text-white hover:bg-[#1b3e77] hover:text-white font-bold"> */}
              <img src="/SyncFlow_Icon.svg" alt="SyncHub Logo" width={400} height={24} className="mr-2 border border-transparent rounded-md" />
            {/* </SidebarMenuButton> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="gap-6">
        <NavMain items={data.navMain} />
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-transparent hover:!bg-[#1e293b]">
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}