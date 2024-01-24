import { useContext } from "react";
import useGetSecure from "../../../hooks/useGetSecure"
import { UserContext } from "../../../context/AuthProvider";
import NoDataLoader from "../../../Components/Loader/NoDataLoader";
import HousesRow from "./HousesRow";

const OwnerDashboard = () => {

    const { user } = useContext(UserContext);

    const { data: houses, isPending, refetch } = useGetSecure(["house", user?.email], `/api/house?email=${user?.email}`);

    console.log(houses)

    return <div>
        <div>
            <h3 className="text-center my-5 font-semibold text-3xl">Manage or remove listed houses</h3>
        </div>

        <div>
            {
                isPending ? <NoDataLoader />
                    : houses?.length > 0 ? <div className="overflow-x-auto">
                        <table className="table">

                            <thead>
                                <tr>
                                    <th>Sl.</th>
                                    <th>Name</th>
                                    <th>Picture</th>
                                    <th>Rent</th>
                                    <th>Phone</th>
                                    <th>Edit</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    houses?.map((house, index) => <HousesRow key={house?._id} house={house} refetch={refetch} sl={index + 1} />)
                                }
                            </tbody>

                        </table>

                    </div>
                        : <div>
                            <h3 className="text-center my-20 font-semibold text-gray-500 text-3xl">No data found!</h3>
                        </div>
            }
        </div>



    </div>


}

export default OwnerDashboard