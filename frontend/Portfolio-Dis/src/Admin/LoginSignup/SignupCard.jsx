import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignupCard = ({
  formData,
  setFormData,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  handleSignupSubmit,
  setIsLogin,
  errorMsg,
}) => {

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="absolute inset-0 p-4 sm:p-6 shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">

      {errorMsg && (
        <div className="text-red-700 bg-red-100 p-3 mb-4 text-center rounded-xl">
          {errorMsg}
        </div>
      )}

      <h2 className="text-center text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mb-4 drop-shadow-md">
        Signup
      </h2>

      <div className="mb-4 text-center text-sm sm:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 drop-shadow-md">
        🚀 Create your account to continue.
      </div>

      {/* FIX #2: div ki jagah form tag lagaya — handleSignupSubmit ab properly kaam karega */}
      <form onSubmit={handleSignupSubmit}>

        <input
          type="text"
          name="userName"
          placeholder="Enter username"
          className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-3 mb-4 rounded-xl text-sm dark:text-white text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={formData.userName}
          onChange={handleChange}
          autoComplete="username"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-3 mb-4 rounded-xl text-sm dark:text-white text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create password"
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl text-sm dark:text-white text-gray-800 placeholder:text-gray-300 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-300"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="relative mb-6">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm password"
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl text-sm dark:text-white text-gray-800 placeholder:text-gray-300 pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-300"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="flex justify-center">
          {/* FIX #2: type="button" ki jagah type="submit" — form properly submit hoga */}
          <button
            type="submit"
            className="bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-300 text-black px-4 py-2 rounded-xl hover:text-white w-32 hover:w-64 transition-all duration-300 shadow-md font-semibold"
          >
            Signup
          </button>
        </div>

      </form>

      <p className="mt-6 text-center text-sm sm:text-base text-gray-700 dark:text-gray-300">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text font-semibold text-base hover:underline transition-all duration-300"
        >
          Login
        </button>
      </p>

    </div>
  );
};

export default SignupCard;
