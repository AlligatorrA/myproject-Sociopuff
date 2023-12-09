
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/authProvider";

const Header = () => {
  const { LogOutHandle } = useAuth()
  return (
    <>
      <div className="main-header">
        <div className="logo-header">
          <Link to="/" className="logo">
            <img
              src="assets/images/logo.png"
              alt="navbar brand"
              className="navbar-brand desktop"
            />
            <img
              src="assets/images/icon.png"
              alt="navbar brand"
              className="mobile"
            />
          </Link>
          <button
            className="navbar-toggler sidenav-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="las la-bars"></i>
          </button>
          <button className="topbar-toggler more toggled">
            <img src="assets/images/icon-options-vertical.svg" alt="" />
          </button>
        </div>
        <nav className="navbar navbar-header navbar-expand-lg">
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="las la-bars"></i>
            </button>
          </div>
          <div className="container-fluid">
            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
              <li className="nav-item dropdown hidden-caret">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="notifDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="bell-sect">
                    <img src="assets/images/notifications.svg" />
                    <span className="notification"></span>
                  </span>
                </Link>
                <ul
                  className="dropdown-menu notif-box animated fadeIn"
                  aria-labelledby="notifDropdown"
                >
                  <li>
                    <div className="dropdown-title">
                      You have 4 new notification
                    </div>
                  </li>
                  <li>
                    <div className="notif-scroll scrollbar-outer">
                      <div className="notif-center">
                        <a href="#">
                          <div className="notif-content">
                            <span className="block">New user registered</span>
                            <span className="time">5 minutes ago</span>
                          </div>
                        </a>
                        <a href="#">
                          <div className="notif-content">
                            <span className="block">
                              Rahmad commented on Admin
                            </span>
                            <span className="time">12 minutes ago</span>
                          </div>
                        </a>
                        <a href="#">
                          <div className="notif-content">
                            <span className="block">
                              Reza send messages to you
                            </span>
                            <span className="time">12 minutes ago</span>
                          </div>
                        </a>
                        <a href="#">
                          <div className="notif-content">
                            <span className="block">Farrah liked Admin</span>
                            <span className="time">17 minutes ago</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a className="see-all" href="brand-notification.html">
                      See all notifications<i className="la la-angle-right"></i>{" "}
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown hidden-caret top-user-profile">
                <a
                  className="dropdown-toggle profile-pic"
                  data-toggle="dropdown"
                  href="#"
                  aria-expanded="false"
                >
                  <p>
                    <small>Welcome</small>Candddy
                  </p>
                  <div className="avatar-sm">
                    <img
                      src="assets/images/user-brand.png"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-user animated fadeIn">
                  <div className="dropdown-user-scroll scrollbar-outer">
                    <li>
                      <div className="user-box">
                        <div className="u-text">
                          <h4>Candddy</h4>
                          <p className="text-muted">candddy@mail.com</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">
                        My Profile
                      </a>
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-item" onClick={LogOutHandle}>
                        Logout
                      </button>
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
