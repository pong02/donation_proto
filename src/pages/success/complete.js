import "../home/Homepage.css";
import AppHeader from "../../components/header/AppHeader";
import Footer from "../../components/footer/footer";

import { useNavigate } from "react-router-dom";

import * as React from "react";

function Complete() {
  // For donate button
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="App">
        {/* Imported appHeader */}
        <div className="appHeader">
          <AppHeader />
        </div>

        {/* Displaying current balance & reload button */}
        <div className="homeBox">
          <h1>Thank you for your kind contribution!</h1>
          <button onClick={navigate("/donateHome")}>Back</button>
        </div>
      </div>

      <div className="footerBox">
        <Footer />
      </div>
    </div>
  );
}

export default Complete;
