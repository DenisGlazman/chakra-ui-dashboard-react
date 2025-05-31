import React, { useEffect, useState } from "react";
import "./ProfileInformation.css";

export default function ProfileInformation() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5001/profile")
            .then(res => res.json())
            .then(setProfile);
    }, []);

    if (!profile) return <div>Loading profile...</div>;

    return (
        <div className="profile_card">
            <h3>Profile Information</h3>
            <p className="desc">{profile.description}</p>
            <p><strong>Full Name:</strong> {profile.fullName}</p>
            <p><strong>Mobile:</strong> {profile.mobile}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Location:</strong> {profile.location}</p>
            <p><strong>Social Media:</strong></p>
            <div className="social-icons">
                {profile.social.map((icon, index) => (
                    <i key={index} className={icon}></i>
                ))}
            </div>
        </div>
    );
}
