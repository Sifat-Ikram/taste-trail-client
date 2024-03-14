import { useState } from "react";
import { FcMindMap } from "react-icons/fc";
import { HiMenu } from "react-icons/hi";
import useAdmin from "../../hooks/useAdmin";

const NavbarSecond = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAdmin] = useAdmin();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const adminNavLinks = (
    <>
      <li>
        <a className="nav-link font-semibold" href={"/"}>
          Admin Home
        </a>
      </li>
      <li>
        <a className="nav-link font-semibold" href={"/dashboard/addFood"}>
          Add Food
        </a>
      </li>
      <li>
        <a className="nav-link font-semibold" href={"/dashboard/manageFood"}>
          Manage Food
        </a>
      </li>
      <li>
        <a className="nav-link font-semibold" href="/dashboard/manageBookings">
          Manage Bookings
        </a>
      </li>
      <li>
        <a className="nav-link font-semibold" href="/dashboard/allUser">
          All Users
        </a>
      </li>
      <li>
        <a className="nav-link font-semibold" href="/dashboard/reservations">
          Reservations
        </a>
      </li>
    </>
  );
  const userNavLinks = (
    <>
      <li>
        <a className="nav-link font-semibold" href={"/dashboard/home"}>
          User Home
        </a>
      </li>
      <li>
        <a className="nav-link font-semibold" href={"/dashboard/manageCart"}>
          Manage Cart
        </a>
      </li>
      <li>
        <a className="nav-link font-semibold" href="/dashboard/reservations">
          Reservations
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
              {isAdmin ? adminNavLinks : userNavLinks}
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
          <ul className="flex gap-4">{isAdmin ? adminNavLinks : userNavLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSecond;
