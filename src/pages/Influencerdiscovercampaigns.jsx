import { Link } from "react-router-dom";
import React from "react";
import Influencerheader from "../component/Influencerheader";
const Influencerdiscovercampaigns = () => {
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
                  <Link to="/Influencerreportanalytics">
                    <img
                      src="assets/images/report-analytics.svg"
                      className="nav-icn"
                      alt=""
                    />
                    <p>Reports &#38; Analytics </p>
                  </Link>
                </li>
                <li className="nav-item active">
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
                <li className="nav-item">
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
        <div className="main-panel">
          <div className="content">
            <div className="page-header mt10">
              <h1 className="page-title">Our Campaigns</h1>
              <div className="expor-data ml-auto"></div>
            </div>
            <div className="page-inner">
              <div className="content-wrapper">
                <div className="dasboard-table content_FLX_mdl mt10">
                  <table
                    id="example3"
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
                            Campaigns
                          </a>
                          <ul className="dropdown-menu animated fadeIn">
                            <div className="dropdown-user-scroll scrollbar-outer">
                              <li>
                                <a className="dropdown-item" href="#">
                                  Active
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                  Paid
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                  Batter
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                  Affiliated
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
                          <a
                            href="#"
                            data-target="#Apply-Campaigns"
                            data-toggle="modal"
                          >
                            <img src="assets/images/apply.svg" alt="" />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/view.svg"
                              className="w-14"
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/infl-product1.jpg" alt="" />
                        </td>
                        <td>Palmist</td>
                        <td>Mamaearth</td>
                        <td>Beauty</td>
                        <td>Youtube</td>
                        <td>Paid</td>
                        <td>India</td>
                        <td>12 Mar 2023</td>
                        <td>25 May 2023</td>
                        <td className="action">
                          <a
                            href="#"
                            data-target="#Apply-Campaigns"
                            data-toggle="modal"
                          >
                            <img src="assets/images/apply.svg" alt="" />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/view.svg"
                              className="w-14"
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/infl-product2.jpg" alt="" />
                        </td>
                        <td>Nivya</td>
                        <td>Mamaearth</td>
                        <td>Beauty</td>
                        <td>Youtube</td>
                        <td>Affiliated</td>
                        <td>India</td>
                        <td>12 Mar 2023</td>
                        <td>25 May 2023</td>
                        <td className="action">
                          <a
                            href="#"
                            data-target="#Apply-Campaigns"
                            data-toggle="modal"
                          >
                            <img src="assets/images/apply.svg" alt="" />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/view.svg"
                              className="w-14"
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/infl-product3.jpg" alt="" />
                        </td>
                        <td>Pepsi</td>
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
                          <a
                            href="#"
                            data-target="#Apply-Campaigns"
                            data-toggle="modal"
                          >
                            <img src="assets/images/apply.svg" alt="" />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/view.svg"
                              className="w-14"
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/infl-product1.jpg" alt="" />
                        </td>
                        <td>Palmist</td>
                        <td>Mamaearth</td>
                        <td>Beauty</td>
                        <td>Youtube</td>
                        <td>Paid</td>
                        <td>India</td>
                        <td>12 Mar 2023</td>
                        <td>25 May 2023</td>
                        <td className="action">
                          <a
                            href="#"
                            data-target="#Apply-Campaigns"
                            data-toggle="modal"
                          >
                            <img src="assets/images/apply.svg" alt="" />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/view.svg"
                              className="w-14"
                              alt=""
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="assets/images/infl-product2.jpg" alt="" />
                        </td>
                        <td>Nivya</td>
                        <td>Mamaearth</td>
                        <td>Beauty</td>
                        <td>Youtube</td>
                        <td>Affiliated</td>
                        <td>India</td>
                        <td>12 Mar 2023</td>
                        <td>25 May 2023</td>
                        <td className="action">
                          <a
                            href="#"
                            data-target="#Apply-Campaigns"
                            data-toggle="modal"
                          >
                            <img src="assets/images/apply.svg" alt="" />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/view.svg"
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
        </div>{" "}
      </div>
    </>
  );
};

export default Influencerdiscovercampaigns;
