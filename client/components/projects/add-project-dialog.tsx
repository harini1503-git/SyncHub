import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogOverlay
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

export default function AddProjectDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary" size="sm" className="h-8 flex items-center bg-[#0f1d47] text-white hover:bg-[#223555] hover:text-white border-[#223555] hover:cursor-pointer">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                </Button>
            </DialogTrigger>

            <DialogOverlay className="bg-black/30 backdrop-blur-md h-full" />
            <DialogContent className="bg-[#1c243a] shadow-sm rounded-md border border-[#223555] h-[auto] w-full">
                <DialogHeader className="bg-[#223555] shadow-sm border border-[#223555] w-full m-0 pr-4 pl-6 px-4 py-1">
                    <DialogTitle className="text-white text-lg font-semibold">
                        Add New Project
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4 mx-4 mt-1 mb-5">
                    <Input placeholder="Project Name" className="h-8 bg-[#1d263f] text-white placeholder:text-muted-foreground border-[#223555]" />
                    <Input placeholder="Owner" className="h-8 bg-[#1d263f] text-white placeholder:text-muted-foreground border-[#223555]" />

                    <Button variant="secondary" size="sm" className="h-8 flex items-center bg-[#223555] text-white hover:bg-[#1c243a] hover:text-white border-[#223555] hover:cursor-pointer">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Project
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}