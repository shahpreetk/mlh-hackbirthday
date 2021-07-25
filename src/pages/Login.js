import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section class="text-gray-600">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              officia!
            </h1>
            <p class="leading-relaxed mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
              quos non! Doloremque corrupti impedit nulla delectus. Debitis quos
              porro voluptatum cupiditate vel harum accusamus. Quas, asperiores!
              Quisquam molestiae dolorum animi?
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-red-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-rose-900 text-lg font-bold title-font mb-5">
              Login 🎉
            </h2>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
              Login
            </button>
            <p class="text-sm text-gray-600 mt-3">
              Don't have an account?{" "}
              <span className="underline text-red-600 hover:text-red-800">
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
