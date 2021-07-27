// @ts-check
import NavigationBar from "../components/NavigationBar";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

const BirthdayTwin = () => {
  return (
    <>
      <NavigationBar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-600">
              Meet your Birthday Twins here!
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* start */}
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
                  <img
                    className="rounded-full border-2 border-red-600"
                    src="https://images.generated.photos/V32hKLpbtVpiGSHPAlNZJUq_0hKfeNy172PXx8e5vSI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMDc3NDUuanBn.jpg"
                    alt="user.img"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    John Doe
                  </h2>
                  <p className="text-gray-400 text-sm mb-2">Age: 25</p>
                  <p className="leading-relaxed text-base">
                    Love painting landscapes. Find the water very calming and
                    pleasing. Aspire to be a Games Developer.
                  </p>
                  <a
                    href="/"
                    className="mt-3 text-red-500 inline-flex items-center"
                  >
                    <AiFillTwitterCircle size={30} />
                  </a>
                  <a
                    href="/"
                    className="mt-3 text-red-500 inline-flex items-center md:ml-2 md:py-1 md:pl-2 md:border-l md:border-gray-400"
                  >
                    <FaEnvelope className="mr-5" size={30} />
                  </a>
                </div>
              </div>
            </div>
            {/* end */}
            {/* start */}
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
                  <img
                    className="rounded-full border-2 border-red-600"
                    src="https://images.generated.photos/aUZ9ZZPRx6iFrK7SCcf3pjNZvKl8a9u7v16N5QkErDQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMDYwODQuanBn.jpg"
                    alt="user.img"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    James Snow
                  </h2>
                  <p className="text-gray-400 text-sm mb-2">Age: 40</p>
                  <p className="leading-relaxed text-base">
                    Architect by day. Poet by night. Love playing golf and
                    spending a good sunny day outdoors.
                  </p>
                  <a
                    href="/"
                    className="mt-3 text-red-500 inline-flex items-center"
                  >
                    <AiFillTwitterCircle size={30} />
                  </a>
                  <a
                    href="/"
                    className="mt-3 text-red-500 inline-flex items-center md:ml-2 md:py-1 md:pl-2 md:border-l md:border-gray-400"
                  >
                    <FaEnvelope className="mr-5" size={30} />
                  </a>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BirthdayTwin;
