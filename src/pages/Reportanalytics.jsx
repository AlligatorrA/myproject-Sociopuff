import { Link } from "react-router-dom";
import Header from "../component/Header";
import React from "react";
const Reportanalytics = () => {
  return (
    <>
      <div class="wrapper">
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
                <li className="nav-item active">
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
        <div class="main-panel">
          <div class="content">
            <div class="page-header mt10">
              <h1 class="page-title">Reports & Analytics </h1>
              <div class="dropdown show ml-auto">
                <a
                  class="text-reset dropdown-toggle"
                  href="/"
                  role="button"
                  id="shorBy"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="fw-semibold fs-13">Report Type</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="shorBy">
                  <a
                    class="dropdown-item"
                    href="brand-campaigns-reporting.html"
                  >
                    Campaigns wise
                  </a>
                  <a
                    class="dropdown-item"
                    href="/"
                    data-target="#Campaigns-1"
                    data-toggle="modal"
                  >
                    Campaigns wise
                  </a>
                </div>
              </div>
            </div>
            <div class="page-inner">
              <div class="content-wrapper">
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-header">
                        <div class="card-head-row">
                          <h4 class="card-title">Audience & Engagements</h4>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="chart-container">
                          <canvas id="totalIncomeChart"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-header">
                        <h4 class="card-title">No. of Reach</h4>
                      </div>
                      <div class="card-body">
                        <div class="chart-container">
                          <canvas id="multipleLineChart1"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-header">
                        <div class="card-head-row">
                          <h4 class="card-title">Effective followers Rate</h4>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="chart-container">
                          <canvas
                            id="pieChart"
                            style={{ width: "50%", height: "50%" }}
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="card">
                      <div class="card-header">
                        <h4 class="card-title">Trends</h4>
                      </div>
                      <div class="card-body">
                        <div class="chart-container">
                          <canvas
                            id="doughnutChart"
                            style={{ width: "50%", height: "50%" }}
                          ></canvas>
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

export default Reportanalytics;
