"use client"
import AddProjectDialog from "@/components/projects/add-project-dialog";
import ProjectTable from "@/components/projects/project-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Plus, Search } from "lucide-react";

function projects() {
  return (
    <div className="flex flex-col gap-6 p-6 h-[80vh] w-full">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">
          Projects
        </h1>

        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" className="h-8 flex items-center bg-[#0f1d47] text-white hover:bg-[#223555] hover:text-white border-[#223555] hover:cursor-pointer">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>

          <div className="relative bg-[#0f1d47] rounded-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />

            <Input
              placeholder="Search projects"
              className="pl-9 w-[250px] bg-[#0f1d47] text-white focus:ring-2 focus:ring-[#223555] focus:ring-offset-2 focus:ring-offset-[#0f1d47] border-[#223555]"
            />
          </div>
          <AddProjectDialog/>
        </div>
      </div>

      {/* Table Section */}
      <div>
        {/* Project Table */}
        <ProjectTable />
      </div>

    </div>
  )
}
export default projects;