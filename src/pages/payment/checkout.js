import "../home/Homepage.css";
import React, { useEffect, useState } from "react";
import AppHeader from "../../components/header/AppHeader";
import Footer from "../../components/footer/footer";
import CartList from "../../components/cart/cartList";

import { useLocation } from "react-router-dom";
function Checkout() {
  const { state } = useLocation();
  const [cartState, setCart] = useState([]);

  //check for cart availability and setstate when available
  useEffect(() => {
    if (state) {
      setCart(state.data);
      console.log("checkout");
      console.log(state);
    }
  }, [state]);

  return (
    <div className="wrapper">
      <div className="App">
        {/* Imported appHeader */}
        <div className="appHeader">
          <AppHeader />
        </div>

        <div className="homeBox">
          <h1>Cart</h1>
          <CartList items={cartState}></CartList>
        </div>
      </div>

      <div className="footerBox">
        <Footer />
      </div>
    </div>
  );
}

export default Checkout;
