import { useContext, useState } from "react";
import { FcMindMap } from "react-icons/fc";
import { HiMenu } from "react-icons/hi";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = async () => {
    try {
      const res = await logOut();
      console.log(res.user);
    } catch (err) {
      console.error(err.message);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const navLinks = (
    <>
      <li>
        <a className="nav-link font-semibold" href={"/"}>
          Home
        </a>
      </li>
      <li>
        <a className="nav-link font-semibold" href={"/menu"}>
          Menu
        </a>
      </li>
      <li>
        {
          user &&
          <a className="nav-link font-semibold" href={"/shop"}>
          Shop
        </a>
        }
      </li>
      <li>
        <a className="nav-link font-semibold" href="/signUp">
          Sign up
        </a>
      </li>
    </>
  );

  return (
    <nav className="navbar justify-between md:px-10 lg:px-20 z-10 top-0 bg-white shadow fixed w-full">
      <div className="navbar-start md:hidden">
        <div className="dropdown" onClick={toggleDropdown}>
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <HiMenu className="h-6 w-6" />
          </div>
          {dropdownOpen && (
            <ul
              className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-white dark:bg-gray-800 rounded-box w-52 absolute"
              onClick={closeDropdown}
            >
              {navLinks}
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-start max-md:navbar-center max-md:pl-20 flex items-center">
        <FcMindMap className="text-3xl mr-2" />
        <a className="text-[#02137A] text-4xl font-extrabold italic" href="/">
          TasteTrail
        </a>
      </div>
      <div className="navbar-end gap-10 flex items-center">
        <div className="navbar-center hidden md:flex">
          <ul className="flex gap-4">{navLinks}</ul>
        </div>
        <div
          className="dropdown dropdown-end relative"
          onClick={toggleDropdown}
        >
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {user ? (
              <img
                alt="Profile"
                src={
                  user.photoURL ||
                  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 flex items-center justify-center rounded-full text-gray-400 border-2 border-solid border-gray-400">
                <span className="text-sm"> </span>
              </div>
            )}
          </div>
          {dropdownOpen && (
            <ul
              className="menu menu-sm dropdown-content w-32 mt-3 z-[20] py-3 px-5 shadow bg-white dark:bg-gray-800 rounded-box absolute"
              onClick={closeDropdown}
            >
              <li className="w-full">
                <a className="hover:text-[#02137A]" href="userProfile">
                  Profile
                </a>
              </li>
              <li className="w-full">
                {
                  user && 
                  <a className="hover:text-[#02137A]" href="/dashboard/home">
                  Dashboard
                </a>
                }
              </li>
              <li className="w-full">
                <a className="hover:text-[#02137A]" href="#">
                  Settings
                </a>
              </li>
              <li className="w-full">
                {user ? (
                  <button
                    className="hover:text-[#02137A]"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLogOut();
                    }}
                  >
                    Sign Out
                  </button>
                ) : (
                  <a className="hover:text-[#02137A]" href="/signIn"> Sign in</a>
                )}
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
