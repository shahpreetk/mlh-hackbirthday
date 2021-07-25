import { NavLink } from "react-router-dom";
const navigation = [
  { name: "Profile", href: "/profile" },
  { name: "Birthday Twin", href: "/my-birthday-twin" },
  { name: "Logout", href: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavigationBar = () => {
  return (
    <>
      <header className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center bg-rose-500">
        <div className="container">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <NavLink
                  exact
                  key={item.name}
                  to={item.href}
                  activeClassName="selectedNavbarOption"
                  className={classNames(
                    item.current
                      ? "bg-rose-800 text-white"
                      : "text-white hover:bg-rose-200 hover:text-rose-800",
                    "px-3 py-2 rounded-md text-md font-medium mr-5"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            {/* <div className="flex space-x-4"> */}
            {/* <NavLink
              key="logout"
              to="/"
              className="text-white hover:bg-rose-200 hover:text-rose-800
                  px-3 py-2 rounded-md text-md font-medium mr-5"
              aria-current="page"
            >
              Logout
            </NavLink> */}
            {/* </div> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
