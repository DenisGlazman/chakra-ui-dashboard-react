import  './Dashbord.css'
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";






const Dashbord = () => {
    return(
        <div className="dashbord-container">
            <SideBar/>
            <div className="main-container">
                <Header/>
                <Main/>
                <Footer/>
            </div>

        </div>
    )
}
export default Dashbord;