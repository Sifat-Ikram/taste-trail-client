import error from "../../../assets/404.gif";
import { IoHome } from "react-icons/io5";

const ErrorPage = () => {
    return (
        <div className='w-4/5 mx-auto flex flex-col justify-center items-center gap-10 mb-10'>
            <img src={error} alt="" />
            <a href="/">
                <button className='text-lg bg-[#045543] rounded-md  text-white font-semibold px-3 py-2 flex items-center gap-2'><IoHome></IoHome>Back To Home</button>
            </a>
        </div>
    );
};

export default ErrorPage;