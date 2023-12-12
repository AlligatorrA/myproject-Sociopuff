import React from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Createcampaign from "./pages/Createcampaign";
import Campaignsstatus from "./pages/Campaignsstatus";
import Influencers from "./pages/Influencers";
import Howitworks from "./pages/Howitworks";
import Reportanalytics from "./pages/Reportanalytics";
import Wishlist from "./pages/Wishlist";
import Allinvities from "./pages/Allinvities";
import Dashboardbrand from "./pages/Dashboardbrand";
import Influencercreate from "./pages/Influencercreate";
import Yourcampaigns from "./pages/Yourcampaigns";
import Influencerdetail from "./pages/Influencerdetail";
import Dashboardinfluencer from "./pages/Dashboardinfluencer";
import Influencerreportanalytics from "./pages/Influencerreportanalytics";
import Influencerdiscovercampaigns from "./pages/Influencerdiscovercampaigns";
import Influencermanagecampaigns from "./pages/Influencermanagecampaigns";
import Influencerinfluencers from "./pages/Influencerinfluencers";
import Createaccountinfluencer from "./pages/Createaccountinfluencer";
import Createaccount from "./pages/Createaccount";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored"> </ToastContainer>{" "}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/adminlogin" element={<AdminLogin />} />{" "}
        <Route path="/createcampaign" element={<Createcampaign />} />{" "}
        <Route path="/campaignsstatus" element={<Campaignsstatus />} />{" "}
        <Route path="/influencercreate" element={<Influencercreate />} />{" "}
        <Route path="/influencers" element={<Influencers />} />{" "}
        <Route path="/howitworks" element={<Howitworks />} />{" "}
        <Route path="/reportanalytics" element={<Reportanalytics />} />{" "}
        <Route path="/wishlist" element={<Wishlist />} />{" "}
        <Route path="/allinvities" element={<Allinvities />} />{" "}
        <Route path="/dashboardbrand" element={<Dashboardbrand />} />{" "}
        <Route path="/yourcampaigns" element={<Yourcampaigns />} />{" "}
        <Route path="/influencerdetail" element={<Influencerdetail />} />{" "}
        <Route path="/dashboardinfluencer" element={<Dashboardinfluencer />} />{" "}
        <Route path="/createaccount" element={<Createaccount />} />{" "}
        <Route
          path="/createaccountinfluencer"
          element={<Createaccountinfluencer />}
        />{" "}
        <Route
          path="/influencerinfluencers"
          element={<Influencerinfluencers />}
        />{" "}
        <Route
          path="/influencermanagecampaigns"
          element={<Influencermanagecampaigns />}
        />{" "}
        <Route
          path="/influencerdiscovercampaigns"
          element={<Influencerdiscovercampaigns />}
        />{" "}
        <Route
          path="/influencerreportanalytics"
          element={<Influencerreportanalytics />}
        />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
