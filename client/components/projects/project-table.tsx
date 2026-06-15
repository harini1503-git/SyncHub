import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import AddProjectDialog from "./add-project-dialog"
import ProjectRow, { Project } from "./project-row"

const projects: Project[] = [
    {
        id: 1,
        name: "SyncHub Project",
        description: "Internal management platform",
        owner: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=1",
        status: "Active",
        team: 5,
    },
    {
        id: 2,
        name: "CRM Pro",
        description: "Customer relationship system",
        owner: "Sarah",
        avatar: "https://i.pravatar.cc/150?img=2",
        status: "Review",
        team: 4,
    },
    {
        id: 1,
        name: "SyncHub Project",
        description: "Internal management platform",
        owner: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=1",
        status: "Active",
        team: 5,
    },
    {
        id: 2,
        name: "CRM Pro",
        description: "Customer relationship system",
        owner: "Sarah",
        avatar: "https://i.pravatar.cc/150?img=2",
        status: "Review",
        team: 4,
    },
    {
        id: 1,
        name: "SyncHub Project",
        description: "Internal management platform",
        owner: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=1",
        status: "Active",
        team: 5,
    },
    {
        id: 2,
        name: "CRM Pro",
        description: "Customer relationship system",
        owner: "Sarah",
        avatar: "https://i.pravatar.cc/150?img=2",
        status: "Review",
        team: 4,
    },
    {
        id: 1,
        name: "SyncHub Project",
        description: "Internal management platform",
        owner: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=1",
        status: "Active",
        team: 5,
    },
    {
        id: 2,
        name: "CRM Pro",
        description: "Customer relationship system",
        owner: "Sarah",
        avatar: "https://i.pravatar.cc/150?img=2",
        status: "Review",
        team: 4,
    },
]
export default function ProjectTable() {
    return (
        <div className="space-y-4">
            <div className="bg-[#1c243a] shadow-sm rounded-md border border-[#223555] h-[550px] overflow-y-auto  flex flex-col">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#223555]">
                            <TableHead className="sticky top-0 bg-[#223555] text-white p-4 w-[425px]">
                                Project
                            </TableHead>

                            <TableHead className="sticky top-0 bg-[#223555] text-white p-4 w-[250px]">
                                Owner
                            </TableHead>

                            <TableHead className="sticky top-0 bg-[#223555] text-white p-4 w-[170px]">
                                Status
                            </TableHead>

                            <TableHead className="sticky top-0 bg-[#223555] text-white p-4">
                                Team
                            </TableHead>
                            {/* <TableHead className="sticky top-0 bg-[#1b3e77] text-white p-4">
                            </TableHead> */}
                        </TableRow>
                    </TableHeader>
                </Table>

                <div className="flex-1 overflow-y-auto">
                    <Table>

                        <TableBody>
                            {projects.map((project, index) => (
                                <TableRow key={index}>
                                    <ProjectRow project={project} />
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}