// @ts-check
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className="lg:w-2/6 md:w-1/2 bg-red-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-rose-900 text-lg font-bold title-font mb-5">
          Login 🎉
        </h2>
        <div className="relative mb-4">
          <label
            htmlFor="email"
            className="leading-7 text-sm text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="password"
            className="leading-7 text-sm text-gray-800"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <Link to="/profile">
          <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            Login
          </button>
        </Link>
        <p className="text-sm text-gray-600 mt-3">
          Don't have an account?{" "}
          <span className="underline text-red-600 hover:text-red-800">
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
