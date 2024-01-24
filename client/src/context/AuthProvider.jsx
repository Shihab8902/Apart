import { createContext, useState } from "react"
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from 'sweetalert2';




export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [loading, setLoading] = useState(true);



    const axiosPublic = useAxiosPublic();


    //Register new user
    const registerUser = (user) => {
        axiosPublic.post("/api/register", user)
            .then(res => {
                if (res.data?.email) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    setUser(res.data);
                    setLoading(false);
                    axiosPublic.post("/api/token", { email: res.data?.email })
                        .then(res => {
                            localStorage.setItem("access-token", res.data?.token);
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "You account has been registered successfully!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            return window.location.replace(user?.role === "House Owner" ? "/dashboard/ownerDashboard" : "/dashboard/renterDashboard");
                        })

                } else {
                    return Swal.fire({
                        title: "Error!",
                        text: res.data?.message,
                        icon: "error"
                    })
                }
            })
    }




    //Login user
    const logInUser = (user) => {
        axiosPublic.post("/api/login", user)
            .then(res => {
                if (res?.data?.email) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    setUser(res.data);
                    setLoading(false);
                    axiosPublic.post("/api/token", { email: res.data?.email })
                        .then(res => {
                            localStorage.setItem("access-token", res.data?.token);
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "You are logged in successfully!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            return window.location.replace("/");
                        })

                } else {
                    return Swal.fire({
                        title: "Error!",
                        text: res.data?.message,
                        icon: "error"
                    })
                }
            })
    }



    //Logout user
    const logOutUser = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("access-token");
        setUser('');
        setLoading(true);
        return window.location.replace("/")
    }



    const userInfo = {
        user,
        loading,
        registerUser,
        logInUser,
        logOutUser
    }

    return <UserContext.Provider value={userInfo}>
        {children}
    </UserContext.Provider>
}

export default AuthProvider