import React from "react";
import { Link } from "react-router-dom";
import Influencerheader from "../component/Influencerheader";
const Influencermanagecampaigns = () => {
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
                <li className="nav-item active">
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
            <div className="page-header mt10 mb-2">
              <h1 className="page-title">Manage Campaigns</h1>
            </div>
            <div className="page-inner">
              <div className="content-wrapper">
                <div className="card form-group">
                  <div className="card-body">
                    <h2 className="card-title">
                      Please upload your campaign { } 1{" "}
                    </h2>
                    <div className="user-form mt-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Paste an image or video URL"
                        />
                      </div>
                    </div>
                    <a
                      className="inflcrbtn btn"
                      href="#"
                      data-target="#Video-Uploaded"
                      data-toggle="modal"
                      type="submit"
                    >
                      Save
                    </a>
                  </div>
                </div>

                <div className="card form-group">
                  <div className="card-body">
                    <h2 className="card-title">
                      Please upload your campaign { } 2{" "}
                    </h2>
                    <div className="user-form mt-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Paste an image or video URL"
                        />
                      </div>
                    </div>
                    <a
                      className="inflcrbtn btn"
                      href="#"
                      data-target="#Video-Uploaded"
                      data-toggle="modal"
                      type="submit"
                    >
                      Save
                    </a>
                  </div>
                </div>

                <div className="card form-group">
                  <div className="card-body">
                    <h2 className="card-title">
                      Please upload your campaign { } 3{" "}
                    </h2>
                    <div className="user-form mt-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Paste an image or video URL"
                        />
                      </div>
                    </div>
                    <a
                      className="inflcrbtn btn"
                      href="#"
                      data-target="#Video-Uploaded"
                      data-toggle="modal"
                      type="submit"
                    >
                      Save
                    </a>
                  </div>
                </div>

                <div className="card form-group">
                  <div className="card-body">
                    <h2 className="card-title">
                      Please upload your campaign { } 4{" "}
                    </h2>
                    <div className="user-form mt-3">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Paste an image or video URL"
                        />
                      </div>
                    </div>
                    <a
                      className="inflcrbtn btn"
                      href="#"
                      data-target="#Video-Uploaded"
                      data-toggle="modal"
                      type="submit"
                    >
                      Save
                    </a>
                  </div>
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

export default Influencermanagecampaigns;
