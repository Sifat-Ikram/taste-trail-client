import MenuDefault from "../../hooks/MenuDefault";
import image from "../../../assets/menu/menu-banner.jpg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import salad from "../../../assets/menu/salad-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";
import dessert from "../../../assets/menu/dessert-bg.jpeg";
import drinks from "../../../assets/menu/banner3.jpg";
import Cover from "../../hooks/Cover";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Element, Link } from "react-scroll";

const MenuPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-white">
      <img
        src={image}
        alt="Menu Banner"
        className="w-full h-[500px] object-cover"
      />
      <div className="py-8 px-4 lg:px-0">
        <div className="w-3/4 mx-auto text-center">
          <p className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-800 font-semibold my-8">
            Discover Our Mouth-Watering Menu
          </p>
          <p className="text-center text-lg text-gray-600 mb-8">
            Welcome to our delicious menu! Explore a variety of mouth-watering
            dishes crafted with love and passion. From savory pizzas to
            refreshing salads, we have something to tantalize every taste bud.
            Indulge in our flavorful soups, savor our aromatic curries, and
            don't forget to leave room for our tempting desserts. Bon appétit!
          </p>
        </div>
        <div className="flex justify-center items-center gap-32 my-8">
          <div>
          <button
            onClick={toggleDrawer}
            className="text-[#02137A] btn btn-outline hover:bg-[#02137A] hover:text-white font-bold py-2 px-4 rounded-md"
          >
            See Categories
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            style={{
              width: "300px",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex justify-between items-center mt-10 mb-5">
              <h2 className="text-2xl font-semibold text-gray-800">
                Explore Our Categories
              </h2>
              <button
                className="focus:outline-none text-gray-600 hover:text-gray-800"
                onClick={toggleDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="space-y-4">
              <Link
                to="Biryani"
                className="text-lg cursor-pointer font-semibold text-blue-600 hover:text-blue-800 transition duration-300 rounded-lg py-3 px-6 flex items-center bg-gradient-to-r from-blue-200 to-blue-300"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.707 7.707a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 10.586l-3.293-3.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Biryani
              </Link>
              <Link
                to="Curry"
                className="text-lg cursor-pointer font-semibold text-blue-600 hover:text-blue-800 transition duration-300 rounded-lg py-3 px-6 flex items-center bg-gradient-to-r from-blue-200 to-blue-300"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.707 7.707a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 10.586l-3.293-3.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Curry
              </Link>
              <Link
                to="Pizza"
                className="text-lg cursor-pointer font-semibold text-blue-600 hover:text-blue-800 transition duration-300 rounded-lg py-3 px-6 flex items-center bg-gradient-to-r from-blue-200 to-blue-300"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.707 7.707a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 10.586l-3.293-3.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Pizza
              </Link>
              <Link
                to="Salad"
                className="text-lg cursor-pointer font-semibold text-blue-600 hover:text-blue-800 transition duration-300 rounded-lg py-3 px-6 flex items-center bg-gradient-to-r from-blue-200 to-blue-300"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.707 7.707a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 10.586l-3.293-3.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Salad
              </Link>
              <Link
                to="Soup"
                className="text-lg cursor-pointer font-semibold text-blue-600 hover:text-blue-800 transition duration-300 rounded-lg py-3 px-6 flex items-center bg-gradient-to-r from-blue-200 to-blue-300"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.707 7.707a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 10.586l-3.293-3.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Soup
              </Link>
              <Link
                to="Dessert"
                className="text-lg cursor-pointer font-semibold text-blue-600 hover:text-blue-800 transition duration-300 rounded-lg py-3 px-6 flex items-center bg-gradient-to-r from-blue-200 to-blue-300"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.707 7.707a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 10.586l-3.293-3.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Dessert
              </Link>
              <Link
                to="Drinks"
                className="text-lg cursor-pointer font-semibold text-blue-600 hover:text-blue-800 transition duration-300 rounded-lg py-3 px-6 flex items-center bg-gradient-to-r from-blue-200 to-blue-300"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.707 7.707a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 10.586l-3.293-3.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Drinks
              </Link>
            </ul>
          </Drawer>
          </div>
          <button className="text-[#02137A] btn btn-outline hover:bg-[#02137A] hover:text-white font-bold py-2 px-4 rounded-md">Make A Reservation</button>
          <button className="text-[#02137A] btn btn-outline hover:bg-[#02137A] hover:text-white font-bold py-2 px-4 rounded-md">Add A Review</button>
        </div>
        <div>
          <Element name="Biryani">
            <Cover title={"Biryani"} img={"https://i.ibb.co/N7mnnmY/1-7.jpg"} />
            <MenuDefault title={"Biryani"}></MenuDefault>
          </Element>
          <Element name="Curry">
            <Cover
              title={"Curry"}
              img={
                "https://i.ibb.co/ZHh9LBt/Air-Fryer-Chicken-Curry-square-FS-36.jpg"
              }
            />
            <MenuDefault title={"Curry"}></MenuDefault>
          </Element>
          <Element name="Pizza">
            <Cover title={"Pizza"} img={pizza} />
            <MenuDefault title={"Pizza"}></MenuDefault>
          </Element>
          <Element name="Salad">
            <Cover title={"Salad"} img={salad} />
            <MenuDefault title={"Salad"}></MenuDefault>
          </Element>
          <Element name="Soup">
            <Cover title={"Soup"} img={soup} />
            <MenuDefault title={"Soup"}></MenuDefault>
          </Element>
          <Element name="Dessert">
            <Cover title={"Dessert"} img={dessert} />
            <MenuDefault title={"Dessert"}></MenuDefault>
          </Element>
          <Element name="Drinks">
            <Cover title={"drinks"} img={drinks} />
            <MenuDefault title={"drinks"}></MenuDefault>
          </Element>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
