import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core"; // Updated import statement
import "swiper/swiper-bundle.css";
import Aos from "aos";
import "aos/dist/aos.css";
import special from "../../../../assets/menu/specials.webp";
import useMenu from "../../../hooks/useMenu";

// Initialize Swiper
SwiperCore.use([Autoplay]);

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
          <h1 className="text-6xl font-bold uppercase text-white">Our Specials</h1>
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
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="swiper-container"
          >
            {specialMenu.map((item) => (
              <SwiperSlide key={item._id}>
                <Link>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
