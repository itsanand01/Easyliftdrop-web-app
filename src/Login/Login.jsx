import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React from "react";

function Login() {
  const responseMessage = (response) => {
    // console.log(response);
    const token = response.credential;
    const decoded = jwtDecode(token);
    console.log(decoded);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <>
      <div className="py-8 bg-white">
        <h3 className="text-1xl font-bold text-center flex items-center justify-center relative mb-8">
          <span className="block w-14 h-1 bg-[#A80000] mr-2 rounded"></span>
          Login
          <span className="block w-14 h-1 bg-[#A80000] ml-2 rounded"></span>
        </h3>
        <div className="flex justify-center items-center bg-white px-3">
          <form className="w-full max-w-md p-6 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <div>
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
              />
              <p className="text-sm text-red-500 mt-1 hidden">
                {/* <!-- Placeholder for error message --> */}
              </p>
            </div>
            <div>
              <label
                for="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-3"
              />
              <p className="text-sm text-red-500 mt-1 hidden">
                {/* <!-- Placeholder for error message --> */}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm">
                <input type="checkbox" className="rounded border-gray-300" />
                <span>Remember me</span>
              </label>
              <a
                href="/auth/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#A80000] text-white hover:bg-[#8A0000] py-2 rounded-md"
            >
              Sign In
            </button>
            <p className="text-center text-sm">
              Don’t have an account?
              <a href="/" className="text-blue-500 hover:underline">
                {" "}
                Sign Up
              </a>
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex-grow h-[1px] bg-gray-300"></div>
              <p className="text-sm text-gray-500">Or With</p>
              <div className="flex-grow h-[1px] bg-gray-300"></div>
            </div>
            {/* <button
              type="button"
              className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-100"
            >
              <img
                src="path-to-google-image.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button> */}
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
