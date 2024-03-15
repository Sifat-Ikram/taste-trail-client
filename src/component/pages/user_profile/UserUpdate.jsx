import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UserUpdate = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { data: user = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get("/user");
      return res.data;
    },
  });

  const currentUser = user.find((res) => res._id === id);

  if (!currentUser) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  console.log(currentUser);
  const { email, name, _id, gender, photoUrl, birthdate, address, role } =
    currentUser;

  const onSubmit = async (data) => {
    const imageFile = { image: data.photo[0] };
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const userInfo = {
      name: data.name || name,
      email: data.email || email,
      photoUrl: res.data.data.display_url || photoUrl,
      gender: data.gender || gender,
      address: data.address || address,
      birthdate: data.birthdate || birthdate,
      role: data.role || role,
    };

    const userRes = await axiosPublic.patch(`/user/${_id}`, userInfo);

    if (userRes.data.modifiedCount) {
      Swal.fire("User profile updated successfully");
      reset();
      navigate(location?.state ? location.state : "/userProfile");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="my-10">
        <div className="w-full max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Update Your Profile
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                name="name"
                {...register("name")}
                defaultValue={name}
                type="text"
                placeholder="Type your name here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                name="email"
                type="email"
                defaultValue={email}
                {...register("email")}
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="lg:flex justify-between gap-5">
              <div className="flex-1">
                <label className="block mb-2">Avatar</label>
                <input
                  type="file"
                  {...register("photo")}
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2">Your Gender</label>
                <select
                  {...register("gender")}
                  defaultValue={gender}
                  className="select select-bordered w-full"
                >
                  <option disabled>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-2">Address</label>
              <input
                type="text"
                defaultValue={address}
                {...register("address")}
                placeholder="Address"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-2">Birthdate</label>
              <input
                type="date"
                defaultValue={birthdate}
                {...register("birthdate")}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-2">Role</label>
              <input
                type="text"
                defaultValue={role}
                {...register("role")}
                placeholder="Role"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn bg-[#0845F4] hover:bg-[#0845F4] w-full text-white font-semibold text-lg"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
