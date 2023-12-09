import { Link } from "react-router-dom";
import Header from "../component/Header";
import React from "react";
const Yourcampaigns = () => {
  return (
    <>
      <div classNameNameName="wrapper">
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
                <li className="nav-item active">
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
            <div className="page-header mt10">
              <h1 className="page-title">Your Campaigns</h1>
              <div className="expor-data ml-auto">
                <a href="create-campaign.html" className="btn2 btn-sm">
                  Create Campaign
                </a>
              </div>
            </div>
            <div className="page-inner">
              <div className="content-wrapper">
                <div className="dasboard-table content_FLX_mdl mt10">
                  <table
                    id="example2"
                    className="table table-striped dt-responsive nowrap"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Preview</th>
                        <th>Campaigns Name</th>
                        <th>Brand Name</th>
                        <th>Genre</th>
                        <th>Social Media</th>
                        <th width="100">
                          <a
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                            aria-expanded="false"
                          >
                            Status
                          </a>
                          <ul className="dropdown-menu animated fadeIn">
                            <div className="dropdown-user-scroll scrollbar-outer">
                              <li>
                                <a className="dropdown-item" href="#">
                                  Active
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                  Pending
                                </a>
                              </li>
                            </div>
                          </ul>
                        </th>
                        <th>Country</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src="assets/images/product1.jpg" alt="" />
                        </td>
                        <td>Vitamin C Face Durum Apr 1</td>
                        <td>Mamaearth</td>
                        <td>Beauty</td>
                        <td>Youtube</td>
                        <td>
                          <span className="text-success">Active</span>
                        </td>
                        <td>India</td>
                        <td>12 Mar 2023</td>
                        <td>25 May 2023</td>
                        <td className="action">
                          <a href="#">
                            <img
                              src="assets/images/edit.svg"
                              className="w-16"
                              alt=""
                            />
                          </a>
                          <a href="your-campaigns-invite-influencers.html">
                            <img
                              src="assets/images/invite.svg"
                              className="w-18"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/pause.svg"
                              className="w-14"
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/product2.jpg" alt="" />
                        </td>
                        <td>Vitamin C Face Durum Apr</td>
                        <td>Mamaearth</td>
                        <td>Beauty</td>
                        <td>Youtube</td>
                        <td>
                          <span className="text-warning">Active</span>
                        </td>
                        <td>India</td>
                        <td>12 Mar 2023</td>
                        <td>25 May 2023</td>
                        <td className="action">
                          <a href="#">
                            <img
                              src="assets/images/edit.svg"
                              className="w-16"
                              alt=""
                            />
                          </a>
                          <a href="your-campaigns-invite-influencers.html">
                            <img
                              src="assets/images/invite.svg"
                              className="w-18"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/pause.svg"
                              className="w-14"
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/product3.jpg" alt="" />
                        </td>
                        <td>Vitamin C Face Durum Apr</td>
                        <td>Mamaearth</td>
                        <td>Beauty</td>
                        <td>Youtube</td>
                        <td>
                          <span className="text-success">Active</span>
                        </td>
                        <td>India</td>
                        <td>12 Mar 2023</td>
                        <td>25 May 2023</td>
                        <td className="action">
                          <a href="#">
                            <img
                              src="assets/images/edit.svg"
                              className="w-16"
                              alt=""
                            />
                          </a>
                          <a href="your-campaigns-invite-influencers.html">
                            <img
                              src="assets/images/invite.svg"
                              className="w-18"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/pause.svg"
                              className="w-14"
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/product1.jpg" alt="" />
                        </td>
                        <td>Vitamin C Face Durum Apr</td>
                        <td>Mamaearth</td>
                        <td>Beauty</td>
                        <td>Youtube</td>
                        <td>
                          <span className="text-warning">Pending</span>
                        </td>
                        <td>India</td>
                        <td>12 Mar 2023</td>
                        <td>25 May 2023</td>
                        <td className="action">
                          <a href="#">
                            <img
                              src="assets/images/edit.svg"
                              className="w-16"
                              alt=""
                            />
                          </a>
                          <a href="your-campaigns-invite-influencers.html">
                            <img
                              src="assets/images/invite.svg"
                              className="w-18"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/pause.svg"
                              className="w-14"
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/product2.jpg" alt="" />
                        </td>
                        <td>Vitamin C Face Durum Apr</td>
                        <td>Mamaearth</td>
                        <td>Beauty</td>
                        <td>Youtube</td>
                        <td>
                          <span className="text-success">Active</span>
                        </td>
                        <td>India</td>
                        <td>12 Mar 2023</td>
                        <td>25 May 2023</td>
                        <td className="action">
                          <a href="#">
                            <img
                              src="assets/images/edit.svg"
                              className="w-16"
                              alt=""
                            />
                          </a>
                          <a href="your-campaigns-invite-influencers.html">
                            <img
                              src="assets/images/invite.svg"
                              className="w-18"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/pause.svg"
                              className="w-14"
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/product3.jpg" alt="" />
                        </td>
                        <td>Vitamin C Face Durum Apr</td>
                        <td>Mamaearth</td>
                        <td>Beauty</td>
                        <td>Youtube</td>
                        <td>
                          <span className="text-success">Active</span>
                        </td>
                        <td>India</td>
                        <td>12 Mar 2023</td>
                        <td>25 May 2023</td>
                        <td className="action">
                          <a href="#">
                            <img
                              src="assets/images/edit.svg"
                              className="w-16"
                              alt=""
                            />
                          </a>
                          <a href="your-campaigns-invite-influencers.html">
                            <img
                              src="assets/images/invite.svg"
                              className="w-18"
                              alt=""
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/pause.svg"
                              className="w-14"
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default Yourcampaigns;
