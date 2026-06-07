import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";

const Login = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [forgotType, setForgotType] = useState(null);
  const [forgotEmail, setForgotEmail] = useState("");

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const cardRef = useRef(null);

  // AUTO CLEAR MESSAGE
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message.text]);

  // 3D EFFECT
  const handleMouseMove = (e) => {
    if (window.innerWidth < 640) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRotateY(((x / rect.width) - 0.5) * 30);
    setRotateX(((y / rect.height) - 0.5) * -30);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const glowShadow = isHovering
    ? `${-rotateY / 3}px ${rotateX / 3}px 25px rgba(0,200,255,0.6)`
    : "none";

  // CLOSE POPUP
  const handleClosePopup = () => {
    setShowPopup(false);
    setForgotType(null);
    setForgotEmail("");
    setMessage({ text: "", type: "" });
    setErrorMsg("");

    navigate("/", { replace: false});
  };

  // LOGIN API
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("user", JSON.stringify(res.data));

      setMessage({
        text: "Login successful",
        type: "success",
      });

      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || "Login failed",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // SIGNUP API
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match");

      setTimeout(() => setErrorMsg(""), 2000);
      return;
    }

    try {
      const res = await registerUser(formData);

      setMessage({
        text: res.data.message,
        type: "success",
      });

      setIsLogin(true);

      setFormData({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setShowPassword(false);
      setShowConfirmPassword(false);
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || "Signup failed",
        type: "error",
      });
    }
  };

  // FORGOT PASSWORD
  const handleForgotSubmit = (e) => {
    e.preventDefault();

    if (!forgotEmail) {
      setMessage({
        text: "Enter your email",
        type: "error",
      });
      return;
    }

    setMessage({
      text:
        forgotType === "username"
          ? `Username recovery mail sent to ${forgotEmail}`
          : `Password reset link sent to ${forgotEmail}`,
      type: "success",
    });

    setForgotEmail("");
    setForgotType(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center
bg-gradient-to-br from-blue-50 via-cyan-200 to-purple-100/70
dark:bg-gradient-to-br dark:from-gray-900 dark:via-slate-900 dark:to-black
transition-all duration-700">

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">

          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white
            p-5 sm:p-6 rounded-2xl w-[90%] max-w-md relative
            shadow-2xl border border-gray-200 dark:border-gray-700"
            style={{
              boxShadow: glowShadow,
            }}
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-3 text-gray-700 dark:text-white text-xl hover:rotate-90 transition"
            >
              ✖
            </button>

            {/* FORGOT PASSWORD */}
            {forgotType ? (
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Recover Account
                </h2>

                <form onSubmit={handleForgotSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-xl bg-transparent"
                    required
                  />

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-black font-semibold p-3 w-full mt-4 rounded-xl"
                  >
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                animate={{ rotateY: isLogin ? 0 : 180 }}
                transition={{ duration: 0.8 }}
                className="relative [transform-style:preserve-3d]"
              >

                <LoginCard
                  formData={formData}
                  setFormData={setFormData}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  handleLoginSubmit={handleLoginSubmit}
                  setForgotType={setForgotType}
                  setIsLogin={setIsLogin}
                  errorMsg={errorMsg}
                  loading={loading}
                />

                <SignupCard
                  formData={formData}
                  setFormData={setFormData}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  showConfirmPassword={showConfirmPassword}
                  setShowConfirmPassword={setShowConfirmPassword}
                  handleSignupSubmit={handleSignupSubmit}
                  setIsLogin={setIsLogin}
                  errorMsg={errorMsg}
                />

              </motion.div>
            )}

          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Login;