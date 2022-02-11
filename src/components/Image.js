import React from "react";
import profilePic from "../images/pic1.jpg";

function Profile() {
    return (
        <img src={profilePic} alt="Profile picture" className="profile-image" />        
    )
}

export default Profile;