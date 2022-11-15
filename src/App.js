import "./App.css";
import React from "react";
import DonateHome from "./pages/home/homepage";
import DummyRedirect from "./pages/dummy/redirect";
import Checkout from "./pages/payment/checkout";
import Portal from "./pages/payment/payPortal";
import PaymentLanding from "./pages/payment/payVendor";
import Complete from "./pages/success/complete";
import ViewForm from "./pages/forms/viewForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/donateHome" element={<DonateHome />} />
        <Route exact path="*" element={<DummyRedirect />} />
        <Route exact path="/payment" element={<Checkout />} />
        <Route exact path="/gateway" element={<Portal />} />
        <Route exact path="/paymentVendor" element={<PaymentLanding />} />
        <Route exact path="/success" element={<Complete />} />
        <Route exact path="/donateHome/donationID/:id" element={<ViewForm />} />
      </Routes>
    </Router>
  );
}

export default App;
