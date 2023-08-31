import React, { useState, useEffect , useRef} from "react";
import { NavbarDashboard, Tables } from "../components";
import { Sidebar } from "../components";
import "../styles/PenggunaStyles/style.css";


const Pengguna = () => {
  return (
    <div className="container-pesanan">
      <Sidebar />
      <div className="content">
        <NavbarDashboard />
        <h1 className="content-title">Pengguna</h1>
        <div className="main-content">
            <Tables />
        </div>
      </div>
    </div>    
  );
};

export default Pengguna;
