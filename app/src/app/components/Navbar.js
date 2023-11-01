import { useContext } from "react";

import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-600 mb-8">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex md:order-2">
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <Link
                  href="/api/metrics"
                  className="block py-2 pl-3 pr-4  rounded   md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Metrics
                </Link>
              </li>
              <li>
                <Link
                  href="/api/testing"
                  className="block py-2 pl-3 pr-4  rounded   md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                >
                  Testing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.displayName = "Navbar";
export default Navbar;
