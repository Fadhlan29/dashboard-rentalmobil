import React from "react";
import '../styles/TableUsersStyle/style.css'
import userLogo from "../images/pengguna/user_logo.jpg";

const userData = [
  {
    id: 1,
    name: "John Albert",
    email: "john.albert@example.com",
    title: "Regional Paradigm Technician",
    status: "Active",
    role: "Admin",
  },
  {
    id: 2,
    name: "Alex Greith",
    email: "alex.greith@example.com",
    title: "Information Engineer",
    status: "Active",
    role: "User",
  },
];

const TableUsers = () => {
  return (
    <table>
      <thead>
        <tr>
          <th className="user-cell">NAME</th>
          <th className="main-title">TITLE</th>
          <th>STATUS</th>
          <th>ROLE</th>
          <th></th>
        </tr>
      </thead>
      {userData.map((user) => (
        <tbody>
          <tr>
            <td className="user-cell">
              <div class="user-info">
                <figure>
                  <img src={userLogo} alt="User Logo" />
                </figure>
                <div class="user-details">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>
              </div>
            </td>
            <td className="main-title">
              <p>{user.title}</p>
            </td>
            <td>
              <button className="btn-status">Active</button>
            </td>
            <td>
              <p>{user.role}</p>
            </td>
            <td>
              <button className="btn-edit">Edit</button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TableUsers;
