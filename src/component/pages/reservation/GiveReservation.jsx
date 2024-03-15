import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Cover from "../../hooks/Cover";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import img from "../../../assets/reservation/wood-grain-pattern-gray1x.png";

const GiveReservation = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  if (!user) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  const onSubmit = async (data) => {
    console.log(data);
    const reservationInfo = {
      userName: user.displayName,
      userEmail: user.email,
      reservationTable: data.reservationTable,
      reservationAbout: data.reservationAbout,
      reservationDate: data.reservationDate,
      reservationTime: data.reservationTime,
    };

    const reservationRes = await axiosPublic.post(
      `/reservation`,
      reservationInfo
    );

    if (reservationRes.data.insertedId) {
        console.log();
      Swal.fire("Reserved successfully");
      reset();
    }
  };

  return (
    <div className="mb-10">
      <div className="w-full mx-auto">
        <Cover img={img} title={"Reservation"} />
        <div className="text-center mt-20">
          <h1 className="uppercase text-3xl font-bold mt-10">Reserve here</h1>
        </div>
        <div className="w-4/5 mx-auto mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="my-8 space-y-7">
            <div className="flex justify-center gap-5">
              <div className="flex-1 w-2/5">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Your Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  defaultValue={user.displayName}
                  placeholder="Type your name here"
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex-1 w-2/5">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Reservation Table No
                </label>
                <select
                  {...register("reservationTable")}
                  className="select select-bordered w-full"
                >
                  <option value="Table1">Table No: 1</option>
                  <option value="Table2">Table No: 2</option>
                  <option value="Table3">Table No: 3</option>
                  <option value="Table4">Table No: 4</option>
                  <option value="Table5">Table No: 5</option>
                  <option value="Table6">Table No: 6</option>
                  <option value="Table7">Table No: 7</option>
                  <option value="Table8">Table No: 8</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <div className="flex-1 w-2/5">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Reservation Date
                </label>
                <input
                  {...register("reservationDate")}
                  type="date"
                  placeholder="Type reservation date here"
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex-1 w-2/5">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Reservation Time
                </label>
                <select
                  {...register("reservationTime")}
                  type="time"
                  placeholder="Type reservation time here"
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Details
              </label>
              <textarea
                {...register("reservationAbout")}
                type="text"
                className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Write in details"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="btn bg-blue-900 hover:bg-[#02137A] w-full text-white font-semibold text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GiveReservation;
