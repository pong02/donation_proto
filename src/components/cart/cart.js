import React, { useEffect, useState } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

function Cart(cartItems) {
  const [cartState, setCart] = useState(cartItems);
  //for redirect
  const navigate = useNavigate();

  //shorten cart items
  let cart = cartItems["cartItems"];

  //check for cart availability and setstate when available
  useEffect(() => {
    if (cart) {
      setCart(cart);
      console.log("cartjs");
      console.log(cart);
    }
  }, [cart]);

  return (
    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={cartState.length}>
          <ShoppingCartIcon
            onClick={() => {
              navigate("/payment", {
                state: { data: cartState },
              });
            }}
          />
        </Badge>
      </div>
    </div>
  );
}

export default Cart;
