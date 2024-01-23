import Footer from "../../Components/Footer/Footer"
import Nav from "../../Components/Nav/Nav"
import Banner from "./Banner/Banner"
import Houses from "./Houses/Houses"

const Home = () => {
    return <section>


        <div className="relative">
            <Banner />
            <div className="absolute top-0 left-0 w-full">
                <Nav />
            </div>
        </div>

        <Houses />


        <Footer />
    </section>
}

export default Home