import "../home/Homepage.css";
import AppHeader from "../../components/header/AppHeader";
import Footer from "../../components/footer/footer";
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import * as React from "react";
import useEffect from "react";

function PaymentLanding() {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="App">
        {/* Imported appHeader */}
        <div className="appHeader">
          <AppHeader />
        </div>

        <div className="homeBox">
          <h1> Provider interface here</h1>

          <Button
            onClick={() => {
              navigate("/donateHome", {
                state: {
                  //pass parameters here?
                },
              });
            }}
          >
            Go back
          </Button>
        </div>
      </div>

      <div className="footerBox">
        <Footer />
      </div>
    </div>
  );
}

export default PaymentLanding;
