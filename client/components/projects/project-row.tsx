import ProjectStatus from "./project-status"
import { Progress } from "@/components/ui/progress"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useState } from "react";
import { AlertDialogDestructive } from "../projects/delete-project-dialog";
import { DialogDemo } from "./edit-project-dialog";

export interface Project {
    id: number,
    name: string,
    description: string,
    avatar?: string;
    owner: string,
    status: "Active" | "Review" | "Completed",
    team: number
}

export interface ProjectRowProps {
    project: Project
}

export default function ProjectRow({
    project,
}: ProjectRowProps) {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    return (
        <>
            <td className="p-4">
                <div>
                    <p className="font-medium text-white">
                        {project.name}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        {project.description}
                    </p>
                </div>
            </td>

            <td className="p-4">
                <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={project.avatar} />
                        <AvatarFallback>
                            {project.owner
                                .split(" ")
                                .map((name) => name[0])
                                .join("")
                                .toUpperCase()}
                        </AvatarFallback>
                    </Avatar>

                    <span className="text-white font-medium">
                        {project.owner}
                    </span>
                </div>
            </td>

            <td className="p-4 text-white">
                <ProjectStatus
                    status={project.status}
                />
            </td>

            <td className="p-4 text-white">
                {project.team} members
            </td>

            <td className="p-4 text-right text-white">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => {
                                setEditDialogOpen(true);
                            }}>
                            Edit Project
                        </DropdownMenuItem>
                        {/* <DropdownMenuSeparator /> */}
                        <DropdownMenuItem onClick={() => {
                            setDeleteDialogOpen(true);
                        }}>
                            Delete Project
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <AlertDialogDestructive open={deleteDialogOpen} />
                <DialogDemo open={editDialogOpen} />
            </td>
        </>
    )
}