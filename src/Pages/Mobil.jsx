import React, { useState } from "react";
import { NavbarDashboard, TableUsers } from "../components";
import { Sidebar } from "../components";
import "../styles/PenggunaStyles/style.css";

const Mobil = () => {
  return (
    <div className="container-pesanan">
      <Sidebar />
      <div className="content">
        <NavbarDashboard />
        <h1 className="content-title">Mobil</h1>
        <div className="main-content">
          <TableUsers/>
        </div>
      </div>
    </div>
  );
};

export default Mobil;
