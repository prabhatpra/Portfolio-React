import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaEye,
  FaFilter,
  FaFolderOpen,
  FaGithub,
  FaGlobe,
  FaPlus,
  FaSearch,
  FaTrash,
} from "react-icons/fa";

import projectData from "./projectData";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import EmptyState from "../../components/ui/EmptyState";
import Input from "../../components/forms/Input";
import Table from "../../components/tables/Table";

const ProjectTable = () => {
  const [search, setSearch] = useState("");

  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    return projectData.filter(
      (project) =>
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(
    filteredProjects.length / projectsPerPage
  );

  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const columns = [
    {
      key: "project",
      title: "Project",
    },
    {
      key: "technology",
      title: "Technology",
    },
    {
      key: "status",
      title: "Status",
    },
    {
      key: "featured",
      title: "Featured",
    },
    {
      key: "links",
      title: "Links",
    },
    {
      key: "actions",
      title: "Actions",
      className: "text-center",
    },
  ];

  return (
    <Card
      title="Projects"
      subtitle={`${filteredProjects.length} Projects Available`}
      headerAction={
        <Link to="/admin/projects/add">
          <Button leftIcon={<FaPlus />}>
            Add Project
          </Button>
        </Link>
      }
    >
      {/* Toolbar */}

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div className="w-full lg:max-w-md">

          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            leftIcon={<FaSearch />}
          />

        </div>

        <Button
          variant="secondary"
          leftIcon={<FaFilter />}
        >
          Filter
        </Button>

      </div>

      {filteredProjects.length === 0 ? (
        <EmptyState
          icon={FaFolderOpen}
          title="No Projects Found"
          description="Try another search keyword or add a new project."
          actionText="Add Project"
        />
      ) : (
        <>
          <Table columns={columns}>
                        {currentProjects.map((project) => (
              <tr
                key={project.id}
                className="transition hover:bg-gray-50"
              >
                {/* Project */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-16 w-24 rounded-xl border object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Technology */}
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="info"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <Badge
                    variant={
                      project.status === "Published"
                        ? "success"
                        : "warning"
                    }
                  >
                    {project.status}
                  </Badge>
                </td>

                {/* Featured */}
                <td className="px-6 py-4">
                  <Badge
                    variant={
                      project.featured
                        ? "primary"
                        : "secondary"
                    }
                  >
                    {project.featured
                      ? "Featured"
                      : "No"}
                  </Badge>
                </td>

                {/* Links */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4 text-lg">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 transition hover:scale-110"
                    >
                      <FaGlobe />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-700 transition hover:scale-110"
                    >
                      <FaGithub />
                    </a>

                  </div>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">

                    <Button
                      variant="ghost"
                      size="sm"
                    >
                      <FaEye />
                    </Button>

                    <Link
                      to={`/admin/projects/edit/${project.id}`}
                    >
                      <Button
                        variant="warning"
                        size="sm"
                      >
                        <FaEdit />
                      </Button>
                    </Link>

                    <Button
                      variant="danger"
                      size="sm"
                    >
                      <FaTrash />
                    </Button>

                  </div>
                </td>
              </tr>
            ))}
          </Table>

          {/* Mobile View */}

          <div className="mt-6 grid gap-5 lg:hidden">

            {currentProjects.map((project) => (

              <div
                key={project.id}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full rounded-xl object-cover"
                />

                <div className="mt-4">

                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {project.category}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="info"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">

                    <Badge
                      variant={
                        project.status === "Published"
                          ? "success"
                          : "warning"
                      }
                    >
                      {project.status}
                    </Badge>

                    {project.featured && (
                      <Badge variant="primary">
                        Featured
                      </Badge>
                    )}

                  </div>

                  <div className="mt-5 flex justify-between">

                    <div className="flex gap-4 text-lg">

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGlobe />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub />
                      </a>

                    </div>

                    <div className="flex gap-2">

                      <Button
                        variant="ghost"
                        size="sm"
                      >
                        <FaEye />
                      </Button>

                      <Link
                        to={`/admin/projects/edit/${project.id}`}
                      >
                        <Button
                          variant="warning"
                          size="sm"
                        >
                          <FaEdit />
                        </Button>
                      </Link>

                      <Button
                        variant="danger"
                        size="sm"
                      >
                        <FaTrash />
                      </Button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

                    {/* Pagination */}

          {totalPages > 1 && (
            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-semibold">
                  {(currentPage - 1) * projectsPerPage + 1}
                </span>{" "}
                to{" "}
                <span className="font-semibold">
                  {Math.min(
                    currentPage * projectsPerPage,
                    filteredProjects.length
                  )}
                </span>{" "}
                of{" "}
                <span className="font-semibold">
                  {filteredProjects.length}
                </span>{" "}
                projects
              </p>

              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((prev) => prev - 1)
                  }
                >
                  Previous
                </Button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => (
                    <Button
                      key={index}
                      size="sm"
                      variant={
                        currentPage === index + 1
                          ? "primary"
                          : "secondary"
                      }
                      onClick={() =>
                        setCurrentPage(index + 1)
                      }
                    >
                      {index + 1}
                    </Button>
                  )
                )}

                <Button
                  variant="secondary"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((prev) => prev + 1)
                  }
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </Card>
  );
};

export default ProjectTable;