import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="py-12 bg-white">
      <h3 className="text-1xl font-bold text-center flex items-center justify-center relative mb-12">
        <span className="block w-14 h-1 bg-[#A80000] mr-2 rounded"></span>
        Forgot Password
        <span className="block w-14 h-1 bg-[#A80000] ml-2 rounded"></span>
      </h3>
      <div className="flex justify-center items-center bg-white px-3">
        <form className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A80000]"
            />
            <p className="text-sm text-red-500 mt-1 hidden">
              {/* Error message can be toggled dynamically */}
              Example error message
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#A80000] text-white hover:bg-[#8A0000] py-2 mt-4 rounded-lg"
          >
            Send Reset Link
          </button>

          <p className="text-center text-sm mt-4">
            Remembered your password?{" "}
            <Link
              to="/"
              className="text-blue-500 hover:underline"
            >
              Sign In?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
