import "../home/Homepage.css";
import "./portal.css";
import AppHeader from "../../components/header/AppHeader";
import Footer from "../../components/footer/footer";

import { useNavigate } from "react-router-dom";

import * as React from "react";

function Portal() {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="App">
        {/* Imported appHeader */}
        <div className="appHeader">
          <AppHeader />
        </div>

        <div className="homeBox">
          <h1>GATEWAY SELECT</h1>
          <p>
            checks current location for available providers OR forces everyone
            to use paypal and nuvei
          </p>
          <table className="providersBox">
            <tbody>
              <tr>
                <th>Available providers (Malaysia)</th>
              </tr>
              <tr>
                <td
                  className="providerEntry"
                  onClick={() => {
                    /**We can make payment vendor into an interface like viewForm.js and
                     * achieve vendor interface using URL manipulation eg /paymentVendor/paypal*/
                    navigate("/paymentVendor");
                  }}
                >
                  ipay88
                </td>
              </tr>
              <tr>
                <td
                  className="providerEntry"
                  onClick={() => {
                    navigate("/paymentVendor");
                  }}
                >
                  paypal
                </td>
              </tr>
              <tr>
                <td
                  className="providerEntry"
                  onClick={() => {
                    navigate("/paymentVendor");
                  }}
                >
                  Visa
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="footerBox">
        <Footer />
      </div>
    </div>
  );
}

export default Portal;
