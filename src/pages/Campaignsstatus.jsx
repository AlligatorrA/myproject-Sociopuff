import { Link } from "react-router-dom";
import Header from "../component/Header";
import React from "react";

const Campaignsstatus = () => {
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
                <li className="nav-item active">
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
              <h1 className="page-title">Campaigns Status</h1>
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
                        <th>Campaigns Name</th>
                        <th>Influencers Name</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Vitamin C Face Durum Apr</td>
                        <td>Pallavi Sharma</td>
                        <td>Invite</td>
                        <td>--</td>
                      </tr>

                      <tr>
                        <td>Vitamin C Face Durum Apr</td>
                        <td>Pallavi Sharma</td>
                        <td>Accepted</td>
                        <td>
                          <a
                            href="#"
                            type="submit"
                            data-target="#Campaigns-Status-Payment"
                            data-toggle="modal"
                          >
                            Payment
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>Vitamin C Face Durum Apr</td>
                        <td>Pallavi Sharma</td>
                        <td>Payment Done</td>
                        <td>
                          <a href="send-campaign.html">Send Campaign</a>
                        </td>
                      </tr>

                      <tr>
                        <td>Vitamin C Face Durum Apr</td>
                        <td>Pallavi Sharma</td>
                        <td>Campaign Sent</td>
                        <td>--</td>
                      </tr>

                      <tr>
                        <td>Vitamin C Face Durum Apr</td>
                        <td>Pallavi Sharma</td>
                        <td>Video Submitted</td>
                        <td>
                          <a href="approve-modify-campaign.html">
                            Approve/Modify
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>Vitamin C Face Durum Apr</td>
                        <td>Pallavi Sharma</td>
                        <td>Completed</td>
                        <td>--</td>
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

export default Campaignsstatus;
