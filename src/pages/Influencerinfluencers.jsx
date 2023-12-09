import { Link } from "react-router-dom";
import React from "react";
import Influencerheader from "../component/Influencerheader";
const Influencerinfluencers = () => {
  return (
    <>
      <div class="wrapper influencers_sect">
        <Influencerheader />
        <div className="sidebar sidebar-style-2">
          <div className="sidebar-wrapper scrollbar scrollbar-inner">
            <div className="sidebar-content">
              <ul className="nav nav-primary">
                <li className="nav-item bdr_top1">
                  <Link to="/dashboardinfluencer">
                    <img
                      src="assets/images/dashboard.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Influencerreportanalytics">
                    <img
                      src="assets/images/report-analytics.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Reports &#38; Analytics </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/influencerdiscovercampaigns">
                    <img
                      src="assets/images/your-campaigns.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Discover Campaigns</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/influencermanagecampaigns">
                    <img
                      src="assets/images/manage-campaigns.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Manage Campaigns</p>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/influencerinfluencers">
                    <img
                      src="assets/images/influencers.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Influencers</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="main-panel">
          <div class="content">
            <div class="page-header mt10">
              <h1 class="page-title">Influencers</h1>
            </div>
            <div class="page-inner influencers">
              <div class="content-wrapper">
                <div class="form-row">
                  <div class="col-md-3 col-sm-6">
                    <div class="card">
                      <div class="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="infl1"
                          className="example"
                        />
                        <label
                          class="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div class="profile-inf avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/inf1.jpg"
                          alt=""
                        />
                      </div>
                      <h2 class="card-title">Aadesh Khurana</h2>
                      <p class="designation">Public Figure</p>
                      <div class="card-body">
                        <div class="social_link">
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
                        <div class="inf-footer">
                          <div class="inl-location">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div class="inl-wishlist active">
                            <a href="#">
                              <i class="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="card">
                      <div class="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="infl2"
                          className="example"
                        />
                        <label
                          class="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div class="profile-inf avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/inf2.jpg"
                          alt=""
                        />
                      </div>
                      <h2 class="card-title">Sophia</h2>
                      <p class="designation">Public Figure</p>
                      <div class="card-body">
                        <div class="social_link">
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
                        <div class="inf-footer">
                          <div class="inl-location">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div class="inl-wishlist">
                            <a href="#">
                              <i class="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                    <div class="card">
                      <div class="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="infl3"
                          className="example"
                        />
                        <label
                          class="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div class="profile-inf avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/inf3.jpg"
                          alt=""
                        />
                      </div>
                      <h2 class="card-title">William Adell</h2>
                      <p class="designation">Public Figure</p>
                      <div class="card-body">
                        <div class="social_link">
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
                        <div class="inf-footer">
                          <div class="inl-location">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div class="inl-wishlist">
                            <a href="#">
                              <i class="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                    <div class="card">
                      <div class="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="infl4"
                          className="example"
                        />
                        <label
                          class="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div class="profile-inf avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/inf4.jpg"
                          alt=""
                        />
                      </div>
                      <h2 class="card-title">Olivia Anderson</h2>
                      <p class="designation">Public Figure</p>
                      <div class="card-body">
                        <div class="social_link">
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
                        <div class="inf-footer">
                          <div class="inl-location">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div class="inl-wishlist">
                            <a href="#">
                              <i class="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                    <div class="card">
                      <div class="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="infl5"
                          className="example"
                        />
                        <label
                          class="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div class="profile-inf avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/inf5.jpg"
                          alt=""
                        />
                      </div>
                      <h2 class="card-title">Aadesh Khurana</h2>
                      <p class="designation">Public Figure</p>
                      <div class="card-body">
                        <div class="social_link">
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
                        <div class="inf-footer">
                          <div class="inl-location">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div class="inl-wishlist">
                            <a href="#">
                              <i class="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                    <div class="card">
                      <div class="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="infl6"
                          className="example"
                        />
                        <label
                          class="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div class="profile-inf avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/inf6.jpg"
                          alt=""
                        />
                      </div>
                      <h2 class="card-title">Sophia</h2>
                      <p class="designation">Public Figure</p>
                      <div class="card-body">
                        <div class="social_link">
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
                        <div class="inf-footer">
                          <div class="inl-location">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div class="inl-wishlist">
                            <a href="#">
                              <i class="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                    <div class="card">
                      <div class="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="infl7"
                          className="example"
                        />
                        <label
                          class="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div class="profile-inf avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/inf7.jpg"
                          alt=""
                        />
                      </div>
                      <h2 class="card-title">Aadesh Khurana</h2>
                      <p class="designation">Public Figure</p>
                      <div class="card-body">
                        <div class="social_link">
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
                        <div class="inf-footer">
                          <div class="inl-location">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div class="inl-wishlist">
                            <a href="#">
                              <i class="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                    <div class="card">
                      <div class="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="infl8"
                          className="example"
                        />
                        <label
                          class="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div class="profile-inf avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/inf8.jpg"
                          alt=""
                        />
                      </div>
                      <h2 class="card-title">Sophia</h2>
                      <p class="designation">Public Figure</p>
                      <div class="card-body">
                        <div class="social_link">
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
                        <div class="inf-footer">
                          <div class="inl-location">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div class="inl-wishlist">
                            <a href="#">
                              <i class="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                    <div class="card">
                      <div class="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="infl9"
                          className="example"
                        />
                        <label
                          class="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div class="profile-inf avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/inf9.jpg"
                          alt=""
                        />
                      </div>
                      <h2 class="card-title">William Adell</h2>
                      <p class="designation">Public Figure</p>
                      <div class="card-body">
                        <div class="social_link">
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
                        <div class="inf-footer">
                          <div class="inl-location">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div class="inl-wishlist">
                            <a href="#">
                              <i class="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                    <div class="card">
                      <div class="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="infl10"
                          className="example"
                        />
                        <label
                          class="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div class="profile-inf avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/inf1.jpg"
                          alt=""
                        />
                      </div>
                      <h2 class="card-title">Aadesh Khurana</h2>
                      <p class="designation">Public Figure</p>
                      <div class="card-body">
                        <div class="social_link">
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
                        <div class="inf-footer">
                          <div class="inl-location">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div class="inl-wishlist active">
                            <a href="#">
                              <i class="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="card">
                      <div class="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="infl11"
                          className="example"
                        />
                        <label
                          class="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div class="profile-inf avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/inf2.jpg"
                          alt=""
                        />
                      </div>
                      <h2 class="card-title">Sophia</h2>
                      <p class="designation">Public Figure</p>
                      <div class="card-body">
                        <div class="social_link">
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
                        <div class="inf-footer">
                          <div class="inl-location">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div class="inl-wishlist">
                            <a href="#">
                              <i class="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-3 col-sm-6">
                    <div class="card">
                      <div class="custom-control custom-checkbox infl">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="infl12"
                          className="example"
                        />
                        <label
                          class="custom-control-label"
                          for="Petrol"
                        ></label>
                      </div>
                      <div class="profile-inf avatar-lg">
                        <img
                          class="avatar-img rounded-circle"
                          src="assets/images/inf3.jpg"
                          alt=""
                        />
                      </div>
                      <h2 class="card-title">William Adell</h2>
                      <p class="designation">Public Figure</p>
                      <div class="card-body">
                        <div class="social_link">
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
                        <div class="inf-footer">
                          <div class="inl-location">
                            <i class="fa-sharp fa-solid fa-location-dot"></i>{" "}
                            Delhi, India
                          </div>
                          <div class="inl-wishlist">
                            <a href="#">
                              <i class="las la-heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="copyright_text">
                © 2023, Sociopuff. All Rights Reserved
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Influencerinfluencers;
