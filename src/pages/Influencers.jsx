import { Link } from "react-router-dom";
import Header from "../component/Header";
import React, { useState } from "react";
import axios from "axios";
import dummyDB from "../DummyDB";
const Influencers = () => {
  const [wish, setWish] = useState('')

  const handleWishlist = () => {
    setWish(wish => !wish)
  }


  const getData = async () => {
    try {
      const res = axios.get("http://localhost:9090/campaigns")

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

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
                <li className="nav-item active">
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
                <li className="nav-item">
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
        <div className="main-panel">
          <div className="content">
            <div className="infl-main">
              <div className="filter_sect">
                <div className="sidebar-wrapper">
                  <h3 className="card-title mb-3 plr15">
                    <i className="fa-sharp fa-solid fa-filter"></i> Filter
                  </h3>
                  <div className="sect-dvr">
                    <h4 className="subhding">By Follower</h4>
                    <select className="custom-select">
                      <option selected>- Selecte -</option>
                      <option>YouTube</option>
                      <option>Instagram</option>
                      <option>Facebook</option>
                    </select>
                  </div>
                  <div className="sect-dvr">
                    <h4 className="subhding">Price Range</h4>
                    <div className="slider-wrapper slider-ghost mt20">
                      <label for="customRange1" className="form-label">
                        $200
                      </label>
                      <input
                        className="input-range"
                        data-slider-id="ex12cSlider"
                        type="text"
                        data-slider-step="10"
                        data-slider-tooltip="always"
                        data-slider-value="30, 70"
                        data-slider-min="1"
                        data-slider-max="100"
                        data-slider-range="true"
                        data-slider-tooltip_split="true"
                      />
                    </div>
                  </div>
                  <div className="sect-dvr">
                    <h4 className="subhding">Gener</h4>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Gener"
                        name="example"
                      />
                      <label className="custom-control-label" for="Petrol">
                        Fashion
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Gener1"
                        name="example"
                      />
                      <label className="custom-control-label" for="Diesel">
                        Health
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Gener2"
                        name="example"
                      />
                      <label className="custom-control-label" for="Gas">
                        Marketing
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox m-0">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Gener3"
                        name="example"
                      />
                      <label className="custom-control-label" for="Electric">
                        Food
                      </label>
                    </div>
                  </div>
                  <div className="sect-dvr">
                    <h4 className="subhding">Channel</h4>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Youtube"
                        name="example"
                      />
                      <label className="custom-control-label" for="Petrol">
                        Youtube
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Instagram"
                        name="example"
                      />
                      <label className="custom-control-label" for="Diesel">
                        Instagram
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Facebook"
                        name="example"
                      />
                      <label className="custom-control-label" for="Gas">
                        Facebook
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox m-0">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Telegram"
                        name="example"
                      />
                      <label className="custom-control-label" for="Electric">
                        Telegram
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inf-sect">
                <div className="page-header mt10 pl-0">
                  <h1 className="page-title">Influencers</h1>
                </div>
                <div className="page-inner p-0 influencers">
                  <div className="content-wrapper">
                    <div className="form-row">
                      <div className="col-md-4 col-sm-6">
                        <div className="card">
                          <a href="brand-influencer-detail.html">
                            <div className="profile-inf avatar-lg">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/inf1.jpg"
                                alt=""
                              />
                            </div>
                            <h2 className="card-title">Aadesh Khurana</h2>
                            <p className="designation">Public Figure</p>
                          </a>
                          <div className="card-body">
                            <div className="social_link">
                              <a href="#">
                                <img
                                  src="assets/images/inf-instagram.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/images/inf-youtube.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/images/inf-facebook.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/images/inf-twitter.svg"
                                  alt=""
                                />
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
                      <div className="col-md-4 col-sm-6">
                        <div className="card">
                          <a href="brand-influencer-detail.html">
                            <div className="profile-inf avatar-lg">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/inf2.jpg"
                                alt=""
                              />
                            </div>
                            <h2 className="card-title">Sophia</h2>
                            <p className="designation">Public Figure</p>
                          </a>
                          <div className="card-body">
                            <div className="social_link">
                              <a href="#">
                                <img
                                  src="assets/images/inf-instagram.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/images/inf-youtube.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/images/inf-facebook.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/images/inf-twitter.svg"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div className="inf-footer">
                              <div className="inl-location">
                                <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                                Delhi, India
                              </div>
                              <div className="inl-wishlist">
                                <a href="#">
                                  <i className="las la-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-6">
                        <div className="card">
                          <a href="brand-influencer-detail.html">
                            <div className="profile-inf avatar-lg">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/inf3.jpg"
                                alt=""
                              />
                            </div>
                            <h2 className="card-title">William Adell</h2>
                            <p className="designation">Public Figure</p>
                          </a>
                          <div className="card-body">
                            <div className="social_link">
                              <a href="#">
                                <img
                                  src="assets/images/inf-instagram.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/images/inf-youtube.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/images/inf-facebook.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/images/inf-twitter.svg"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div className="inf-footer">
                              <div className="inl-location">
                                <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                                Delhi, India
                              </div>
                              <div className={` inl-wishlist ${wish ? '' : "active"}`} onClick={handleWishlist}>
                                <a href="#">
                                  <i className="las la-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-6">
                        <div className="card">
                          <a href="brand-influencer-detail.html">
                            <div className="profile-inf avatar-lg">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/inf4.jpg"
                                alt=""
                              />
                            </div>
                            <h2 className="card-title">Olivia Anderson</h2>
                            <p className="designation">Public Figure</p>
                          </a>
                          <div className="card-body">
                            <div className="social_link">
                              <a href="#">
                                <img
                                  src="assets/images/inf-instagram.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/images/inf-youtube.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/images/inf-facebook.svg"
                                  alt=""
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/images/inf-twitter.svg"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div className="inf-footer">
                              <div className="inl-location">
                                <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                                Delhi, India
                              </div>
                              <div className="inl-wishlist">
                                <a href="#">
                                  <i className="las la-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                      {
                        dummyDB.map(data => (
                          <div className="col-md-4 col-sm-6" key={data.id}>
                            <div className="card">
                              <a href="brand-influencer-detail.html">
                                <div className="profile-inf avatar-lg">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src={data.img}
                                    alt=""
                                  />
                                </div>
                                <h2 className="card-title">{data.name}</h2>
                                <p className="designation">{data.fig}</p>
                              </a>
                              <div className="card-body">
                                <div className="social_link">
                                  <a href={data.insta}>
                                    <img
                                      src="assets/images/inf-instagram.svg"
                                      alt=""
                                    />
                                  </a>
                                  <a href={data.insta}>
                                    <img
                                      src="assets/images/inf-youtube.svg"
                                      alt=""
                                    />
                                  </a>
                                  <a href={data.insta}>
                                    <img
                                      src="assets/images/inf-facebook.svg"
                                      alt=""
                                    />
                                  </a>

                                </div>

                                <div className="inf-footer">
                                  <div className="inl-location">
                                    <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                                    {data.location}
                                  </div>
                                  <div className={` inl-wishlist ${wish ? '' : "active"}`} onClick={handleWishlist}>
                                    <a href={data.WishList}>
                                      <i className="las la-heart"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  <div className="copyright_text">
                    © 2023, Sociopuff. All Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Influencers;
