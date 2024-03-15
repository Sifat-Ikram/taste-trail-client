import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Cover from "../../hooks/Cover";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import img from "../../../assets/home/featured.jpg"

const ReviewPage = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic( )

    const onSubmit = async (data) => {
        const ReviewInfo = {
            name: data.name,
            review: data.review,
            userName: user.displayName,
            userEmail: user.email
          };
    
          const ReviewRes = await axiosPublic.patch(`/review`, ReviewInfo);
    
          if (ReviewRes.data.modifiedCount) {
            Swal.fire("Review updated successfully");
            reset();
          }
      };


    return (
        <div className="mb-10">
      <div className="w-full mx-auto">
        <Cover img={img} title={"Review"} />
        <div className="text-center mt-20">
          <h1 className="uppercase text-3xl font-bold mt-10">Write a review</h1>
        </div>
        <div className="w-4/5 mx-auto mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="my-8 space-y-7">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Type Food name here"
                  className="w-1/3 border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Review
              </label>
              <textarea
                {...register("review")}
                type="text"
                className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Write review"
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

export default ReviewPage;