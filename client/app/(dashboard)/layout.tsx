import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Bell } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <SidebarProvider>
        <AppSidebar />

        <SidebarInset>
          <header className="flex h-12 items-center gap-2 border-b px-4 bg-[#0B1120] border-sidebar-border">
            <SidebarTrigger className="bg-[#0B1120] text-white hover:bg-[#223555] hover:text-white font-medium" />
            <Bell className="ml-auto size-5 text-white" />
          </header>
            <Toaster />
          <main className="flex flex-1 flex-col p-6 bg-[#0B1120]">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}