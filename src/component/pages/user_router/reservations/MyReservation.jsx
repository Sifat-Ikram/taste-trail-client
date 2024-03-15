import { useQuery } from '@tanstack/react-query';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Cover from '../../../hooks/Cover';
import img from '../../../../assets/dashboard/image-5.jpg'

const MyReservations = () => {
    const axiosPublic = useAxiosPublic();
    const { data: reservations = [], refetch } = useQuery({
        queryKey: ['reservation'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reservation');
            return res.data;
        }
    })

    const handleDelete = reservation => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/reservation/${reservation._id}`)
                    .then(res => {
                        refetch();
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Reservation Deleted!",
                                text: "Reservation has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div className='w-11/12 mx-auto py-10'>
            <Cover img={img} title={"Reservations"} />
            <div className='text-center'>
                <h1 className='uppercase text-3xl font-bold mt-10'>reservations</h1>
            </div>
            <div className='p-2 mt-10'>
                <div className="overflow-x-auto mt-3">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-blue-900 rounded-sm'>
                            <tr>
                                <th className='text-base font-semibold text-white'></th>
                                <th className='text-base font-semibold text-white'>Table Number</th>
                                <th className='text-base font-semibold text-white'>Date</th>
                                <th className='text-base font-semibold text-white'>Time</th>
                                <th className='text-base font-semibold text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reservations.map((reservation, index) => <tr key={reservation._id}>
                                    <th>
                                        <label>{index + 1}</label>
                                    </th>
                                    <td>
                                        <div>
                                            <div>{reservation.reservationTable}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div>{reservation.reservationDate}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div>{reservation.reservationTime}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <MdDelete onClick={() => handleDelete(reservation)} className='text-4xl cursor-pointer bg-red-700 text-white p-2 rounded-md'></MdDelete>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReservations;