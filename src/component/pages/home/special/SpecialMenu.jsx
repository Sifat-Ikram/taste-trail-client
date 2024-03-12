import Aos from "aos";
import "aos/dist/aos.css";
import special from "../../../../assets/menu/specials.webp";
import useMenu from "../../../hooks/useMenu";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SpecialMenu = () => {
  const [menu] = useMenu();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const specialMenu = menu.filter((cat) => cat.category === "Specials");
  return (
    <div data-aos="fade-up">
      <div
        className="hero relative"
        style={{
          backgroundImage: `url(${special})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 flex items-center justify-center"
          data-aos="fade-up"
        >
          <h1 className="text-6xl font-bold uppercase text-white">
            Our Specials
          </h1>
        </div>
      </div>
      <div data-aos="fade-up" className="my-20 w-4/5 mx-auto">
        <h1
          data-aos="fade-up"
          className="text-center text-5xl font-bold text-black"
        >
          Special Items
        </h1>
        <div className="my-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            {specialMenu.map((item) => (
              <Link key={item._id} data-aos="fade-up">
                <div className="flex space-x-5 items-center rounded-md bg-base-200">
                  <div>
                    <img
                      src={item.image}
                      className="w-60 h-36 rounded-md"
                      alt=""
                    />
                  </div>
                  <div className="p-2 space-y-5 shadow">
                    <div className="flex justify-between text-xl">
                      <h1>{item.name}</h1>
                      <p className="mr-1 text-[#02137A]">${item.price}</p>
                    </div>
                    <p>{item.recipe}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
