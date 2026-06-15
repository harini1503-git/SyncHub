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
import {usePathname} from "next/navigation"
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
      // isActive: true,
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
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Header */}
      <SidebarHeader className="border-b border-transparent">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            {/* <SidebarMenuButton className="h-16 bg-[#0B1120] text-white hover:bg-[#1b3e77] hover:text-white font-bold"> */}
              {/* <img src="/SyncFlow_Icon.svg" alt="SyncHub Logo" width={400} height={24} className="mr-2 border border-transparent rounded-md" /> */}
              <div className="flex aspect-square size-9 items-center justify-center shrink-0 rounded-lg bg-blue-600 text-white">
                {/* I am using the 'Command' icon you already imported, 
                    but you can replace this with an <img> of JUST your 'S' logo */}
                <img src="/SyncHubLogo.png" alt="SyncHub" className="size-9" /> 
              </div>
              <div className="flex flex-col gap-0.5 leading-none group-data-[collapsible=icon]:hidden truncate">
                <span className="font-semibold text-3xl tracking-tight text-white">SyncHub</span>
              </div>
            {/* </SidebarMenuButton> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="gap-6">
        <NavMain items={data.navMain.map((item) => ({ ...item, isActive: pathname === item.url }))} />
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-transparent hover:!bg-[#0B1120]">
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}