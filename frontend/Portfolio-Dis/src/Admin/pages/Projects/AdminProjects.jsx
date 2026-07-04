import React from "react";
import { Link } from "react-router-dom";
import { FaFolderOpen, FaPlus } from "react-icons/fa";

import Button from "../../components/ui/Button";
import ProjectTable from "./ProjectTable";
import projectData from "./projectData";

const AdminProjects = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
            <FaFolderOpen className="text-3xl text-blue-600" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Project Management
            </h1>

            <p className="mt-1 text-gray-500">
              Manage, organize and update your portfolio projects.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
                Total Projects : {projectData.length}
              </span>

              <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
                Published :{" "}
                {
                  projectData.filter(
                    (project) => project.status === "Published"
                  ).length
                }
              </span>

              <span className="rounded-full bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-700">
                Draft :{" "}
                {
                  projectData.filter(
                    (project) => project.status === "Draft"
                  ).length
                }
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-3">
          <Link to="/admin/projects/add">
            <Button leftIcon={<FaPlus />}>
              Add Project
            </Button>
          </Link>
        </div>
      </div>

      {/* Table */}
      <ProjectTable />
    </div>
  );
};

export default AdminProjects;