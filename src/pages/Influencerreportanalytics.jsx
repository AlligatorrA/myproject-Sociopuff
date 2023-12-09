import React from "react";
import Influencerheader from "../component/Influencerheader";
import { Link } from "react-router-dom";
const Influencerreportanalytics = () => {
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
                <li className="nav-item active">
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
        <div class="main-panel">
          <div class="content">
            <div class="page-header mt10">
              <h1 class="page-title">Reports & Analytics </h1>
              <div class="expor-data ml-auto">
                <label for="Region">Report Type</label>
                <select class="custom-select slreport">
                  <option selected>Select</option>
                  <option>Campaigns wise</option>
                  <option>Influencer wise </option>
                </select>
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

export default Influencerreportanalytics;
