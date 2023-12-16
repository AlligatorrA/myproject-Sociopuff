import { Link } from "react-router-dom";
import Header from "../component/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../hooks/authProvider";

const Yourcampaigns = () => {
  const { token } = useAuth()
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9090/campaigns", {
          headers: {
            Authorization:
              `Bearer ${token.idToken}`,
          },
        });
        console.log(response);
        setCampaigns(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token.idToken]);

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
                <Link to="/createcampaign" className="btn2 btn-sm">
                  Create Campaign
                </Link>
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
                          <Link
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                            aria-expanded="false"
                          >
                            Status
                          </Link>
                          <ul className="dropdown-menu animated fadeIn">
                            <div className="dropdown-user-scroll scrollbar-outer">
                              <li>
                                <Link className="dropdown-item" href="#">
                                  Active
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="#">
                                  Pending
                                </Link>
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
                      {campaigns.map(campaign => (
                        <tr key={campaign.id}>
                          <td>
                            {campaign.campaignFiles.map((file, index) => (
                              <img
                                key={index}
                                src={file.pathUri}
                                alt={`File ${index + 1}`}
                                style={{ width: "100px", height: "100px" }}
                              />
                            ))}
                          </td>

                          <td>{campaign.campaignName}</td>
                          <td>{campaign.brandName}</td>
                          <td>{campaign.genres.join(", ")}</td>
                          <td>{campaign.socialMedia}</td>
                          <td>
                            <span
                              className={
                                campaign.status
                                  ? "text-success"
                                  : "text-warning"
                              }
                            >
                              {campaign.status ? "Active" : "Pending"}
                            </span>
                          </td>
                          <td>{campaign.country}</td>
                          <td>{campaign.startDate.join("-")}</td>
                          <td>{campaign.endDate.join("-")}</td>
                          <td className="action">
                            <Link to={`/editcampaign/${campaign.id}`}>
                              <img
                                src="assets/images/edit.svg"
                                className="w-16"
                                alt="Edit"
                              />
                            </Link>
                            <Link to={`/invite-influencers/${campaign.id}`}>
                              <img
                                src="assets/images/invite.svg"
                                className="w-18"
                                alt="Invite"
                              />
                            </Link>
                            {
                              campaign.status && (
                                <Link href="#" onClick={() => campaign.id}>
                                  <img
                                    src="assets/images/pause.svg"
                                    className="w-14"
                                    alt="Pause"
                                  />
                                </Link>
                              )
                            }
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="copyright_text">
                © 2023, Sociopuff. All Rights Reserved
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

export default Yourcampaigns;