import "./AppHeader.css";
import { Grid, IconButton } from "@mui/material";
import TopAppBar from "./topBar";
import TopNaviButtons from "./topBarButtons";
import Cart from "../cart/cart";

import { useState, useEffect } from "react";
import CartSample from "../cart/CartItem";

function AppHeader() {
  let fakeCart = new CartSample();
  return (
    <div className="AppHeader">
      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item>
          <img className="appTitle" src="logo.png"></img>
        </Grid>
        <Grid item>
          {/**We will assume some sort of backend stores user's cart, which will be fetched on load
           * Note that cartItems will be a reflection of the fundraiser's corresponding form
           */}
          <Cart cartItems={fakeCart.getItems()}></Cart>
        </Grid>
      </Grid>
      <div className="topNavi">
        <TopNaviButtons />
      </div>
      <div className="persistentTopNavi">
        <TopAppBar />
      </div>
    </div>
  );
}

export default AppHeader;
