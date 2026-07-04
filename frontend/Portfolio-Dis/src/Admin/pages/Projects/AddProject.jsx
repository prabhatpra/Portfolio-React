import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Button from "../../components/ui/Button";
import ProjectForm from "./ProjectForm";

const AddProject = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    console.log("New Project:", data);

    // TODO:
    // await projectService.createProject(data);

    navigate("/admin/projects");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Add New Project
          </h1>

          <p className="mt-1 text-gray-500">
            Create a new project for your portfolio.
          </p>
        </div>

        <Button
          variant="secondary"
          onClick={() => navigate("/admin/projects")}
          className="flex items-center gap-2"
        >
          <FaArrowLeft />
          Back
        </Button>
      </div>

      {/* Form */}
      <ProjectForm
        submitText="Create Project"
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddProject;