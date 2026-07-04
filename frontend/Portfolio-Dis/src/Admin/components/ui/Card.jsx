import React from "react";
import clsx from "clsx";

const Card = ({
  children,
  title,
  subtitle,
  headerAction,
  footer,
  className,
  bodyClassName,
}) => {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      {(title || subtitle || headerAction) && (
        <div className="flex items-start justify-between border-b border-gray-100 px-6 py-5">
          <div>
            {title && (
              <h2 className="text-lg font-semibold text-gray-900">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-1 text-sm text-gray-500">
                {subtitle}
              </p>
            )}
          </div>

          {headerAction && (
            <div className="flex items-center">
              {headerAction}
            </div>
          )}
        </div>
      )}

      <div className={clsx("p-6", bodyClassName)}>
        {children}
      </div>

      {footer && (
        <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;