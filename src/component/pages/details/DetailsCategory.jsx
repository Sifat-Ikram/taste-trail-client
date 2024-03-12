import { useParams } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import useMenu from "../../hooks/useMenu";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import SpecialMenu from "../home/special/SpecialMenu.jsx";

const DetailsCategory = () => {
  const { id } = useParams();
  const [category] = useCategory();
  const [menu] = useMenu();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const selectedCategory = category.find((cat) => cat._id === id);
  const selectedMenu = menu.filter(
    (cat) => cat.category === selectedCategory.category
  );

  if (!category || !selectedCategory || !selectedMenu.length) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  return (
    <div className="w-full mx-auto bg-gray-100">
      <div>
        <div
          className="hero relative"
          style={{
            backgroundImage: `url(${selectedCategory.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "400px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-bold uppercase text-white">
              {selectedCategory.category}
            </h1>
          </div>
        </div>
        <div className="my-20 shadow">
          <h1
            data-aos="fade-up"
            className="text-center text-5xl font-bold text-black"
          >
            {selectedCategory.category} Items
          </h1>
          <div className="my-10">
            <ul className="divide-y divide-gray-200 w-3/4 mx-auto">
              {selectedMenu.map((item) => (
                <li
                  key={item._id}
                  data-aos="fade-up"
                  className="py-4 shadow rounded-md my-3 border-2 border-solid "
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        className="h-20 w-20 rounded-full mr-4"
                        alt=""
                      />
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                          {item.name}
                        </h2>
                        <p className="text-gray-700">{item.recipe}</p>
                      </div>
                    </div>
                    <p className="text-gray-800 font-bold">
                      <span className="mr-2">${item.price}</span>
                      <span className="border-dotted border-t border-gray-400">
                        {item.currency}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
           <SpecialMenu />
        </div>
      </div>
    </div>
  );
};

export default DetailsCategory;
