import "./Homepage.css";
import FundMenu from "./fundraiserMenu";
import AppHeader from "../../components/header/AppHeader";
import Footer from "../../components/footer/footer";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as React from "react";

function DonateHome() {
  // For donate button
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="App">
        {/* Imported appHeader */}
        <div className="appHeader">
          <AppHeader />
        </div>

        <div className="homeBox">
          <FundMenu />
        </div>
      </div>

      <div className="footerBox">
        <Footer />
      </div>
    </div>
  );
}

export default DonateHome;
