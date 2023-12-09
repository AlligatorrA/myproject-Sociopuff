import { Link } from "react-router-dom";
import React from "react";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar sidebar-style-2">
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            <ul className="nav nav-primary">
              <li className="nav-item bdr_top1 active">
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
      </div>{" "}
    </>
  );
};

export default Sidebar;
