import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const menuItems = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Colleges",
      to: "/colleges",
    },
    {
      name: "Admission",
      to: "/admission",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };
  if (user) {
    menuItems.push({
      name: "My College",
      to: "/myCollege",
    });
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" w-full bg-white top-0 sticky z-50 shadow-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link to="/">
            <span className="font-bold text-2xl italic">
              <span className="text-violet-700 text-3xl">College</span> Hunter
            </span>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="text-md font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 invisible sm:visible">
          {user ? (
            <div className="flex items-center gap-2">
              {user.photoURL && (
                <img
                  className="h-12 rounded-full mt-3 border-2 mt border-primary cursor-pointer"
                  src={user?.photoURL}
                  alt=""
                  title={user?.displayName}
                />
              )}

              <button
                onClick={handleLogout}
                type="button"
                className="mt-4 w-full rounded-md bg-[#6674cc] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6674cc]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              type="button"
              className="mt-4 w-full flex items-center rounded-md bg-[#6674cc] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6674cc]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Login
            </Link>
          )}
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">College Hunter</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                {user ? (
                  <>
                    {user.photoURL && (
                      <img
                        className="h-12 rounded-full border-2  border-white cursor-pointer"
                        src={user?.photoURL}
                        alt=""
                        title={user?.displayName}
                      />
                    )}

                    <button
                      onClick={handleLogout}
                      type="button"
                      className="mt-4 w-full rounded-md bg-[#6674cc] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6674cc]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    type="button"
                    className="mt-4 w-full flex items-center rounded-md bg-[#6674cc] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6674cc]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
