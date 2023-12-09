import { Link } from "react-router-dom";
import React from "react";
import Influencerheader from "../component/Influencerheader";

const Dashboardinfluencer = () => {
  return (
    <>
      <div class="wrapper influencers_sect">
        <Influencerheader />{" "}
        <div className="sidebar sidebar-style-2">
          <div className="sidebar-wrapper scrollbar scrollbar-inner">
            <div className="sidebar-content">
              <ul className="nav nav-primary">
                <li className="nav-item bdr_top1 active">
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
            <div className="page-inner mt30">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-md-4 tiles">
                    <div className="tiles-main bg-tile1">
                      <div className="bubble-shadow">
                        <div className="text_pnl">
                          <p>Example 1</p>
                          <h1>1231</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 tiles">
                    <div className="tiles-main bg-tile2">
                      <div className="bubble-shadow">
                        <div className="text_pnl">
                          <p>Example 2</p>
                          <h1>1231</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 tiles">
                    <div className="tiles-main bg-tile3">
                      <div className="bubble-shadow">
                        <div className="text_pnl">
                          <p>Example 3</p>
                          <h1>1231</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-head-row">
                          <h4 className="card-title">Call Status Wise</h4>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="chart-container">
                          <canvas id="totalIncomeChart"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Analysis Call</h4>
                      </div>
                      <div className="card-body">
                        <div className="chart-container">
                          <canvas id="multipleLineChart1"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-head-row">
                          <h4 className="card-title">Latest Transactions</h4>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="d-flex pb-2">
                          <div className="avatar-sm avatar-online">
                            <span className="avatar-title clrblk rounded bg-transaction">
                              <i className="fa-sharp fa-solid fa-right-long fa-fw"></i>
                            </span>
                          </div>
                          <div className="flex-1 ml-3">
                            <h6 className="text-uppercase fw-bold mb-1">
                              Payment sent to Sakir
                            </h6>
                            <span className="text-uppercase text-muted">
                              Sep 23
                            </span>
                          </div>
                          <div className="float-right pt-1">
                            <h6 className="text-uppercase text-danger">
                              $560.00
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex pb-2">
                          <div className="avatar-sm avatar-online">
                            <span className="avatar-title clrblk rounded bg-transaction">
                              <i className="fa-sharp fa-solid fa-left-long fa-fw"></i>
                            </span>
                          </div>
                          <div className="flex-1 ml-3">
                            <h6 className="text-uppercase fw-bold mb-1">
                              Payment received from Redwhale
                            </h6>
                            <span className="text-uppercase text-muted">
                              Sep 23
                            </span>
                          </div>
                          <div className="float-right pt-1">
                            <h6 className="text-uppercase text-success">
                              $12,200.00
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex pb-2">
                          <div className="avatar-sm avatar-online">
                            <span className="avatar-title clrblk rounded bg-transaction">
                              <i className="fa-sharp fa-solid fa-right-long fa-fw"></i>
                            </span>
                          </div>
                          <div className="flex-1 ml-3">
                            <h6 className="text-uppercase fw-bold mb-1">
                              Payment sent to Sakir
                            </h6>
                            <span className="text-uppercase text-muted">
                              Sep 23
                            </span>
                          </div>
                          <div className="float-right pt-1">
                            <h6 className="text-uppercase text-danger">
                              $560.00
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex pb-2">
                          <div className="avatar-sm avatar-online">
                            <span className="avatar-title clrblk rounded bg-transaction">
                              <i className="fa-sharp fa-solid fa-right-long fa-fw"></i>
                            </span>
                          </div>
                          <div className="flex-1 ml-3">
                            <h6 className="text-uppercase fw-bold mb-1">
                              Payment sent to Sakir
                            </h6>
                            <span className="text-uppercase text-muted">
                              Sep 23
                            </span>
                          </div>
                          <div className="float-right pt-1">
                            <h6 className="text-uppercase text-danger">
                              $560.00
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex pb-2">
                          <div className="avatar-sm avatar-online">
                            <span className="avatar-title clrblk rounded bg-transaction">
                              <i className="fa-sharp fa-solid fa-right-long fa-fw"></i>
                            </span>
                          </div>
                          <div className="flex-1 ml-3">
                            <h6 className="text-uppercase fw-bold mb-1">
                              Payment sent to Sakir
                            </h6>
                            <span className="text-uppercase text-muted">
                              Sep 23
                            </span>
                          </div>
                          <div className="float-right pt-1">
                            <h6 className="text-uppercase text-danger">
                              $560.00
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Upcoming Transactions</h4>
                      </div>
                      <div className="card-body">
                        <div className="d-flex pb-2">
                          <div className="avatar-sm avatar-online">
                            <span className="avatar-title rounded bg-info">
                              <i className="fa-sharp fa-solid fa-right-long fa-fw"></i>
                            </span>
                          </div>
                          <div className="flex-1 ml-3">
                            <h6 className="text-uppercase fw-bold mb-1">
                              Payment sent to Sakir
                            </h6>
                            <span className="text-uppercase text-muted">
                              Sep 23
                            </span>
                          </div>
                          <div className="float-right pt-1">
                            <h6 className="text-uppercase text-danger">
                              $560.00
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex pb-2">
                          <div className="avatar-sm avatar-online">
                            <span className="avatar-title rounded bg-secondary">
                              <i className="fa-sharp fa-solid fa-left-long fa-fw"></i>
                            </span>
                          </div>
                          <div className="flex-1 ml-3">
                            <h6 className="text-uppercase fw-bold mb-1">
                              Payment received from Redwhale
                            </h6>
                            <span className="text-uppercase text-muted">
                              Sep 23
                            </span>
                          </div>
                          <div className="float-right pt-1">
                            <h6 className="text-uppercase text-success">
                              $12,200.00
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex pb-2">
                          <div className="avatar-sm avatar-online">
                            <span className="avatar-title rounded bg-danger">
                              <i className="fa-sharp fa-solid fa-right-long fa-fw"></i>
                            </span>
                          </div>
                          <div className="flex-1 ml-3">
                            <h6 className="text-uppercase fw-bold mb-1">
                              Payment sent to Sakir
                            </h6>
                            <span className="text-uppercase text-muted">
                              Sep 23
                            </span>
                          </div>
                          <div className="float-right pt-1">
                            <h6 className="text-uppercase text-danger">
                              $560.00
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex pb-2">
                          <div className="avatar-sm avatar-online">
                            <span className="avatar-title rounded bg-info">
                              <i className="fa-sharp fa-solid fa-right-long fa-fw"></i>
                            </span>
                          </div>
                          <div className="flex-1 ml-3">
                            <h6 className="text-uppercase fw-bold mb-1">
                              Payment sent to Sakir
                            </h6>
                            <span className="text-uppercase text-muted">
                              Sep 23
                            </span>
                          </div>
                          <div className="float-right pt-1">
                            <h6 className="text-uppercase text-danger">
                              $560.00
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex pb-2">
                          <div className="avatar-sm avatar-online">
                            <span className="avatar-title rounded bg-secondary">
                              <i className="fa-sharp fa-solid fa-right-long fa-fw"></i>
                            </span>
                          </div>
                          <div className="flex-1 ml-3">
                            <h6 className="text-uppercase fw-bold mb-1">
                              Payment sent to Sakir
                            </h6>
                            <span className="text-uppercase text-muted">
                              Sep 23
                            </span>
                          </div>
                          <div className="float-right pt-1">
                            <h6 className="text-uppercase text-danger">
                              $560.00
                            </h6>
                          </div>
                        </div>
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

export default Dashboardinfluencer;
