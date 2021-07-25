import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section className="text-gray-600">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              officia!
            </h1>
            <p className="leading-relaxed mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
              quos non! Doloremque corrupti impedit nulla delectus. Debitis quos
              porro voluptatum cupiditate vel harum accusamus. Quas, asperiores!
              Quisquam molestiae dolorum animi?
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-red-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-rose-900 text-lg font-bold title-font mb-5">
              Sign Up 🎊
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-800"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
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
            <button className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
              Sign Up
            </button>
            <p className="text-sm text-gray-600 mt-3">
              Already have an account?{" "}
              <span className="underline text-red-600 hover:text-red-800">
                <Link to="/">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
