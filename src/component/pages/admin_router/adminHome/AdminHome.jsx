import { MdAssignmentAdd, MdDelete, MdManageHistory } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { TbBrandBooking } from "react-icons/tb";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
  const [cart] = useCart();
  const axiosPublic = useAxiosPublic();

  const { data: reservation = [] } = useQuery({
    queryKey: ["reservation"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reservation");
      return res.data;
    },
  });

  const Card = ({ icon, title }) => {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg shadow-md p-6 bg-white transition duration-300 hover:shadow-lg hover:bg-gray-200">
        <span className="text-3xl text-blue-500 mb-4">{icon}</span>
        <h1 className="text-xl font-semibold mt-2 mb-4 text-gray-800">
          {title}
        </h1>
      </div>
    );
  };

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

  
  const handleDeleteReservation = (item) => {
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
          .delete(`/reservation/${item._id}`)
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
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl text-center mb-8 font-semibold text-gray-800">
        Welcome, Admin!
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link to="/dashboard/addFood">
          <Card icon={<MdAssignmentAdd />} title="Add Food" />
        </Link>
        <Link to="/dashboard/manageFood">
          <Card icon={<MdManageHistory />} title="Manage Food" />
        </Link>
        <Link to="/dashboard/allUsers">
          <Card icon={<GrUserManager />} title="All Users" />
        </Link>
        <Link to="/dashboard/manageBookings">
          <Card icon={<TbBrandBooking />} title="Manage Bookings" />
        </Link>
        <Link to="/dashboard/reservations">
          <Card icon={<BsFillCalendarCheckFill />} title="Reservations" />
        </Link>
      </div>
      <div className="mt-12">
        <h1 className="text-3xl font-semibold text-center">Bookings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cart.map((item) => (
            <div
              key={item._id}
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
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-3xl font-semibold text-center">Reservations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {reservation.map((item) => (
            <div
              key={item._id}
              className="border rounded-md px-6 py-4 bg-white shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">
                <p className="text-gray-800 text-lg font-semibold">
                  Name: {item.userName}
                </p>
                <p className="text-gray-800 text-lg font-semibold">
                  Email: {item.userEmail}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-800 text-lg font-semibold">
                  Table: {item.reservationTable}
                </p>
                <p className="text-gray-800 text-lg font-semibold">
                  Date: {item.reservationDate}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-800 text-lg font-semibold">
                  Time: {item.reservationTime}
                </p>
                <button
                  onClick={() => handleDeleteReservation(item)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full hover:shadow-md"
                >
                  <MdDelete className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
