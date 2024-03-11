import error from "../../../assets/404.gif";
import { IoHome } from "react-icons/io5";

const ErrorPage = () => {
    return (
        <div className='w-4/5 mx-auto flex flex-col justify-center items-center mb-2 top-0'>
            <img src={error} className="h-[500px]" alt="" />
            <a href="/">
                <button className='text-lg bg-[#02137A] rounded-md  text-white font-semibold px-3 py-2 flex items-center gap-2'><IoHome></IoHome>Back To Home</button>
            </a>
        </div>
    );
};

export default ErrorPage;