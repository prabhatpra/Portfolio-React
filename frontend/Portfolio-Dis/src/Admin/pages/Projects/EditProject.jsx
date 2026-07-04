import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import projectData from "./projectData";

const EditProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Find project by id
  const project = projectData.find(
    (item) => item.id === Number(id)
  );

  const handleUpdate = (updatedProject) => {
    console.log("Updated Project:", updatedProject);

    // TODO:
    // Call your Spring Boot API here
    // projectService.updateProject(id, updatedProject)

    navigate("/admin/projects");
  };

  // If project doesn't exist
  if (!project) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-red-600">
          Project Not Found
        </h2>

        <p className="mt-2 text-gray-500">
          The requested project could not be found.
        </p>

        <button
          onClick={() => navigate("/admin/projects")}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Edit Project
        </h1>

        <p className="mt-2 text-gray-500">
          Update your portfolio project information.
        </p>
      </div>

      {/* Reusable Form */}
      <ProjectForm
        initialData={project}
        submitText="Update Project"
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default EditProject;