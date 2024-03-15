import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from '../../provider/AuthProvider';

const UserProfile = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { data: currentUser = [] } = useQuery({
        queryKey: ['currentUser.email'],
        queryFn: async () => {
            const res = await axiosPublic.get('/user');
            return res.data;
        }
    })

    if (!user) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    const loggedUser = currentUser.find(cUser => cUser.email === user.email);

    const { email, name, photoUrl, _id, gender, birthdate, address, role } = loggedUser;

    return (
        <div className='w-full h-full flex justify-center items-center bg-gray-100'>
            <div className='w-11/12 max-w-3xl mx-auto mt-10'>
                <div className='bg-white rounded-lg shadow-lg p-8'>
                    <h1 className='text-3xl font-bold mb-6'>{name} Profile</h1>
                    <div className='flex justify-center'>
                        <img src={photoUrl} alt="" className='h-40 w-40 rounded-full' />
                    </div>
                    <div className='mt-6'>
                        <div className='flex justify-between mb-4'>
                            <span className='text-lg font-semibold'>Name:</span>
                            <span className='text-lg'>{name}</span>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <span className='text-lg font-semibold'>Email:</span>
                            <span className='text-lg'>{email}</span>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <span className='text-lg font-semibold'>Gender:</span>
                            <span className='text-lg'>{gender}</span>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <span className='text-lg font-semibold'>Birthdate:</span>
                            <span className='text-lg'>{birthdate}</span>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <span className='text-lg font-semibold'>Address:</span>
                            <span className='text-lg'>{address}</span>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <span className='text-lg font-semibold'>Role:</span>
                            <span className='text-lg'>{role}</span>
                        </div>
                        <div className='mt-8'>
                            <Link to={`/update/${_id}`}>
                                <button className='btn btn-outline hover:bg-blue-600 border-2 text-blue-600 font-bold border-blue-600 px-6 py-2 rounded-lg'>Edit Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
