import './ProfileHeader.css'
import Header from "../../Dashbord screen/Header/Header.jsx";
import ProfileElement from "../Profile main/Profile element/ProfileElement.jsx";





const ProfileHeader=()=>{

    return(

        <div className="profile-header">
            <Header/>
            <ProfileElement/>
        </div>

    )
}
export default ProfileHeader;