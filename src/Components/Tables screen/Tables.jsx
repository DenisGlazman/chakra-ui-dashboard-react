import './Tables.css'
import Header from "../Dashbord screen/Header/Header";
import SideBar from "../Dashbord screen/SideBar/SideBar";
import Footer from "../Dashbord screen/Footer/Footer";
import AuthorsTable from "./Authors_table/AuthorsTable";
import Section4 from "../Dashbord screen/Main/Section4/Section4";
const Tables=()=>{
    return(
        <div className="tables_screen">
            <Header/>
            <SideBar/>
            <div className="tables_wrapper">
                <AuthorsTable/>
                <Section4/>
            </div>
            <Footer/>
        </div>
    )
}
export default Tables