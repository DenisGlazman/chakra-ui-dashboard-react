import './Tables.css'
import Header from "../Dashbord screen/Header/Header";
import SideBar from "../Dashbord screen/SideBar/SideBar";
import Footer from "../Dashbord screen/Footer/Footer";
import AuthorsTable from "./Authors_table/AuthorsTable";
import Project from "../Dashbord screen/Main/Section4/Projects/Project.jsx";


const Tables=()=>{
    return(
        <div className="tables_screen">
            <div className="side-panel-container">
                <SideBar/>
            </div>
                <div className="tables_wrapper">
                    <Header/>
                    <AuthorsTable/>
                    <Project/>
                    <Footer/>
                </div>

        </div>

    )
}
export default Tables