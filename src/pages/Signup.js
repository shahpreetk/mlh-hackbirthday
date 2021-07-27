// @ts-check
import SignUpForm from "../components/SignUpForm";

const Signup = () => {
  return (
    <>
      <section className="text-gray-600">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Birthday Twin! 👯
            </h1>
            <p className="leading-relaxed mt-4">
              Know who you share your birthday with and celebrate with them! 🥳
            </p>
            <p className="leading-relaxed mt-4">Get started quickly!!</p>
          </div>
          <SignUpForm />
        </div>
      </section>
    </>
  );
};

export default Signup;
