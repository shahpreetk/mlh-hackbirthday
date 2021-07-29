// @ts-check
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className="min-h-screen bg-white flex">
        <div className="flex-1 flex flex-col justify-center py-5 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-auto w-auto"
                src="/assets/cake_Flags_noBg.png"
                alt="Birthday Twin Logo"
              />
              <h2 className="mt-6 text-3xl font-semibold text-gray-900">
                Login to meet your{' '}
                <span className="font-extrabold text-rose-600">
                  Birthday Twin!
                </span>
              </h2>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <div className="mt-1">
                    <div>
                      <a
                        href="/"
                        className="w-full inline-flex justify-center py-2 px-4 border border-none rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-rose-50"
                      >
                        <span className="sr-only">Sign in with Google</span>
                        <img src="/assets/sign_in_with_google.png" alt="Sign In with Google" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-600 focus:border-gray-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-600 focus:border-gray-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a href="/" className="font-medium text-rose-600 hover:text-rose-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                    >
                      Sign in
                    </button>
                    <div className="text-md mt-4">
                      Don't have an account?{" "}
                      <Link to="/signup" className="underline font-medium text-sky-700 hover:text-sky-900">
                        Sign Up instead!
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1617393992486-fa01f9ae0524"
            alt="birthday twin cake"
          />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
