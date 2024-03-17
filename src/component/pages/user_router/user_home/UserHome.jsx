import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import UserProfile from "../../user_profile/UserProfile";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const [cart] = useCart();
  const axiosPublic = useAxiosPublic();

  if(!user){
    return <h1>Loading...</h1> ;
  }

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure you want to delete this item?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/cart/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Item Deleted!",
                text: "This item has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire({
              title: "Error",
              text: "An error occurred while deleting the item.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-semibold">Welcome, {user.displayName}</h1>
      <UserProfile />
      <div className="mt-12">
        <h1 className="text-3xl font-semibold text-center">Bookings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cart.length ? (
            cart.map((item) => (
              <div
                key={item._id} // Ensure each item has a unique key
                className="border rounded-md px-6 py-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                    <p className="text-gray-800">${item.price}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(item)}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full hover:shadow-md"
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h1 className="text-center text-3xl font-semibold">There are no orders yet.</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
