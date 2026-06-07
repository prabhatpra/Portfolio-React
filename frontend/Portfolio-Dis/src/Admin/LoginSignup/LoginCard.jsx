import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const LoginCard = ({
  formData,
  setFormData,
  showPassword,
  setShowPassword,
  handleLoginSubmit,
  setForgotType,
  setIsLogin,
  errorMsg,
}) => {

  // SAFE CHANGE HANDLER
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="p-4 sm:p-6 shadow-xl [backface-visibility:hidden]">

      {/* ERROR MESSAGE */}
      {errorMsg && (
        <div className="text-red-700 bg-red-100 p-3 mb-4 text-center rounded-xl">
          {errorMsg}
        </div>
      )}

      {/* TITLE */}
      <h2 className="text-center text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mb-2 drop-shadow-md">
        Login
      </h2>

      {/* SUBTITLE */}
      <div className="mb-4 text-center text-sm sm:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 drop-shadow-md">
        👋 Welcome back! Login to continue.
      </div>

      {/* FORM */}
      <form onSubmit={handleLoginSubmit}>

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-3 mb-4 rounded-xl text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />

        {/* PASSWORD */}
        <div className="relative mb-4">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl text-sm text-white placeholder:text-gray-300 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />

          {/* PASSWORD TOGGLE */}
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-300"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        {/* FORGOT BUTTONS */}
        <div className="flex justify-between text-xs mb-6">

          <button
            type="button"
            onClick={() => setForgotType?.("username")}
            className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text text-sm sm:text-base font-semibold hover:scale-105 hover:underline transition-all duration-300"
          >
            Forgot Username?
          </button>

          <button
            type="button"
            onClick={() => setForgotType?.("password")}
            className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text text-sm sm:text-base font-semibold hover:scale-105 hover:underline transition-all duration-300"
          >
            Forgot Password?
          </button>

        </div>

        {/* LOGIN BUTTON */}
        <div className="flex justify-center">

          <button
            type="submit"
            className="bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-300 text-black px-4 py-2 rounded-xl hover:text-white w-32 hover:w-64 transition-all duration-300 shadow-md font-semibold"
          >
            Login
          </button>

        </div>

      </form>

      {/* SIGNUP SWITCH */}
      <p className="mt-6 text-center text-sm sm:text-base text-gray-700 dark:text-gray-300">

        Don’t have an account?{" "}

        <button
          onClick={() => setIsLogin(false)}
          className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text font-semibold text-base sm:text-lg hover:scale-105 hover:underline transition-all duration-300"
        >
          Signup
        </button>

      </p>

    </div>
  );
};

export default LoginCard;