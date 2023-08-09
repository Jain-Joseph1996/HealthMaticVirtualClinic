import React, { useState } from "react";
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";
import logo from "../images/products/HVCLogo.jpeg"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/home",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Apply Doctor",
      path: "/apply-doctor",
      icon: "ri-home-line",
    },
    {
      name: "Medical History",
      path: "/history",
      icon: "ri-hospital-line",
    }
  ];

  const doctorMenu = [
  
    {
      name: "Appointments",
      path: "/doctor/appointments",
      icon: "ri-file-list-line",
    },
    // {
    //   name: "Apply as doctor",
    //   path: "/apply-doctor",
    //   icon: "ri-home-line",
    // },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "ri-user-line",
    },
  ];

  const adminMenu = [
    // {
    //   name: "Home",
    //   path: "/",
    //   icon: "ri-home-line",
    // },
    {
      name: "Users",
      path: "/admin/userslist",
      icon: "ri-user-line",
    },
    {
      name: "Doctors",
      path: "/admin/doctorslist",
      icon: "ri-user-star-line",
    },
    {
      name: "News and Announcements",
      path: "/newsandannouncement",
      icon: "ri-file-list-line",
    },
  ];

  const role = user?.role
  const menuToBeRendered = role == "admin" ? adminMenu : role == "doctor" ? doctorMenu : userMenu;
  const unseenNotifications = user?.unseenNotifications;
  return (
    <>
    <div className="main">
      <div className="d-flex layout">
      {user?<div className="sidebar">
          <div className="sidebar-header">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img style={{ width: '50px', margin: '10px' }} src={logo} alt="Logo" />
              <span className="heading">HEALTHMATIC VIRTUAL CLINIC</span>
            </a>
          </div>

          <div className="menu">
            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`d-flex menu-item ${isActive && "active-menu-item"
                    }`}
                >
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
            <div
              className={`d-flex menu-item `}
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              <i className="ri-logout-circle-line"></i>
              {!collapsed && <Link to="/login">Logout</Link>}
            </div>
          </div>
        </div> : "" }

        <div className="content">
          {user ? <div className="header">
            {collapsed ? (
              <i
                className="ri-menu-2-fill header-action-icon"
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                className="ri-close-fill header-action-icon"
                onClick={() => setCollapsed(true)}
              ></i>
            )}

            <div className="d-flex align-items-center px-4">
              <Badge
                count={user?.unseenNotifications?.length}
                onClick={() => navigate("/notifications")}
              >
                <i className="ri-notification-line header-action-icon px-3"></i>
              </Badge>

              <Link className="anchor mx-2" to="/profile">
              {role == "admin"? "Admin" :user?.fname + " " + user?.lname}
              </Link>
            </div>
          </div> : ""}

          <div className="body layoutBody">{children}</div>
        </div>
      </div>
    </div>
       <ToastContainer
       position="top-right"
       autoClose={250}
       hideProgressBar={false}
       newestOnTop={true}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       theme="light"
     />
     </>
  );
}

export default Layout;
