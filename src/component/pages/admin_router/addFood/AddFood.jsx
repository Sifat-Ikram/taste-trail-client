import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddFood = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.data.display_url) {
            const foodInfo = {
                name: data.name,
                price: parseFloat(data.price),
                category: data.category,
                serve_time: data.serve_time,
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const foodRes = await axiosSecure.post('/menu', foodInfo);
            
            if (foodRes.data.insertedId) {
                Swal.fire("Food item added successfully");
                reset();
            }
        }
    }

    return (
        <div className="my-10">
            <div className="w-full mx-auto">
                <div className="flex-1 text-center py-10 bg-blue-900 w-full">
                    <h1 className="text-5xl font-bold text-white">Add a Food item</h1>
                </div>
                <div className="w-4/5 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className='my-8 space-y-7'>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input {...register("name")} type="text" placeholder="Type your name here" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Price
                            </label>
                            <input {...register("price")} type="text" placeholder="Price" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Category
                            </label>
                            <input {...register("category")} type="text" placeholder="Category" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Serve Time
                            </label>
                            <input {...register("serve_time")} type="text" placeholder="Serve Time" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Recipe
                            </label>
                            <textarea {...register("recipe")} type="text" className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Write Recipe"></textarea>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Photo
                            </label>
                            <input type="file" {...register("image")} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div>
                            <button type='submit' className='btn btn-primary hover:bg-[#02137A] w-full text-white font-semibold text-xl'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddFood;
