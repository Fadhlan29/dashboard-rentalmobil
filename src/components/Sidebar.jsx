import React from "react";
import { BiCog, BiBasket, BiSolidUser } from "react-icons/bi";
import { BsFillCarFrontFill } from "react-icons/bs";
import "../styles/SidebarStyles/style.css";
import { Link } from "react-router-dom";
import logo from "../images/logo/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="list-item">
        <div className="others">
          <h2 className="header-others">Page</h2>
          <ul>
            <Link to="/dashboard">
              <li className="others-list">
                <BiCog size={25} color="#6c6c6c" />
                <h2>Dashboard</h2>
              </li>
            </Link>
            <Link to="/pesanan">
              <li className="others-list">
                <BiBasket size={25} color="#6c6c6c" />
                <h2>Pesanan</h2>
              </li>
            </Link>
            <li className="others-list">
              <BiSolidUser size={25} color="#6c6c6c" />
              <Link to="/pengguna">
                <h2>Pengguna</h2>
              </Link>
            </li>
            <li className="others-list">
              <BsFillCarFrontFill size={23} color="#6c6c6c" />
              <Link to="/mobil">
                <h2>Mobil</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
