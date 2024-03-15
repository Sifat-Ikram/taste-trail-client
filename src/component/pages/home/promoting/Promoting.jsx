import { Link } from 'react-router-dom';
import image from "../../../../assets/dashboard/image-5.jpg"

const Promoting = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col items-center lg:flex-row">
                    <div className='flex-1'>
                        <img src={image} alt="Restaurant Image" className="max-w-lg h-96 rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">Experience the Finest Dining</h1>
                        <p className="py-6">Indulge in exquisite flavors crafted by our master chefs. Reserve your table now and enjoy a culinary journey like never before.</p>
                        <Link to="/giveReservation">
                           <button className='btn bg-[#02137A] hover:bg-[#02137A] text-white font-bold text-lg'>Reserve Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promoting;
