import React from 'react'

const OwnerBookingRow = ({ booking, sl }) => {
    const { name, picture, rentPerMonth, renterPhone, renterEmail } = booking;
    return (
        <tr>
            <td className="font-semibold">{sl}</td>
            <td className="font-semibold">{name}</td>
            <td className="font-semibold">
                <img className="w-12 h-12 rounded" src={picture} alt="" />
            </td>
            <td className="font-semibold">${rentPerMonth}</td>
            <td className="font-semibold">{renterEmail}</td>
            <td className="font-semibold">{renterPhone}</td>

            <td className="font-semibold">

            </td>
        </tr>
    )
}

export default OwnerBookingRow