import { Link } from "react-scroll";
import React from "react";
import Drawer from "./Drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="bg-[#F5F5F5]  pt-2 font-baloo sticky top-0 z-50  ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header className=" flex items-center justify-between py-2 ">
            {/* <!-- logo - start --> */}
            <a
              href="/"
              className="inline-flex items-center gap-2.5 text-lg font-semibold text-black md:text-3xl font-pacifico"
              aria-label="logo"
            >
              Atharva
            </a>
            {/* <!-- logo - end --> */}

            {/* <!-- nav - start --> */}
            <nav className="hidden gap-12 lg:flex ">
              <Link
                to="home"
                className="text-lg font-semibold text-[#006699] cursor-pointer"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-lg font-semibold text-[#006699] cursor-pointer"
              >
                About
              </Link>
              <Link
                to="skill"
                duration={500}
                smooth={true}
                className="text-lg font-semibold text-[#006699] cursor-pointer  "
              >
                Skills
              </Link>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="text-lg font-semibold text-[#006699] cursor-pointer "
              >
                Portfolio
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-lg font-semibold text-[#006699] cursor-pointer  "
              >
                Contact
              </Link>
            </nav>
            {/* <!-- nav - end --> */}

            {/* <!-- buttons - start --> */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <line
                    x1="1"
                    y1="19"
                    x2="19"
                    y2="1"
                    stroke="black"
                    stroke-width="2"
                  />
                  <line
                    x1="1"
                    y1="1"
                    x2="19"
                    y2="19"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Menu
                </>
              )}
            </button>
            {/* <!-- buttons - end --> */}
          </header>
        </div>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
