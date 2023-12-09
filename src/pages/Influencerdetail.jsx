import { Link } from "react-router-dom";
import React from "react";
import Influencerheader from "../component/Influencerheader";

const Influencerdetail = () => {
  return (
    <>
      <div className="wrapper influencers_sect">
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
                  <Link to="/influencerreportanalytics">
                    <img
                      src="assets/images/report-analytics.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Reports &#38; Analytics </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="influencer-discover-campaigns.html">
                    <img
                      src="assets/images/your-campaigns.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Discover Campaigns</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="influencer-manage-campaigns.html">
                    <img
                      src="assets/images/manage-campaigns.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Manage Campaigns</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="influencer-influencers.html">
                    <img
                      src="assets/images/influencers.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Influencers</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-panel">
          <div className="content">
            <div className="page-header mt20">
              <h1 className="page-title">Olivia Anderson</h1>
              <a href="#" className="ml-auto dt-link">
                <i className="fa-sharp fa-solid fa-share-from-square"></i> Share
              </a>
              <a href="#" className="ml-3 dt-link">
                <i className="fa-solid fa-pen-to-square"></i> Edit
              </a>
            </div>
            <div className="page-inner infl-detail">
              <div className="content-wrapper">
                <div className="inl-det-img-sect">
                  <div className="image-sm-sect">
                    <div className="image1">
                      <img src="assets/images/inf-dt-1.jpg" alt="" />
                    </div>
                    <div className="image2">
                      <img src="assets/images/inf-dt-2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="image-md-sect">
                    <img src="assets/images/inf-dt-big.jpg" alt="" />
                  </div>
                  <div className="image-sm-sect">
                    <div className="image3">
                      <img src="assets/images/inf-dt-3.jpg" alt="" />
                    </div>
                    <div className="image4">
                      <img src="assets/images/inf-dt-4.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <h2 className="page-title">
                  Student at Cambridge, public speaker, lifestyle influencer,
                  dancer
                </h2>
                <p className="mt15">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="form-row mt-5">
                  <div className="col-md-5">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-content-center">
                          <div className="profile-inf">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/prof2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="ml-3 w-71">
                            <h2 className="card-title">Olivia Anderson</h2>
                            <div className="d-flex align-content-center">
                              <div className="mr-3">
                                <p className="designation mt-2 mb-2">
                                  Public Figure
                                </p>
                                <div className="inl-wishlist active">
                                  <a href="#">
                                    <i className="las la-heart"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="ml-auto">
                                <div className="social_link mt-2">
                                  <a href="#" className="ml-0">
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
                                <div className="inl-location mt-2">
                                  <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                                  Delhi, India
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card">
                      <div className="card-body">
                        <div className="form-row">
                          <div className="col-md-6">
                            <p className="fw-600">
                              Student at Cambridge, public speaker, lifestyle
                              influencer, dancer
                            </p>
                            <div className="sort-price">$200</div>
                            <div className="small">
                              SOCIOPFF handling fee of 15% of the fee
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <select className="custom-select">
                                <option selected>Story Post</option>
                                <option>Example 1</option>
                                <option>Example 2</option>
                                <option>Example 3</option>
                              </select>
                            </div>
                            <p className="fs12 m-0">
                              1-2 story posts, either photo or video, with tags
                              and mentions. Can include swipe-up links as well.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row mt-4 align-items-center">
                  <div className="col-md-3">
                    <select className="custom-select">
                      <option selected>All Packages</option>
                      <option>Packages 1</option>
                      <option>Packages 2</option>
                      <option>Packages 3</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <i className="fa-solid fa-circle-info"></i> How does it
                    work?
                  </div>
                </div>

                <div className="form-row mt-4">
                  <div className="col-md-4">
                    <div className="card inl-prices">
                      <div className="card-body">
                        <div className="top">
                          <div className="">
                            <div className="social-title">Instagram</div>
                            <div className="price">Story Post</div>
                          </div>
                          <div className="price">$200</div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="radio1"
                              name="example"
                            />
                            <label
                              className="custom-control-label"
                              for="radio1"
                            ></label>
                          </div>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card inl-prices">
                      <div className="card-body">
                        <div className="top">
                          <div className="">
                            <div className="social-title">Instagram</div>
                            <div className="price">In-feed post</div>
                          </div>
                          <div className="price">$400</div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="radio2"
                              name="example"
                            />
                            <label
                              className="custom-control-label"
                              for="radio1"
                            ></label>
                          </div>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card inl-prices">
                      <div className="card-body">
                        <div className="top">
                          <div className="">
                            <div className="social-title">TikTok</div>
                            <div className="price">up to 15 sec video</div>
                          </div>
                          <div className="price">$500</div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="radio3"
                              name="example"
                            />
                            <label
                              className="custom-control-label"
                              for="radio1"
                            ></label>
                          </div>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card inl-prices">
                      <div className="card-body">
                        <div className="top">
                          <div className="">
                            <div className="social-title">TikTok</div>
                            <div className="price">up to 60 sec video</div>
                          </div>
                          <div className="price">$800</div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="radio4"
                              name="example"
                            />
                            <label
                              className="custom-control-label"
                              for="radio1"
                            ></label>
                          </div>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card inl-prices">
                      <div className="card-body">
                        <div className="top">
                          <div className="">
                            <div className="social-title">TikTok</div>
                            <div className="price">Cross-platform Bundle </div>
                          </div>
                          <div className="price">$1200</div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="radio5"
                              name="example"
                            />
                            <label
                              className="custom-control-label"
                              for="radio1"
                            ></label>
                          </div>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card inl-prices">
                      <div className="card-body">
                        <div className="top">
                          <div className="">
                            <div className="social-title">Instagram</div>
                            <div className="price">Cross-platform Bundle</div>
                          </div>
                          <div className="price">$1500</div>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="radio6"
                              name="example"
                            />
                            <label
                              className="custom-control-label"
                              for="radio1"
                            ></label>
                          </div>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyright_text">
                © 2023, Sociopuff. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Influencerdetail;
