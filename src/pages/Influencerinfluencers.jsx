import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Influencerheader from "../component/Influencerheader";

const Influencerinfluencers = () => {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9090/influencer/all",
          {
            headers: {
              Authorization:
                `Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InF3ZXJ0eTJAZ21haWwuY29tIiwibW9iaWxlIjoiMTIzNDU2Nzg5MCIsInByb3ZpZGVyIjoiTE9DQUwiLCJ1c2VySWQiOjMsInN1YiI6InF3ZXJ0eTJAZ21haWwuY29tIiwiaWF0IjoxNzAyNDU5MDI2LCJleHAiOjE3MDI0NjYyMjZ9.07tD4rIOOe5RNUu3wEKsVZFyTEN7PphQvLfin2VpM-o`,
            },
          }
        );

        setInfluencers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
                <li className="nav-item active">
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
              <h1 className="page-title">Influencers</h1>
            </div>
            <div className="page-inner influencers">
              <div className="content-wrapper">
                <div className="form-row">
                  {influencers.map(influencer => (
                    <div key={influencer.id} className="col-md-3 col-sm-6">
                      <div className="card">

                        <div className="profile-inf avatar-lg">
                          <img
                            className="avatar-img rounded-circle"
                            src={`assets / images / inf${influencer.id}.jpg`}
                            alt=""
                          />
                        </div>
                        <h2 className="card-title">
                          {influencer.influencerName}
                        </h2>
                        <p className="designation">Public Figure</p>

                        {/* Additional details */}
                        <div className="card-body">
                          <div className="social_link">
                            <a
                              href={influencer.instagramLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="assets/images/inf-instagram.svg"
                                alt=""
                              />
                            </a>
                            <a
                              href={influencer.youtubeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img src="assets/images/inf-youtube.svg" alt="" />
                            </a>
                            <a
                              href={influencer.facebookLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="assets/images/inf-facebook.svg"
                                alt=""
                              />
                            </a>

                          </div>
                          <div className="inf-footer">
                            <div className="inl-location">
                              <i className="fa-sharp fa-solid fa-location-dot"></i>
                              Delhi, India
                            </div>
                            <div className="inl-wishlist">
                              <a href='/'>
                                <i className="las la-heart"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  ))}
                </div>
              </div>
              <div className="copyright_text">
                © 2023, Sociopuff. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Influencerinfluencers;