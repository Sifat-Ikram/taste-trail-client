import { FiTruck } from "react-icons/fi";
import { MdRestaurant } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";

const Supports = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
      <div className="flex flex-col items-center justify-center rounded-lg shadow-lg p-6 bg-gradient-to-r from-yellow-500 to-yellow-700">
        <MdRestaurant className="text-5xl mb-4 text-white"></MdRestaurant>
        <h1 className="text-xl font-bold text-white">Dine-In Experience</h1>
        <p className="text-center text-sm text-white">
          Indulge in our cozy ambiance and savor our delectable dishes prepared
          fresh for you.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg shadow-lg p-6 bg-gradient-to-r from-green-500 to-green-700">
        <FiTruck className="text-5xl mb-4 text-white"></FiTruck>
        <h1 className="text-xl font-bold text-white">Home Delivery</h1>
        <p className="text-center text-sm text-white">
          Relax at home while we bring the flavors of our kitchen straight to
          your doorstep.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg shadow-lg p-6 bg-gradient-to-r from-blue-500 to-blue-700">
        <FaUtensils className="text-5xl mb-4 text-white"></FaUtensils>
        <h1 className="text-xl font-bold text-white">Catering Services</h1>
        <p className="text-center text-sm text-white">
          Make your events memorable with our exquisite catering services
          tailored to your needs.
        </p>
      </div>
    </div>
  );
};

export default Supports;
