"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: any
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sm">
        Projects
      </SidebarGroupLabel>

      <SidebarMenu className="mt-2 gap-2">
        {projects.map((project) => (
          <SidebarMenuItem key={project.name}>
            <SidebarMenuButton
              asChild
              className="h-11 rounded-xl text-base"
            >
              <a href={project.url}>
                <project.icon className="size-5" />
                <span>{project.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}