import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";
import "daisyui/dist/full.css"; // Import Daisy UI styles

const PopularItem = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((cat) => cat.category === "offered");

  return (
    <div className="popular-container bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between items-center w-3/4 mx-auto text-center mb-10">
        <h1 className="text-4xl font-semibold mb-8 text-center text-gray-800">
          Discover Our Most-Loved Dishes!
        </h1>
        <p>
          Embark on a culinary adventure with our handpicked array of
          crowd-pleasers, where each dish tells a story of culinary brilliance
          and irresistible flavors that have captured the hearts of our patrons
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {popularMenu.map((item) => (
          <SwiperSlide key={item._id}>
            <div
              className="swiper-slide-content group relative rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "250px",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.name && (
                  <h1 className="text-2xl font-bold uppercase mb-4">
                    {item.name}
                  </h1>
                )}
                {item.recipe && (
                  <p className="text-sm text-gray-200">{item.recipe}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-8">
        <Link to="/menu">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            View Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularItem;
