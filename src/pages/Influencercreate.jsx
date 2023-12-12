import { Link } from "react-router-dom";
import Influencerheader from "../component/Influencerheader";
import React, { useState } from "react";
const Influencercreate = () => {
  const categories = [
    "Lifestyle",
    "Fashion",
    "Beauty",
    "Travel",
    "Health Fitness",
    "Food Drink",
    "Model",
    "Comedy Entertainment",
    "Art Photography",
    "Music Dance",
    "Entr Business",
    "Family Children",
    "Animals Pets",
    "Athlete Sports",
    "Adventure Outdoors",
    "Education",
    "Celebritypf",
    "Gaming",
    "Actor",
    "Technology",
    "LGBTQ2",
    "Healthcare",
    "Vegan",
    "Cannabis",
    "Skilled Trades",
    "Automotive",
  ];

  const campaignTypes = ["Barter", "Affiliated", "Paid"];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCampaignTypes, setSelectedCampaignTypes] = useState([]);

  const handleCategoryClick = category => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(cat => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
  };

  const handleCampaignTypeClick = campaignType => {
    const updatedCampaignTypes = selectedCampaignTypes.includes(campaignType)
      ? selectedCampaignTypes.filter(type => type !== campaignType)
      : [...selectedCampaignTypes, campaignType];

    setSelectedCampaignTypes(updatedCampaignTypes);
  };

  const [imagePreviews, setImagePreviews] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
  });

  const handleImageChange = (event, imageKey) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews(prevPreviews => ({
          ...prevPreviews,
          [imageKey]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const [packages, setPackages] = useState([
    {
      platform: "Select Platform",
      packageOffering: "--Select--",
      price: "",
      describeYourself: "",
    },
  ]);

  const handlePackageChange = (index, field, value) => {
    const updatedPackages = [...packages];
    updatedPackages[index][field] = value;
    setPackages(updatedPackages);
  };

  const addPackage = () => {
    setPackages([
      ...packages,
      {
        platform: "Select Platform",
        packageOffering: "--Select--",
        price: "",
        describeYourself: "",
      },
    ]);
  };

  const removePackage = index => {
    const updatedPackages = [...packages];
    updatedPackages.splice(index, 1);
    setPackages(updatedPackages);
  };
  return (
    <>
      <div className="wrapper frontend">
        <Influencerheader />
        <div className="main-panel clr2">
          <div className="container">
            <div className="page-inner influencers_sect">
              <div className="content-wrapper">
                <form id="myForm">
                  <h1 className="page-title mt-4">Create Your Page</h1>
                  <div className="card mt-3">
                    <div className="card-body">
                      <h2 className="card-title font-weight-bold">
                        Connect your social media
                      </h2>
                      <div className="social-media-sect">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Youtube"
                            name="Youtube"
                          />
                          <label className="custom-control-label ytb" htmlFor>
                            <Link
                              href="#"
                              data-target="#Connect-channels"
                              data-toggle="modal"
                            >
                              <i className="fa-brands fa-youtube fa-fw" />{" "}
                              Youtube
                            </Link>
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Instagram"
                            name="Instagram"
                          />
                          <label
                            className="custom-control-label instagram"
                            htmlFor
                          >
                            <Link
                              href="#"
                              data-target="#Connect-channels"
                              data-toggle="modal"
                            >
                              <i className="fa-brands fa-instagram fa-fw" />{" "}
                              Instagram
                            </Link>
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="Facebook"
                            name="Facebook"
                          />
                          <label className="custom-control-label facbk" htmlFor>
                            <Link
                              href="#"
                              data-target="#Connect-channels"
                              data-toggle="modal"
                            >
                              <i className="fa-brands fa-facebook fa-fw" />{" "}
                              Facebook
                            </Link>
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox disabled">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            disabled
                            id="Twitter"
                            name="Twitter"
                          />
                          <label className="custom-control-label twtr" htmlFor>
                            <Link
                              href="#"
                              data-target="#Connect-channels"
                              data-toggle="modal"
                            >
                              <i className="fa-brands fa-twitter fa-fw" />{" "}
                              Twitter
                            </Link>
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox disabled">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            disabled
                            id="Linkedin"
                            name="Linkedin"
                          />
                          <label className="custom-control-label facbk" htmlFor>
                            <Link
                              href="#"
                              data-target="#Connect-channels"
                              data-toggle="modal"
                            >
                              <i className="fa-brands fa-linkedin-in fa-fw" />{" "}
                              Linkedin
                            </Link>
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox disabled">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            disabled
                            id="TikTok"
                            name="TikTok"
                          />
                          <label
                            className="custom-control-label tiktok"
                            htmlFor
                          >
                            <Link
                              href="#"
                              data-target="#Connect-channels"
                              data-toggle="modal"
                            >
                              <i className="fa-brands fa-tiktok fa-fw" /> TikTok
                            </Link>
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox disabled">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            disabled
                            id="Twitch"
                            name="Twitch"
                          />
                          <label
                            className="custom-control-label twitch"
                            htmlFor
                          >
                            <Link
                              href="#"
                              data-target="#Connect-channels"
                              data-toggle="modal"
                            >
                              <i className="fa-brands fa-twitch fa-fw" /> Twitch
                            </Link>
                          </label>
                        </div>
                      </div>
                      <h2 className="card-title font-weight-bold">
                        Personal Detail
                      </h2>
                      <div className="form-row mt-4">
                        <div className="form-group col-sm-4">
                          <label htmlFor="describe_ys">Full Name</label>
                          <input
                            type="text"
                            name="describe_ys"
                            id="describe_ys"
                            className="form-control"
                            placeholder="Enter Name"
                          />
                        </div>
                        <div className="form-group col-sm-4">
                          <label htmlFor="Region">Email</label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="kaushar.neyazi786@gmail.com"
                          />
                        </div>
                        <div className="form-group col-sm-4">
                          <label htmlFor="name_ys">
                            Summarize Profile Title
                          </label>
                          <input
                            type="text"
                            name="name_ys"
                            id="name_ys"
                            className="form-control"
                            placeholder="E.g. Fitness Content Creator & Student Athlete"
                          />
                        </div>
                        <div className="form-group col-sm-12">
                          <label htmlFor="Region">Describe Yourself</label>
                          <textarea
                            type="text"
                            name="describe_yourself"
                            id="describe_yourself"
                            className="form-control"
                            placeholder="Who are you and what type of content do you create? Who is your audience? Be specific as this will help you show up in searches."
                            defaultValue={""}
                          />
                          <div className="info-lbl">Maximum word limit 20</div>
                        </div>
                      </div>
                      <h2 className="card-title font-weight-bold mt-2">
                        Select the niches that match your content
                      </h2>
                      <div className="form-group mt20" id="match_content">
                        {categories.map((category, index) => (
                          <Link
                            key={index}
                            className={`slct_link ${selectedCategories.includes(category)
                              ? "selected"
                              : ""
                              }`}
                            onClick={() => handleCategoryClick(category)}
                          >
                            {category}
                          </Link>
                        ))}
                      </div>

                      <h2 className="card-title font-weight-bold mt-2">
                        Select your campaign type
                      </h2>
                      <div className="form-group mt20" id="campaign_type">
                        {campaignTypes.map((campaignType, index) => (
                          <Link
                            key={index}
                            className={`slct_link ${selectedCampaignTypes.includes(campaignType)
                              ? "selected"
                              : ""
                              }`}
                            onClick={() =>
                              handleCampaignTypeClick(campaignType)
                            }
                          >
                            {campaignType}
                          </Link>
                        ))}
                      </div>

                      <h2 className="card-title font-weight-bold mt-2">
                        Add assets/images and video of you and your content
                      </h2>
                      <div className="inl-det-img-sect mt20">
                        <div className="image-sm-sect">
                          <div className="image1">
                            <div className="add-file">
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  accept="image/*"
                                  id="imageInput"
                                  name="Pan-cartd"
                                  onChange={e => handleImageChange(e, "image1")}
                                />
                              </div>
                              <i className="fa-solid fa-plus fa-fw" />
                            </div>
                            <img
                              src={
                                imagePreviews.image1 ||
                                "assets/images/demo-img-sm.jpg"
                              }
                              width="250px;"
                              height="200px"
                              className="image-preview"
                              alt=""
                            />
                          </div>
                          <div className="image2">
                            <div className="add-file">
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  accept="image/*"
                                  id="imageInput1"
                                  name="Pan-cartd1"
                                  onChange={e => handleImageChange(e, "image2")}
                                />
                              </div>
                              <i className="fa-solid fa-plus fa-fw" />
                            </div>
                            <img
                              src={
                                imagePreviews.image2 ||
                                "assets/images/demo-img-sm.jpg"
                              }
                              width="250px;"
                              height="200px"
                              className="image-preview1"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="image-md-sect">
                          <div className="profil-img">
                            <div className="add-file">
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  accept="image/*"
                                  id="imageInput2"
                                  name="Pan-cartd2"
                                  onChange={e => handleImageChange(e, "image3")}
                                />
                              </div>
                              <i className="fa-solid fa-plus fa-fw" />
                            </div>
                            <img
                              src={
                                imagePreviews.image3 ||
                                "assets/images/demo-img-sm.jpg"
                              }
                              width="200px;"
                              height="150px"
                              style={{ borderRadius: "45%" }}
                              className="image-preview2"
                              alt=""
                            />
                          </div>
                          <div className="add-file">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                accept="image/*"
                                id="imageInput3"
                                name="Pan-cartd3"
                                onChange={e => handleImageChange(e, "image4")}
                              />
                            </div>
                            <i className="fa-solid fa-plus fa-fw" />
                          </div>
                          <img
                            src={
                              imagePreviews.image4 ||
                              "assets/images/demo-img-big.jpg"
                            }
                            width="800px;"
                            height="400px"
                            className="image-preview3"
                            alt=""
                          />
                        </div>
                        <div className="image-sm-sect">
                          <div className="image3">
                            <div className="add-file">
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  accept="image/*"
                                  id="imageInput4"
                                  name="Pan-cartd4"
                                  onChange={e => handleImageChange(e, "image5")}
                                />
                              </div>
                              <i className="fa-solid fa-plus fa-fw" />
                            </div>
                            <img
                              src={
                                imagePreviews.image5 ||
                                "assets/images/demo-img-sm.jpg"
                              }
                              width="250px;"
                              height="200px"
                              className="image-preview4"
                              alt=""
                            />
                          </div>
                          <div className="image2">
                            <div className="add-file">
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  accept="image/*"
                                  id="imageInput1"
                                  name="Pan-cartd1"
                                  onChange={e => handleImageChange(e, "image6")}
                                />
                              </div>
                              <i className="fa-solid fa-plus fa-fw" />
                            </div>
                            <img
                              src={
                                imagePreviews.image6 ||
                                "assets/images/demo-img-sm.jpg"
                              }
                              width="250px;"
                              height="200px"
                              className="image-preview1"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <h2 className="card-title font-weight-bold">
                        Add your packages
                      </h2>
                      <p className="package-p">
                        These are services brands can purchase from you. This
                        can be anything from a shoutout on your social media to
                        original content creation. Unsure what to charge? Use
                        our rate calculator.
                      </p>
                      <div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                    .preview-container {\n                      border: 1px solid #ccc;\n                    }\n                  ",
                          }}
                        />
                        {/* Previw influencer modal */}
                        <div
                          aria-labelledby="myModalLabel"
                          className="modal fade show previw-influence"
                          id="Previw-Influence"
                          role="dialog"
                          tabIndex={-1}
                          aria-modal="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <div className="modal-title small-title">
                                  Olivia Anderson
                                </div>
                                <button
                                  aria-label="Close"
                                  className="close"
                                  data-dismiss="modal"
                                  type="button"
                                >
                                  <span aria-hidden="true">
                                    <i className="las la-times" />
                                  </span>
                                </button>
                              </div>
                              <div className="modal-body influencers_sect">
                                <div className="page-inner infl-detail">
                                  <div className="content-wrapper">
                                    <div className="inl-det-img-sect">
                                      <div className="image-sm-sect">
                                        <div className="image1">
                                          <img
                                            src={
                                              imagePreviews.image1 ||
                                              "assets/images/demo-img-sm.jpg"
                                            }
                                            width="250px"
                                            height="200px"
                                            className="image-preview"
                                            alt=""
                                          />
                                        </div>
                                        <div className="image2">
                                          <img
                                            src={
                                              imagePreviews.image2 ||
                                              "assets/images/demo-img-sm.jpg"
                                            }
                                            width="250px"
                                            height="200px"
                                            className="image-preview1"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="image-md-sect">
                                        <img
                                          src={
                                            imagePreviews.image3 ||
                                            "assets/images/demo-img-big.jpg"
                                          }
                                          width="800px"
                                          height="400px"
                                          className="image-preview3"
                                          alt=""
                                        />
                                      </div>
                                      <div className="image-sm-sect">
                                        <div className="image3">
                                          <img
                                            src={
                                              imagePreviews.image4 ||
                                              "assets/images/demo-img-sm.jpg"
                                            }
                                            width="250px"
                                            height="200px"
                                            className="image-preview4"
                                            alt=""
                                          />
                                        </div>
                                        <div className="image4">
                                          <img
                                            src={
                                              imagePreviews.image5 ||
                                              "assets/images/demo-img-sm.jpg"
                                            }
                                            width="250px"
                                            height="200px"
                                            className="image-preview5"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <h2 className="page-title">
                                      Student at Cambridge, public speaker,
                                      lifestyle influencer, dancer
                                    </h2>
                                    <p className="mt15">
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scrambled it to make a type specimen book.
                                      It has survived not only five centuries,
                                      but also the leap into electronic
                                      typesetting, remaining essentially
                                      unchanged. It was popularised in the 1960s
                                      with the release of Letraset sheets
                                      containing Lorem Ipsum passages, and more
                                      recently with desktop publishing software
                                      like Aldus PageMaker including versions of
                                      Lorem Ipsum.
                                    </p>
                                    <div className="form-row mt-5">
                                      <div className="col-md-5">
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-content-center">
                                              <div className="profile-inf">
                                                <img
                                                  src="assets/images/profile-inf.png"
                                                  style={{ borderRadius: "45%" }}
                                                  className="image-preview2 avatar-img rounded-circle"
                                                  alt=""
                                                />
                                              </div>
                                              <div className="ml-3 w-71">
                                                <h2
                                                  className="card-title"
                                                  id="previewContent3"
                                                />
                                                <div className="d-flex align-content-center">
                                                  <div className="mr-3">
                                                    <p
                                                      className="designation mt-2 mb-2"
                                                      id="previewContent3"
                                                    />
                                                    <div className="inl-wishlist active">
                                                      <a href="#">
                                                        <i className="las la-heart" />
                                                      </a>
                                                    </div>
                                                  </div>
                                                  <div className="ml-auto">
                                                    <div className="social_link mt-2">
                                                      <a
                                                        href="#"
                                                        className="ml-0"
                                                      >
                                                        <img
                                                          src="assets/images/inf-instagram.svg"
                                                          alt=""
                                                        />
                                                      </a>
                                                      <a href="#">
                                                        <img
                                                          src="assets/images/inf-youtube.svg"
                                                          alt=""
                                                        />
                                                      </a>
                                                      <a href="#">
                                                        <img
                                                          src="assets/images/inf-facebook.svg"
                                                          alt=""
                                                        />
                                                      </a>
                                                      <a href="#">
                                                        <img
                                                          src="assets/images/inf-twitter.svg"
                                                          alt=""
                                                        />
                                                      </a>
                                                    </div>
                                                    <div className="inl-location mt-2">
                                                      <i className="fa-sharp fa-solid fa-location-dot" />{" "}
                                                      Delhi, India
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-7">
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="form-row">
                                              <div className="col-md-6">
                                                <p className="fw-600">
                                                  Student at Cambridge, public
                                                  speaker, lifestyle influencer,
                                                  dancer
                                                </p>
                                                <div className="sort-price">
                                                  $200
                                                </div>
                                                <div className="small">
                                                  SOCIOPFF handling fee of 15%
                                                  of the fee
                                                </div>
                                              </div>
                                              <div className="col-md-6">
                                                <div className="form-group">
                                                  <select className="custom-select">
                                                    <option selected>
                                                      Story Post
                                                    </option>
                                                    <option>Example 1</option>
                                                    <option>Example 2</option>
                                                    <option>Example 3</option>
                                                  </select>
                                                </div>
                                                <p className="fs12 m-0">
                                                  1-2 story posts, either photo
                                                  or video, with tags and
                                                  mentions. Can include swipe-up
                                                  links as well.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-row mt-4 align-items-center">
                                      <div className="col-md-3">
                                        <select className="custom-select">
                                          <option selected>All Packages</option>
                                          <option>Packages 1</option>
                                          <option>Packages 2</option>
                                          <option>Packages 3</option>
                                        </select>
                                      </div>
                                      <div className="col-md-3">
                                        <i className="fa-solid fa-circle-info" />{" "}
                                        How does it work?
                                      </div>
                                    </div>
                                    <div className="form-row mt-4">
                                      {packages.map((packageItem, index) => (
                                        <div
                                          key={index}
                                          className="col-md-4 mb-3"
                                        >
                                          <div className="card inl-prices">
                                            <div className="card-body">
                                              <div className="top">
                                                <div>
                                                  <div className="social-title">
                                                    {packageItem.platform}
                                                  </div>
                                                  <div className="price">
                                                    {
                                                      packageItem.packageOffering
                                                    }
                                                  </div>
                                                </div>
                                                <div className="price">
                                                  ${packageItem.price}
                                                </div>
                                                <div className="custom-control custom-radio">
                                                  <input
                                                    type="radio"
                                                    className="custom-control-input"
                                                    id={`radio${index}`}
                                                    name="example"
                                                  />
                                                  <label
                                                    className="custom-control-label"
                                                    htmlFor={`radio${index}`}
                                                  />
                                                </div>
                                              </div>
                                              <p>
                                                {packageItem.describeYourself}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="mt-2">
                                      <a
                                        className="btn inflcrbtn mr-1"
                                        href="/dashboard"
                                        type="submit"
                                      >
                                        Submit
                                      </a>
                                      <Link
                                        className="btn btn-secondary"
                                        aria-label="Close"
                                        data-dismiss="modal"
                                        type="submit"
                                      >
                                        Cancel
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="packageContainer">
                          <div className="packages_sect">
                            {packages.map((packageItem, index) => (
                              <div key={index}>
                                <h2 className="card-title">
                                  Package {index + 1}
                                </h2>
                                <div className="form-row mt-4">
                                  <div className="form-group col-sm-4">
                                    <label htmlFor={`platform${index}`}>
                                      Choose Platform
                                    </label>
                                    <select
                                      value={packageItem.platform}
                                      onChange={e =>
                                        handlePackageChange(
                                          index,
                                          "platform",
                                          e.target.value
                                        )
                                      }
                                      className="custom-select"
                                    >
                                      <option>Select Platform</option>
                                      <option>YouTube</option>
                                      <option>Instagram</option>
                                      <option>Facebook</option>
                                      <option>TikTok</option>
                                    </select>
                                  </div>
                                  <div className="form-group col-sm-4">
                                    <label htmlFor={`package_offering${index}`}>
                                      What is this package offering?
                                    </label>
                                    <select
                                      value={packageItem.packageOffering}
                                      onChange={e =>
                                        handlePackageChange(
                                          index,
                                          "packageOffering",
                                          e.target.value
                                        )
                                      }
                                      className="custom-select"
                                    >
                                      <option>--Select--</option>
                                      <option>example 1</option>
                                      <option>example 1</option>
                                    </select>
                                  </div>
                                  <div className="form-group col-sm-4">
                                    <label htmlFor={`price${index}`}>
                                      Price
                                    </label>
                                    <input
                                      type="text"
                                      value={packageItem.price}
                                      onChange={e =>
                                        handlePackageChange(
                                          index,
                                          "price",
                                          e.target.value
                                        )
                                      }
                                      className="form-control"
                                      placeholder="Price $"
                                    />
                                    <div className="info-lbl">
                                      SOCIOPFF handling fee of 15% of the fee
                                    </div>
                                  </div>
                                  <div className="form-group col-sm-12">
                                    <label
                                      htmlFor={`describe_yourself${index}`}
                                    >
                                      Describe Yourself package
                                    </label>
                                    <textarea
                                      value={packageItem.describeYourself}
                                      onChange={e =>
                                        handlePackageChange(
                                          index,
                                          "describeYourself",
                                          e.target.value
                                        )
                                      }
                                      className="form-control"
                                      placeholder="What is included in this package? How many posts or photos? What will the buyer be getting?"
                                    />
                                    <div className="info-lbl">
                                      Maximum word limit 20
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <button
                                    type="button"
                                    className="btn"
                                    onClick={() => removePackage(index)}
                                  >
                                    Remove Package
                                  </button>
                                </div>
                              </div>
                            ))}

                            <div className="text-right mt-4">
                              <button
                                type="button"
                                onClick={addPackage}
                                className="btn"
                              >
                                Add Package
                              </button>
                            </div>

                            <div className="mb-1 col-sm-12">
                              <button
                                type="button"
                                id="saveButton"
                                className="inflcrbtn btn mr-2"
                              >
                                Save
                              </button>{" "}
                              <button
                                type="button"
                                id="previewButton"
                                data-target="#Previw-Influence"
                                data-toggle="modal"
                                className="btn2 mr-2 btn"
                              >
                                Preview
                              </button>
                              <button
                                type="submit"
                                id="submitButton"
                                disabled
                                className="inflcrbtn btn"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="copyright_text">
                © 2023, Sociopuff. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Connect your channels modal */}
      <div
        aria-labelledby="myModalLabel"
        className="modal fade show upload_quotation"
        id="Connect-channels"
        role="dialog"
        tabIndex={-1}
        aria-modal="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title w-100 small-title">
                Connect your channels
              </div>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
              >
                <span aria-hidden="true">
                  <i className="las la-times" />
                </span>
              </button>
            </div>
            <div className="modal-body mb-0">
              <div className="user-form">
                <h2 className="modal-title instagram">
                  <i className="fa-brands fa-instagram fa-fw" /> Instagram
                </h2>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <h6 className="card-title mb-2">Data we get</h6>
                    <ul className="feedback">
                      <li>Your email address</li>
                      <li>Instagram profile information and posts</li>
                      <li>Insihghts for the Instagram profile</li>
                      <li>List of pages you manage</li>
                      <li>Read content posted on the pages</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className="card-title mb-2">Data we get</h6>
                    <ul className="feedback">
                      <li>A creator account</li>
                      <li>The account needs to be linked to a Facebook page</li>
                    </ul>
                  </div>
                </div>
                <div className="mt20 d-flex align-content-start">
                  <a href="#" className="btn inflcrbtn" type="submit">
                    Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Influencercreate;
