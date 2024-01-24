import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const BookingRow = ({ booking, refetch, sl }) => {
    const { name, picture, rentPerMonth, phoneNumber, _id } = booking;


    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();


    const handleDelete = (id) => {
        Swal.fire({
            title: "Remove?",
            text: "Are you sure want to remove the booking?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/booking?id=${id}`)
                    .then(res => {
                        if (res.data) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Booking removed successfully!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch();

                        }
                    })
            }
        });
    }


    return <tr>
        <td className="font-semibold">{sl}</td>
        <td className="font-semibold">{name}</td>
        <td className="font-semibold">
            <img className="w-12 h-12 rounded" src={picture} alt="" />
        </td>
        <td className="font-semibold">${rentPerMonth}</td>
        <td className="font-semibold">{phoneNumber}</td>

        <td className="font-semibold">
            <button onClick={() => handleDelete(_id)} className="text-2xl text-red-600"><FaTrash /></button>
        </td>
    </tr>
}

export default BookingRow