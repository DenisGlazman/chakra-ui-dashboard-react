import './Profile.css'
import SideBar from "../Dashbord screen/SideBar/SideBar";
import Footer from "../Dashbord screen/Footer/Footer";
import ProfileHeader from "./Extended header/ProfileHeader";
import ProfileMain from "./Profile main/ProfileMain";
import Projects from "./Profile projects/ProfileProjects.jsx";


const Profile = () => {
    return (
        <div className="dashbord-container">
            <SideBar/>
            <div className="main-container">

                <ProfileHeader/>
                <ProfileMain/>
                <Projects/>
                <Footer/>
            </div>

        </div>
    )
}
export default Profile;