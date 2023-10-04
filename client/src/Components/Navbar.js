import React from "react";
import { Link } from "react-router-dom";

function Navbar({ loggedInUser, handleLogout }) {
  return (
    <nav className="p-3 border-gray-200 rounded bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <button className="flex items-center">
          <Link to="/">
            <img
              src="https://www.seekpng.com/png/full/807-8071516_transparent-youtube-play-logo-youtube-icon-blue-png.png"
              className="h-6 mr-3 sm:h-10"
              alt="Flowbite Logo"
            />
          </Link>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <Link to="/">IronTube</Link>
          </span>
        </button>

        {loggedInUser ? (
          <>
            <h1>Welcome {loggedInUser.username}!</h1>
            <div className="flex">
              {/* <div className="form-control">
                <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
                />
              </div> */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={loggedInUser.pfp} alt="" />
                  </div>
                </label>
                <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52">
                  <li>
                    <Link to="/profile">
                      <button>Profile</button>
                    </Link>
                  </li>
                  {/* <li>
                    <button>Settings</button>
                  </li> */}
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 ">
            <button className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent bg-white">
              <Link to="/login">Login</Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
