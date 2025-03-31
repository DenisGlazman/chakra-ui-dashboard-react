import SideBar from "../Dashbord screen/SideBar/SideBar";
import Header from "../Dashbord screen/Header/Header";
import Footer from "../Dashbord screen/Footer/Footer";
import Billing from "./Billing/Billing";


const BillingScreen = () => {
    return (
        <div className="dashbord-container">
            <SideBar/>
            <div className="main-container">
                <Header/>
                <Billing/>
                <Footer/>
            </div>

        </div>
    )


}
export default BillingScreen;