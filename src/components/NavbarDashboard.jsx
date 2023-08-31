import React, { useState } from "react";
import "../styles/NavbarDashboardStyles/style.css";
import { BiSearch, BiBell, BiUser, BiExit } from 'react-icons/bi'
import { Avatar } from 'primereact/avatar';
import dummy_user from '../images/dummy_user.jpg'

const NavbarDashboard = () => {
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleNotification = () => {
    setNotification(!notification);
    setProfile(false);
  };

  const handleProfile = () => {
    setProfile(!profile);
    setNotification(false);
  };

  return (
    <header className="header-main">
      <div className="left">
        <form>
          <input type="text" placeholder="Search" />
          <button>
            <BiSearch size={20} color="#fff" />
          </button>
        </form>
      </div>

      <div className="right">
        <div className="notification">
          <button className="notification-icon" onClick={handleNotification}>
            <BiBell size={25} color="#6c6c6c" />
          </button>
          <div
            className={
              notification
                ? "notification-wrapper"
                : "notification-wrapper-hide"
            }
          >
            <p>Notification</p>
          </div>
        </div>
        <div className="profile">
          <button className="profile-logo" onClick={handleProfile}>
            <Avatar image={dummy_user} size="xlarge" shape="circle"/>
            {/* <p>dasndalk</p> */}
          </button>
          <div className={profile ? "profile-wrapper" : "profile-wrapper-hide"}>
            <button className="profile-content" style={{ marginBottom: '15px' }} onClick={() => alert('tombol berfungsi')}>
              <BiUser size={23} color="#6c6c6c"/>
              <p>Profile</p>
            </button>
            <button className="profile-content" onClick={() => alert('tombol berfungsi')}>
              <BiExit size={23} color="#6c6c6c"/>
              <p>Logout</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarDashboard;
