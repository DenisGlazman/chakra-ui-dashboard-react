import './ProfileMain.css'
import PlatformSettings from "./Platform settings/PlatformSettings.jsx";
import Conversations from "./Conversations/Conversations.jsx";
import ProfileInformation from "./Profile Information/Profile_Information.jsx";
const ProfileMain=()=>{
    return (
        <div className="profile-main">
            <PlatformSettings/>
            <ProfileInformation/>
            <Conversations/>
        </div>
    )

}
export default ProfileMain