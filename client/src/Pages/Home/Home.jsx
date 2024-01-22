import Nav from "../../Components/Nav/Nav"
import Banner from "./Banner/Banner"

const Home = () => {
    return <section>
        <div className="relative">
            <Banner />
            <div className="absolute top-0 left-0 w-full">
                <Nav />
            </div>

        </div>




    </section>
}

export default Home