import React, { useState } from "react";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/forms/Input";
import Select from "../../components/forms/Select";

const ProjectForm = ({
  initialData = {},
  onSubmit,
  submitText = "Save Project",
}) => {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    category: initialData.category || "",
    description: initialData.description || "",
    technologies: initialData.technologies || "",
    github: initialData.github || "",
    live: initialData.live || "",
    status: initialData.status || "Published",
    featured: initialData.featured || false,
    image: null,
  });

  const [preview, setPreview] = useState(initialData.image || "");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.(formData);
  };

  return (
    <Card
      title="Project Information"
      subtitle="Create or update your portfolio project."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Project Title */}

          <Input
            label="Project Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Portfolio Website"
            required
          />

          {/* Category */}

          <Input
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Full Stack"
            required
          />

          {/* Technologies */}

          <div className="md:col-span-2">
            <Input
              label="Technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              placeholder="React, Tailwind CSS, Spring Boot"
            />
          </div>

                    {/* Description */}

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              rows={6}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a detailed description about your project..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* GitHub URL */}

          <Input
            type="url"
            label="GitHub URL"
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="https://github.com/username/project"
          />

          {/* Live URL */}

          <Input
            type="url"
            label="Live Demo URL"
            name="live"
            value={formData.live}
            onChange={handleChange}
            placeholder="https://yourproject.com"
          />

          {/* Status */}

          <Select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={[
              {
                value: "Published",
                label: "Published",
              },
              {
                value: "Draft",
                label: "Draft",
              },
            ]}
          />

          {/* Featured */}

          <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
            <input
              id="featured"
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="h-5 w-5 rounded accent-blue-600"
            />

            <label
              htmlFor="featured"
              className="ml-3 text-sm font-medium text-gray-700"
            >
              Featured Project
            </label>
          </div>

          {/* Image Upload */}

          <div className="md:col-span-2">

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Project Image
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 transition hover:border-blue-500 hover:bg-blue-50">

              <span className="mb-2 text-sm text-gray-600">
                Click to upload image
              </span>

              <span className="text-xs text-gray-400">
                PNG, JPG, JPEG
              </span>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>

            {preview && (
              <div className="mt-6">

                <img
                  src={preview}
                  alt="Preview"
                  className="h-64 w-full rounded-2xl border object-cover md:w-96"
                />

              </div>
            )}

          </div>

        </div>

                {/* Action Buttons */}

        <div className="flex flex-col-reverse gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">

          <Button
            type="reset"
            variant="secondary"
            onClick={() => {
              setFormData({
                title: initialData.title || "",
                category: initialData.category || "",
                description: initialData.description || "",
                technologies: initialData.technologies || "",
                github: initialData.github || "",
                live: initialData.live || "",
                status: initialData.status || "Published",
                featured: initialData.featured || false,
                image: null,
              });

              setPreview(initialData.image || "");
            }}
          >
            Reset
          </Button>

          <Button
            type="submit"
            variant="primary"
          >
            {submitText}
          </Button>

        </div>

      </form>
    </Card>
  );
};

export default ProjectForm;