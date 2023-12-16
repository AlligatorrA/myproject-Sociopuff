import { Link, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import React, { useState } from "react";
import axios from "axios";
import img from "../banner-1.png";

const Createcampaign = () => {
  const token = JSON.parse(localStorage.getItem("token"))

  const [selectedCampaignTypes, setSelectedCampaignTypes] = useState([
    "Affiliated",
  ]);
  const [selectedGenres, setSelectedGenres] = useState(["Health & Fitness"]);
  const [file, setFile] = useState('')
  // const [formData, setFormData] = useState({
  const campaign = {
    campaignName: "Sample Campaign",
    brandName: "Sample Brand",
    brandDetails: "Sample Brand Details",
    productDetails: "Sample Product Details",
    contentCreationGuideline: "Sample Creation Guideline",
    contentDescription: "Sample Content Description",
    contentTags: ["Tag1", "Tag2"],
    country: "United States",
    budgetUpTo: 10000,
    minimumCreatorSize: 10,
    startDate: "2023-10-15",
    endDate: "2023-10-31",
    gender: "Male",
    age: "25-40",
    location: "New York",
    audienceDetails: "Sample Audience Details",
    campaignTypes: ["Type1", "Type2"],
    genres: ["Genre1", "Genre2"],
    status: true,
    socialMedia: "Facebook",
    brandId: 456
  }
    ;

  const handleCampaignTypeClick = campaignType => {
    setSelectedCampaignTypes(prevSelected => {
      if (prevSelected.includes(campaignType)) {
        return prevSelected.filter(type => type !== campaignType);
      } else {
        return [...prevSelected, campaignType];
      }
    });
  };

  const handleGenreClick = genre => {
    setSelectedGenres(prevSelected => {
      if (prevSelected.includes(genre)) {
        return prevSelected.filter(selectedGenre => selectedGenre !== genre);
      } else {
        return [...prevSelected, genre];
      }
    });
  };

  // ******************************************************
  // Create an axios instance with some options


  const handleCreateCampaign = async (e) => {
    const instance = axios.create({
      baseURL: 'http://localhost:9090/campaign',
      headers: {
        Authorization: ` Bearer ${token.idToken}`,
        'Content-Type': 'multipart/form-data'
      }
    });

    // Add an interceptor for response errors
    instance.interceptors.response.use(
      response => {
        // Send the response data
        return response.data;
      },
      error => {
        // Check if the error is a 401
        if (error.response.status === 401) {
          // Redirect to login or show an alert message
          return Promise.reject(error);
        }
        // Otherwise, reject the error with the original response data
        return Promise.reject(error.response.data);
      }
    );

    // Make a post request with the instance
    instance.post('http://localhost:9090/campaign', {
      file: file.name, campaign
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

  }
  // **********************************************************************
  // const handleCreateCampaign = async (e) => {

  //   console.log(token.idToken, "tokennnnn");

  //   console.log(file.name);


  //   try {
  //     await axios.post('http://localhost:9090/campaign',

  //       {
  //         campaign: campaign,
  //         file: file.name
  //       },

  //       {
  //         headers: {
  //           Authorization: ` Bearer ${token.idToken}`,
  //           'Content-Type': 'multipart/form-data'
  //         }
  //       }).then((response) => {
  //         console.log(response);
  //       })

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
              <a className="btn-sm btn-light mr-2" href="your-campaigns.html">
                <i className="fa fa-arrow-left-long" /> Back
              </a>
              <h1 className="page-title">Create Campaign</h1>
            </div>
            <div className="page-inner">
              <div className="content-wrapper">
                <div className="card">
                  <div className="card-body">
                    <div className="form-row">
                      <div className="form-group col-sm-6">
                        <label htmlFor="Region">Campaign/Product Name</label>
                        <input
                          type="text"
                          name="product_name"
                          id="product_Name"
                          className="form-control"
                          placeholder="SocioPuff"
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label htmlFor="Region">Brand Name</label>
                        <input
                          type="text"
                          name="brand_name"
                          id="brand_name"
                          className="form-control"
                          placeholder="Candddy"
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label htmlFor="Region">Brand Details</label>
                        <textarea
                          type="text"
                          name="brand_details"
                          id="brand_details"
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label htmlFor="Region">Campaign/Product Details</label>
                        <textarea
                          type="text"
                          name="product_details"
                          id="product_details"
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label htmlFor="Region">
                          Content Creation Guideline
                        </label>
                        <textarea
                          type="text"
                          name="creation_guideline"
                          id="creation_guideline"
                          className="form-control"
                          defaultValue={""}
                        />
                        <div className="info-lbl">
                          Token for Coupon Code is: code@
                          <span className="pull-right">
                            Token for Tracking Like Information is: url@
                          </span>
                        </div>
                      </div>
                      <div className="form-group col-sm-6">
                        <label htmlFor="Region">Content Description</label>
                        <textarea
                          type="text"
                          name="content_description"
                          id="content_description"
                          className="form-control"
                          defaultValue={""}
                        />
                        <div className="info-lbl">
                          Token for Coupon Code is: code@
                          <span className="pull-right">
                            Token for Tracking Like Information is: url@
                          </span>
                        </div>
                      </div>
                      <div className="form-group col-sm-12">
                        <label htmlFor="Region">Content Tags</label>
                        <textarea
                          type="text"
                          name="content_tags"
                          id="content_tags"
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="tpname">Product Image/video</label>
                        <div className="custom-file">
                          <input
                            type="file"
                            name="product_image"
                            id="product_image"
                            className="custom-file-input"
                            onChange={(e) => setFile(e.target.files[0])}
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="Pan-cartd"
                          />
                        </div>
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="tpname">
                          Upload PDF/Excel (Optional)
                        </label>
                        <div className="custom-file">
                          <input
                            type="file"
                            name="upload_excel"
                            id="upload_excel"
                            className="custom-file-input"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="Pan-cartd"
                          />
                        </div>
                      </div>
                      <div className="form-group col-sm-4">
                        <label htmlFor="Region">Country</label>
                        <select className="custom-select">
                          <option value=''>--Select--</option>
                        </select>
                      </div>
                      <div className="form-group col-sm-3">
                        <label htmlFor="Region">Budget Upto</label>
                        <input
                          type="text"
                          name="budget_upto"
                          id="budget_upto"
                          className="form-control"
                          placeholder='Enter Budget'
                        />
                      </div>
                      <div className="form-group col-sm-3">
                        <label htmlFor="Region">Minimum Creator size</label>
                        <input
                          type="text"
                          name="minimum_creator"
                          id="minimum_creator"
                          className="form-control"
                          placeholder='size'
                        />
                      </div>
                      <div className="form-group col-sm-3">
                        <label htmlFor="Region">Start Date</label>
                        <div className="datepic">
                          <input
                            type="text"
                            id="datepicker"
                            name="start_date"
                            className="form-control"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>
                      <div className="form-group col-sm-3">
                        <label htmlFor="Region">End Date</label>
                        <div className="datepic">
                          <input
                            type="text"
                            id="datepicker1"
                            name="end_date"
                            className="form-control"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>
                      <div className="form-group col-sm-12 mt20">
                        <h2 className="card-title">Targeting</h2>
                      </div>
                      <div className="form-group col-sm-4">
                        <label htmlFor="Region">Gender</label>
                        <select
                          id="gender"
                          name="gender"
                          className="custom-select"
                        >
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                      <div className="form-group col-sm-4">
                        <label htmlFor="Region">Age Group</label>
                        <select
                          id="age_group"
                          name="age_group"
                          className="custom-select"

                        >
                          <option >--Select--</option>
                        </select>
                      </div>
                      <div className="form-group col-sm-4">
                        <label htmlFor="Region">Location</label>
                        <select
                          name="location"
                          id="location"
                          className="custom-select"

                        >
                          <option >--Select--</option>
                        </select>
                      </div>
                      <div className="form-group col-sm-12">
                        <label htmlFor="Region">Audience Detail</label>
                        <textarea
                          type="text"
                          name="audience_detail"
                          id="audience_detail"
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>

                      <div className="form-group col-sm-12 mt20">
                        <h2 className="card-title">Campaign Type</h2>
                      </div>
                      <div className="form-group col-sm-12">
                        <Link
                          className={`slct_link ${selectedCampaignTypes.includes("Barter")
                            ? "selected"
                            : ""
                            }`}
                          href={null}
                          onClick={() => handleCampaignTypeClick("Barter")}
                        >
                          Barter
                        </Link>
                        <Link
                          className={`slct_link ${selectedCampaignTypes.includes("Affiliated")
                            ? "selected"
                            : ""
                            }`}
                          href={null}
                          onClick={() => handleCampaignTypeClick("Affiliated")}
                        >
                          Affiliated
                        </Link>
                        <a
                          className={`slct_link ${selectedCampaignTypes.includes("Paid")
                            ? "selected"
                            : ""
                            }`}
                          href={null}
                          onClick={() => handleCampaignTypeClick("Paid")}
                        >
                          Paid
                        </a>
                      </div>
                      <div className="form-group col-sm-12 mt20">
                        <h2 className="card-title">Genre</h2>
                      </div>
                      <div className="form-group col-sm-12">
                        {[
                          "Fashion",
                          "Health & Fitness",
                          "Beauty",
                          "Mom-baby",
                          "Travel",
                          "Food & Drink",
                          "Model",
                          "Lifestyle",
                          "Automobile Car Bikes",
                          "Technology",
                          "Entertainment",
                          "Electronics Gadgets",
                          "Home Decor",
                        ].map(genre => (
                          <a
                            key={genre}
                            className={`slct_link ${selectedGenres.includes(genre) ? "selected" : ""
                              }`}
                            href={null}
                            onClick={() => handleGenreClick(genre)}
                          >
                            {genre}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="mb-2">
                      <button
                        className="btn2 btn"
                        onClick={handleCreateCampaign}
                      >
                        Create Campaign
                      </button>
                      <img src={img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyright_text">
                © 2023, Sociopuff. All Rights Reserved
              </div>
            </div >
          </div >
        </div >
      </div >
    </>
  );
};

export default Createcampaign;
