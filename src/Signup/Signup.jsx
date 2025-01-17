import React from 'react'
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from 'react-router-dom'

const Signup = () => {
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
    <div className="py-8 bg-white">
    <h3 className="text-1xl font-bold text-center flex items-center justify-center relative mb-8">
      <span className="block w-14 h-1 bg-[#A80000] mr-2 rounded"></span>
      SignUp
      <span className="block w-14 h-1 bg-[#A80000] ml-2 rounded"></span>
    </h3>
    <div className="flex justify-center items-center bg-white px-3">
      <form className="w-full max-w-md p-6 space-y-4 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="flex justify-center w-full">
                  <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
                </div>
            <div className="flex items-center space-x-2">
              <div className="flex-grow h-[1px] bg-gray-300"></div>
              <p className="text-sm text-gray-500">Or With</p>
              <div className="flex-grow h-[1px] bg-gray-300"></div>
            </div>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#A80000] focus:border-[#A80000] sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#A80000] focus:border-[#A80000] sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#A80000] focus:border-[#A80000] sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#A80000] focus:border-[#A80000] sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#A80000] text-white hover:bg-[#8A0000] py-2 rounded-md text-sm font-medium"
        >
          Sign Up
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline" >Sign In
          </Link>
        </p>

        {/* <div className="flex items-center space-x-2">
          <div className="flex-grow h-[1px] bg-gray-300" />
          <p className="text-sm text-gray-500">Or With</p>
          <div className="flex-grow h-[1px] bg-gray-300" />
        </div>

        <button
          type="button"
          className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-100"
        >
          <Image
            width={100}
            height={100}
            src={googlePlay}
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button> */}
      </form>
    </div>
  </div>
  )
}

export default Signup
