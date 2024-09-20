import HomeContent from "../../Components/homeContent/HomeContent"
import Navbar from "../../Components/Navbar/Navbar"
import "./homepage.css"

const HomePage= ()=>{

    return(
        <div className="homepage" >
            <Navbar />
            <HomeContent />
        </div>
    )
}

export default HomePage