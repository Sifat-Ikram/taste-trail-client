import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCart from "../../../hooks/useCart";
import Cover from "../../../hooks/Cover";
import img from "../../../../assets/dashboard/image-5.jpg";

const ManageCart = () => {
    const axiosPublic = useAxiosPublic();
   const [ cart, refetch ] = useCart();

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
    <div className='w-11/12 mx-auto pb-10'>
            <Cover img={img} title={"Cart Item"} />
            <div className='text-center mt-20'>
                <h1 className='uppercase text-3xl font-bold mt-10'>Your ordered Food Item</h1>
            </div>
            <div className='p-2 mt-10'>
                <div className="overflow-x-auto mt-3">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-blue-900 rounded-sm'>
                            <tr>
                                <th className='text-base font-semibold text-white'></th>
                                <th className='text-base font-semibold text-white'>Name</th>
                                <th className='text-base font-semibold text-white'>Email</th>
                                <th className='text-base font-semibold text-white'>Price</th>
                                <th className='text-base font-semibold text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <label>{index + 1}</label>
                                    </th>
                                    <td>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div>{item.category}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div>{item.price}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <MdDelete onClick={() => handleDelete(item)} className='text-4xl cursor-pointer bg-red-700 text-white p-2 rounded-md'></MdDelete>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  );
};

export default ManageCart;
