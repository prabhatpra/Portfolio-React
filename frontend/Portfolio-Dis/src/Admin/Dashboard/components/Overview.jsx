import React from "react";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
      {/* Portfolio Status */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6">
        <h3 className="text-xl font-bold mb-4">
          Portfolio Status
        </h3>

        <div className="space-y-3 text-gray-300">
          <p>✅ Portfolio Online</p>
          <p>✅ Resume Active</p>
          <p>✅ Contact Form Working</p>
          <p>✅ GitHub Connected</p>
        </div>
      </div>

      {/* Latest Update */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6">
        <h3 className="text-xl font-bold mb-4">
          Latest Update
        </h3>

        <p className="text-gray-300 leading-7">
          Recently added new React and Spring Boot projects along with
          dashboard improvements.
        </p>
      </div>
    </div>
  );
};

export default Overview;