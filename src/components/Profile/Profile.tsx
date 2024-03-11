import React from "react";
import "./Profile.css";
import img from "../../images/profile.jpg";

const Profile: React.FC = () => {
    return (
        <section className='profile'>
            <img src={img} className='profile-image' alt='profile-image'/>
        </section>
    );
};

export default Profile;