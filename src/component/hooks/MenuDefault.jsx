import { useNavigate } from "react-router-dom";
import useMenu from "./useMenu";
import { useContext, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import Swal from "sweetalert2";
import useCart from "./useCart";

const MenuDefault = ({ title }) => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const menu = useMenu();
  const [, refetch] = useCart();
  const navigate = useNavigate();

  const name = menu[0].filter((item) => item.category === `${title}`);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const handleOrder = (item) => {
    
    if (user) {
      const cartItem = {
        menuId: item._id,
        email: user.email,
        name: item.name,
        category: item.category,
        image: item.image,
        price: parseFloat(item.price)
      };

      axiosPublic.post("/cart", cartItem).then((res) => {
        
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "This item is added to the cart",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Oops!!! You aren't signed in. ",
        text: "To add this item to cart you have to sign in first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signIn", { state: location.pathname });
        }
      });
    }
  };

  return (
    <div className="space-y-8 my-20" data-aos="fade-up">
      <div className="border-b-2 border-gray-300 py-3 w-60 mx-auto text-center">
        <h1 className="uppercase text-2xl">{title} Items</h1>
      </div>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 gap-3 w-4/5 mx-auto"
      >
        {name.map((item) => (
          <div key={item._id} to={`/${item.id}`} className="text-base w-4/5 mx-auto">
            <div className="flex items-center border-b-2 border-solid shadow rounded-lg transition duration-300 transform hover:scale-105">
              <div>
                <img
                  src={item.image}
                  className="w-52 h-36 rounded-l-lg"
                  alt=""
                />
              </div>
              <div className="py-2 px-4">
                <div className="flex justify-between text-xl mb-2">
                  <h1 className="font-semibold">{item.name}</h1>
                  <hr />
                  <p className="">${item.price}</p>
                </div>
                <p className="text-gray-600 w-3/4">{item.recipe}</p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleOrder(item)}
                    className="btn btn-outline border-0 hover:bg-white text-[#02137A] border-b-2 border-y-[#02137A] hover:text-[#02137A]"
                  >
                    Order Online
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDefault;
