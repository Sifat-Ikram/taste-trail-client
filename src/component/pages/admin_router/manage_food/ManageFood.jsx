import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { MdDelete, MdEditNote } from "react-icons/md";
import Swal from "sweetalert2";

const ManageFood = () => {
  const axiosPublic = useAxiosPublic();

  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

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
          .delete(`/menu/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Item Deleted!",
                text: "This item has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => {
            console.log(error.message);
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
    <div className="space-y-8 my-20">
      <div className="border-b-2 border-gray-300 py-3 w-60 mx-auto text-center">
        <h1 className="uppercase text-2xl">All Items</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full mx-auto">
        {menu.map((item) => (
          <div key={item._id} className="text-base w-4/5 mx-auto">
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
                <div className="flex justify-between px-5 mt-3">
                  <a href={`/dashboard/updateFood/${item._id}`}>
                    <button className="bg-yellow-500 hover:bg-yellow-700 rounded-md flex items-center gap-2 px-2 py-1 text-lg font-semibold text-white hover:text-white">
                      <MdEditNote className="text-2xl"></MdEditNote>Update
                    </button>
                  </a>
                  <a>
                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-red-700 hover:bg-red-900 rounded-md flex items-center gap-2 px-2 py-1 text-lg font-semibold text-white hover:text-white"
                    >
                      <MdDelete className="text-2xl"></MdDelete>Delete
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageFood;
