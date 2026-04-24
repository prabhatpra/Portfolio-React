import React, { useState, useRef, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";
import { registerUser, loginUser } from "./apiService";

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);
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

  const [message, setMessage] = useState({ text: "", type: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const cardRef = useRef(null);

  // AUTO CLEAR MESSAGE (FIXED)
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message.text]);

  // mouse move 3D effect
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

  const handleMouseEnter = () => setIsHovering(true);

  const glowShadow = isHovering
    ? `${-rotateY / 3}px ${rotateX / 3}px 25px rgba(0,200,255,0.6)`
    : "none";

  // OPEN LOGIN POPUP
  const handleLoginPopup = () => {
    setShowPopup(true);
    setIsLogin(true);

    setFormData({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setMessage({ text: "", type: "" });
    setErrorMsg("");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setForgotType(null);
    setForgotEmail("");
    setMessage({ text: "", type: "" });
    setErrorMsg("");
  };

  // LOGIN API
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser({
        userName: formData.userName,
        password: formData.password,
      });

      setMessage({ text: res.data.message, type: "success" });
      setShowPopup(false);
    } catch (error) {
      setMessage({
        text: error.message || "Login failed",
        type: "error",
      });
    }
  };

  // SIGNUP API (FIXED BUG HERE)
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match");

      setTimeout(() => {
        setErrorMsg("");
      }, 2000);

      return;
    }

    try {
      const res = await registerUser(formData);

      setMessage({ text: res.data.message, type: "success" });

      setIsLogin(true);

      setFormData({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      setMessage({
        text: error.message || "Signup failed",
        type: "error",
      });
    }
  };

  // FORGOT PASSWORD (SAFE)
  const handleForgotSubmit = (e) => {
    e.preventDefault();

    if (!forgotEmail) {
      setMessage({ text: "Enter your email", type: "error" });
      return;
    }

    if (forgotType === "username") {
      setMessage({
        text: `Username for ${forgotEmail} is: demo_user123`,
        type: "success",
      });
    }

    if (forgotType === "password") {
      setMessage({
        text: `Password reset link sent to: ${forgotEmail}`,
        type: "success",
      });
    }

    setForgotEmail("");
    setForgotType(null);
  };

  return (
    <div>
      {/* LOGIN BUTTON */}
      {!showPopup && (
        <div className="text-center mt-4">
          <button
            onClick={handleLoginPopup}
            className="bg-gradient-to-br from-blue-50 via-cyan-200 to-purple-100 text-black py-1 px-5 rounded-full flex items-center gap-2 mx-auto"
          >
            <FaUser />
            Login
          </button>

          {message.text && (
            <div
              className={`p-3 mt-3 rounded ${message.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
                }`}
            >
              {message.text}
            </div>
          )}
        </div>
      )}

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="bg-transparent p-4 sm:p-6 rounded-2xl w-[90%] max-w-md"
            style={{ boxShadow: glowShadow }}
          >
            <button onClick={handleClosePopup} className="absolute top-2 right-3">
              ✖
            </button>

            {/* FORGOT UI */}
            {forgotType ? (
              <div className="bg-white p-4 rounded-xl">
                <h2>Recover</h2>

                <form onSubmit={handleForgotSubmit}>
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="border p-2 w-full"
                  />

                  <button className="bg-blue-500 text-white p-2 w-full mt-2">
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
                />
              </motion.div>
            )}

            {/* ERROR */}
            {errorMsg && (
              <div className="bg-red-100 text-red-700 p-2 mt-2 rounded">
                {errorMsg}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Login;