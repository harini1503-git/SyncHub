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
          <header className="flex h-16 items-center gap-2 border-b px-4 bg-[#1E293B] border-sidebar-border">
            <SidebarTrigger className="bg-[#1E293B] text-white hover:bg-[#1b3e77] hover:text-white font-medium" />
            <Bell className="ml-auto size-4 text-white" />
          </header>
            <Toaster />
          <main className="flex flex-1 flex-col p-6 bg-[#1E293B]">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}