import { Badge } from "@/components/ui/badge"

interface ProjectStatusProps {
    status: "Active" | "Review" | "Completed"
}

export default function ProjectStatus({
    status,
}: ProjectStatusProps) {

    const variants = {
        Active: "bg-green-100 text-green-700",
        Review: "bg-yellow-100 text-yellow-700",
        Completed: "bg-blue-100 text-blue-700",
    }

    return (
        <Badge className={variants[status]}>
            {status}
        </Badge>
    )
}