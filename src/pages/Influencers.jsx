import { Link } from "react-router-dom";
import Header from "../component/Header";
import React, { useState } from "react";
import { useType } from "../GetDataFunctions/GetInfluencers";
const Influencers = () => {
  const { typeState, typeDispatch } = useType()
  const { influencers } = typeState

  const [wish, setWish] = useState('')
  const [val, setVal] = useState('')

  const handleWishlist = () => {
    const wishList = []
    influencers &&
      influencers.data.map((items) => items.filter((item) => item.id === items.id ? wishList.push(items) : ''))

    console.log(wishList);
    setWish(wish => !wish)
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
                    <select className="custom-select" onChange={(e) => setVal(e.target.value)}>
                      <option value='youtube'>YouTube</option>
                      <option value='Instagram'>Instagram</option>
                      <option value='facebook'>Facebook</option>
                    </select>
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
                      <label className="custom-control-label" htmlFor="Petrol">
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
                      <label className="custom-control-label" htmlFor="Diesel">
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
                      <label className="custom-control-label" htmlFor="Gas">
                        Marketing
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox m-0">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Gener3"
                        name="example"
                        onChange={(e) => setVal(e.target.value)}
                      />
                      <label className="custom-control-label" htmlFor="Electric">
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
                        onChange={(e) => setVal(e.target.value)}
                      />
                      <label className="custom-control-label" htmlFor="Petrol">
                        Youtube
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Instagram"
                        name="example"
                        onChange={(e) => setVal(e.target.value)}
                      />
                      <label className="custom-control-label" htmlFor="Diesel">
                        Instagram
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Facebook"
                        name="example"
                        onChange={(e) => setVal(e.target.value)}
                      />
                      <label className="custom-control-label" htmlFor="Gas">
                        Facebook
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox m-0">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="Telegram"
                        name="example"
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                      />
                      <label className="custom-control-label" htmlFor="Electric">
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
                              <a href="/">
                                <img
                                  src="assets/images/inf-instagram.svg"
                                  alt=""
                                />
                              </a>
                              <a href="/">
                                <img
                                  src="assets/images/inf-youtube.svg"
                                  alt=""
                                />
                              </a>
                              <a href="/">
                                <img
                                  src="assets/images/inf-facebook.svg"
                                  alt=""
                                />
                              </a>
                              <a href="/">
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
                                <a href="/">
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
                              <a href="/">
                                <img
                                  src="assets/images/inf-instagram.svg"
                                  alt=""
                                />
                              </a>
                              <a href="/">
                                <img
                                  src="assets/images/inf-youtube.svg"
                                  alt=""
                                />
                              </a>
                              <a href="/">
                                <img
                                  src="assets/images/inf-facebook.svg"
                                  alt=""
                                />
                              </a>
                              <a href="/">
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
                                <a href="/wishlist">
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
                              <a href="/">
                                <img
                                  src="assets/images/inf-instagram.svg"
                                  alt=""
                                />
                              </a>
                              <a href="/">
                                <img
                                  src="assets/images/inf-youtube.svg"
                                  alt=""
                                />
                              </a>
                              <a href="/">
                                <img
                                  src="assets/images/inf-facebook.svg"
                                  alt=""
                                />
                              </a>
                              <a href="/">
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
                                <a href="/">
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
                              <a href="/">
                                <img
                                  src="assets/images/inf-instagram.svg"
                                  alt=""
                                />
                              </a>
                              <a href="/">
                                <img
                                  src="assets/images/inf-youtube.svg"
                                  alt=""
                                />
                              </a>
                              <a href="/">
                                <img
                                  src="assets/images/inf-facebook.svg"
                                  alt=""
                                />
                              </a>
                              <a href="/">
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
                                <a href="/wishlist">
                                  <i className="las la-heart"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                      {influencers &&
                        // console.log(FilteredChannel)
                        // <img src={influencers.data[0].influencerFiles[0].name} alt="" />
                        // <li>{influencers.data[0].influencerFiles[0].name} </li>
                        influencers.map(influencer => (
                          <div className="col-md-4 col-sm-6" key={influencer.id}>
                            <div className="card">
                              <a href="brand-influencer-detail.html">
                                <div className="profile-inf avatar-lg">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src={influencer.influencerFiles[0].pathUri}
                                    alt=""
                                  />
                                </div>
                                <h2 className="card-title">{influencer.influencerName}</h2>
                                <p className="designation">{influencer.email}</p>
                              </a>
                              <div className="card-body">
                                <div className="social_link">
                                  <a href={influencer.instagram}>
                                    <img
                                      src="assets/images/inf-instagram.svg"
                                      alt=""
                                    />
                                  </a>
                                  <a href={influencer.youtube}>
                                    <img
                                      src="assets/images/inf-youtube.svg"
                                      alt=""
                                    />
                                  </a>
                                  <a href={influencer.facebook}>
                                    <img
                                      src="assets/images/inf-facebook.svg"
                                      alt=""
                                    />
                                  </a>

                                </div>

                                <div className="inf-footer">
                                  <div className="inl-location">
                                    <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                                    {influencer.location}
                                  </div>
                                  <div className={` inl-wishlist ${wish ? '' : "active"}`} onClick={
                                    // handleWishlist
                                    () => typeDispatch({ type: 'ADD_TO_WISHLIST', payload: influencer.id })

                                  }>
                                    <a href={influencer.wishList}>
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
