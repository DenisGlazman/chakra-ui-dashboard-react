import './ProfileElement.css'


const ProfileElement = () => {
    return (
        <div className="profile-element-container">
            <div className="profile-element-avatar">
                <div className="profile-element-avatar-images">
                    <img src='Profile_page_images/MainImage.png' alt='avatar' />
                    <img className='edit' src='Profile_page_images/MainImageIcon.svg' alt='edit'/>

                </div>
                <div className="profile-element-avatar-name">
                    <span className='name'>Esthera Jackson</span>
                    <span className='mail'>esthera@simmmple.com</span>
                </div>
            </div>
            <div className="profile-element-tabs">
                <button><img src='Profile_page_images/overview_tab.svg' alt='overview'/></button>
                <button><img src='Profile_page_images/teams_tab.svg' alt='teams'/></button>
                <button><img src='Profile_page_images/projects_tab.svg' alt='projects'/></button>
            </div>
        </div>
    )
}
export default ProfileElement;