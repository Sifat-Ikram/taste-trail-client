import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import useMenu from "../../../hooks/useMenu";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Cover from "../../../hooks/Cover";
import img from "../../../../assets/menu/banner3.jpg";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateFood = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const [menu] = useMenu();
  const navigate = useNavigate();
    const location = useLocation();

  const selectedMenu = menu.find((test) => test._id === id);

  if (!selectedMenu) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  const { name, recipe, category, price, serve_time, _id } = selectedMenu;

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const resImage = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (resImage.data.data.display_url) {
      const foodInfo = {
        name: data.name,
        price: parseFloat(data.price),
        category: data.category,
        serve_time: data.serve_time,
        recipe: data.recipe,
        image: resImage.data.data.display_url,
      };

      const foodRes = await axiosPublic.patch(`/menu/${_id}`, foodInfo);

      if (foodRes.data.modifiedCount) {
        Swal.fire("food updated successfully");
        reset();
        navigate(location?.state ? location.state : '/dashboard/manageFood');
      }
    }
  };

  return (
    <div className="mb-10">
      <div className="w-full mx-auto">
        <Cover img={img} title={"Update Page"} />
        <div className="text-center mt-20">
          <h1 className="uppercase text-3xl font-bold mt-10">Update Here</h1>
        </div>
        <div className="w-4/5 mx-auto mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="my-8 space-y-7">
            <div className="flex justify-between gap-8">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Type your name here"
                  defaultValue={name}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Price
                </label>
                <input
                  {...register("price")}
                  type="text"
                  placeholder="Price"
                  defaultValue={price}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="flex justify-between gap-8">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Category
                </label>
                <input
                  {...register("category")}
                  type="text"
                  placeholder="Category"
                  defaultValue={category}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Serve Time
                </label>
                <input
                  {...register("serve_time")}
                  type="text"
                  placeholder="Serve Time"
                  defaultValue={serve_time}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Recipe
              </label>
              <textarea
                {...register("recipe")}
                type="text"
                defaultValue={recipe}
                className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Write Recipe"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Photo
              </label>
              <input
                type="file"
                {...register("image")}
                className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn bg-blue-900 hover:bg-[#02137A] w-full text-white font-semibold text-lg"
              >
                Item Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
