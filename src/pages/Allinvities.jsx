import { Link } from "react-router-dom";
import Header from "../component/Header";
import React from "react";

const Allinvities = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="sidebar sidebar-style-2">
          <div className="sidebar-wrapper scrollbar scrollbar-inner">
            <div className="sidebar-content">
              <ul className="nav nav-primary">
                <li className="nav-item bdr_top1">
                  <Link to="/dashboardbrand">
                    <img
                      src="assets/images/dashboard.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/yourcampaigns">
                    <img
                      src="assets/images/your-campaigns.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Your Campaigns</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/campaignsstatus">
                    <img
                      src="assets/images/campaigns-status.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Campaigns Status</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/influencers">
                    <img
                      src="assets/images/influencers.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Influencers</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/howitworks">
                    <img
                      src="assets/images/how-it-works.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>How It Works?</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/reportanalytics">
                    <img
                      src="assets/images/report-analytics.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Reports &#38; Analytics </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/wishlist">
                    <img
                      src="assets/images/wishlist.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Wishlist</p>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/allinvities">
                    <img
                      src="assets/images/all-invities.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>All Invities</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-panel wishlist">
          <div className="content">
            <div className="page-header mt20">
              <h1 className="page-title">Wishlist</h1>
            </div>
            <div className="page-inner influencers">
              <div className="content-wrapper">
                <div className="form-row">
                  <div className="col-md-3 col-sm-6">
                    <div className="card">
                      <div className="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="infl1"
                          name="example"
                        />
                        <label
                          className="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div className="profile-inf avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/inf1.jpg"
                          alt=""
                        />
                      </div>
                      <h2 className="card-title">Aadesh Khurana</h2>
                      <p className="designation">Public Figure</p>
                      <div className="card-body">
                        <div className="social_link">
                          <a href="#">
                            <img src="assets/images/inf-instagram.svg" alt="" />
                          </a>
                          <a href="#">
                            <img src="assets/images/inf-youtube.svg" alt="" />
                          </a>
                          <a href="#">
                            <img src="assets/images/inf-facebook.svg" alt="" />
                          </a>
                          <a href="#">
                            <img src="assets/images/inf-twitter.svg" alt="" />
                          </a>
                        </div>

                        <div className="inf-footer">
                          <div className="inl-location">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div className="inl-wishlist active">
                            <a href="#">
                              <i className="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="card">
                      <div className="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="infl2"
                          name="example"
                        />
                        <label
                          className="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div className="profile-inf avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/inf2.jpg"
                          alt=""
                        />
                      </div>
                      <h2 className="card-title">Sophia</h2>
                      <p className="designation">Public Figure</p>
                      <div className="card-body">
                        <div className="social_link">
                          <a href="#">
                            <img src="assets/images/inf-instagram.svg" alt="" />
                          </a>
                          <a href="#">
                            <img src="assets/images/inf-youtube.svg" alt="" />
                          </a>
                          <a href="#">
                            <img src="assets/images/inf-facebook.svg" alt="" />
                          </a>
                          <a href="#">
                            <img src="assets/images/inf-twitter.svg" alt="" />
                          </a>
                        </div>

                        <div className="inf-footer">
                          <div className="inl-location">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div className="inl-wishlist active">
                            <a href="#">
                              <i className="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
                    <div className="card">
                      <div className="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="infl3"
                          name="example"
                        />
                        <label
                          className="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div className="profile-inf avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/inf3.jpg"
                          alt=""
                        />
                      </div>
                      <h2 className="card-title">William Adell</h2>
                      <p className="designation">Public Figure</p>
                      <div className="card-body">
                        <div className="social_link">
                          <a href="#">
                            <img src="assets/images/inf-instagram.svg" alt="" />
                          </a>
                          <a href="#">
                            <img src="assets/images/inf-youtube.svg" alt="" />
                          </a>
                          <a href="#">
                            <img src="assets/images/inf-facebook.svg" alt="" />
                          </a>
                          <a href="#">
                            <img src="assets/images/inf-twitter.svg" alt="" />
                          </a>
                        </div>

                        <div className="inf-footer">
                          <div className="inl-location">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div className="inl-wishlist active">
                            <a href="#">
                              <i className="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="card">
                      <div className="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="infl2"
                          name="example"
                        />
                        <label
                          className="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div className="profile-inf avatar-lg">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/inf4.jpg"
                          alt=""
                        />
                      </div>
                      <h2 className="card-title">Olivia Anderson</h2>
                      <p className="designation">Public Figure</p>
                      <div className="card-body">
                        <div className="social_link">
                          <a href="#">
                            <img src="assets/images/inf-instagram.svg" alt="" />
                          </a>
                          <a href="#">
                            <img src="assets/images/inf-youtube.svg" alt="" />
                          </a>
                          <a href="#">
                            <img src="assets/images/inf-facebook.svg" alt="" />
                          </a>
                          <a href="#">
                            <img src="assets/images/inf-twitter.svg" alt="" />
                          </a>
                        </div>

                        <div className="inf-footer">
                          <div className="inl-location">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div className="inl-wishlist active">
                            <a href="#">
                              <i className="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <button
                    className="btn btn2 mr-1"
                    data-target="#Campaign-Success"
                    data-toggle="modal"
                    type="submit"
                  >
                    Send Invite{" "}
                  </button>
                </div>
              </div>
              <div className="copyright_text">
                © 2023, Sociopuff. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Allinvities;
