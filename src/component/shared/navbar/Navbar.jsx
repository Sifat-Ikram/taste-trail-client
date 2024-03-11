const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a className="hover:text-[#02137A] text-lg font-medium" href={"/"}>
          HOME
        </a>
      </li>
      <li>
        <a
          className="hover:text-[#02137A] text-lg font-medium"
          href={"/menu"}
        >
          MENU
        </a>
      </li>
      <li>
        <a
          className="hover:text-[#02137A] text-lg font-medium"
          href={"/shop"}
        >
          SHOP
        </a>
      </li>
      <li>
        <a
          className="hover:text-[#02137A] text-lg font-medium"
          href={"/contact"}
        >
          CONTACT US
        </a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar justify-between md:px-10 lg:px-20 ">
        <div className="navbar-start md:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-start max-md:navbar-center max-md:pl-20">
          <a className="text-[#02137A] text-4xl font-extrabold italic" href="/">
            TasteTrail
          </a>
        </div>
        <div className="navbar-end gap-10">
          <div className="navbar-center hidden md:flex">
            <ul className="flex gap-4">{navLinks}</ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
