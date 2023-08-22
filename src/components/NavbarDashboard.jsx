import React, { useState } from "react";
import "../styles/NavbarDashboardStyles/style.css";
import { BiSearch, BiBell, BiUser } from 'react-icons/bi'

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
          <button className="icon-right" onClick={handleNotification}>
            <BiBell size={25} color="#6c6c6c" />
          </button>
          <div
            className={
              notification
                ? "notification-content"
                : "notification-content-hide"
            }
          >
            <p>Notification</p>
          </div>
        </div>
        <div className="profile">
          <button className="icon-right" onClick={handleProfile}>
            <BiUser size={25} color="#6c6c6c" />
          </button>
          <div className={profile ? "profile-content" : "profile-content-hide"}>
            <p>profile</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarDashboard;
