import React from "react";
import { FaInbox } from "react-icons/fa";
import Button from "./Button";

const EmptyState = ({
  icon,
  title = "No Data Found",
  description = "There is nothing to display right now.",
  actionText,
  onAction,
}) => {
  const Icon = icon || FaInbox;

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
        <Icon className="text-4xl text-indigo-600" />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
        {description}
      </p>

      {actionText && (
        <Button
          className="mt-6"
          onClick={onAction}
        >
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;