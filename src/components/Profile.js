import React from "react";

function Profile() {
    return (
        <main className="main">
            <p className="name">Terry Roach</p>
            <p className="role">Frontend Developer</p>
            <a className="website" href="https://terryroach.co.uk/" target="_blank">terryroach.co.uk</a>
            <p className="title">About</p>
            <p className="detail">I am currently studying to become a Frontend Developer. I am mostly using Scrimba alongside other resources including Udemy and YouTube.</p>
            <p className="title">Interests</p>
            <p className="detail">When I am not working or learning Frontend Devleopment I like to spend time with my family. I am also a keen darts player and play for my county Merseyside.</p>
        </main>
    );
};

export default Profile;