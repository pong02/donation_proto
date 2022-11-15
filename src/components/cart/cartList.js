import React from "react";
import { Grid, Button } from "@mui/material";
import ItemCard from "../../components/cards/itemCard";
import { useNavigate } from "react-router-dom";
import "./cartList.css";

export default function CartList(cart) {
  const navigate = useNavigate();
  console.log(cart.items);
  return (
    <div>
      <div className="cartList">
        {Array.from(Array(cart.items.length)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ItemCard
              fundID={cart.items[index].fundID}
              price={cart.items[index].price}
              title={cart.items[index].title}
              desc={cart.items[index].desc}
              subtitle={cart.items[index].subtitle}
              imgpath={cart.items[index].imgpath}
              shipping={cart.items[index].shipping}
              freemode={cart.items[index].freemode}
            />
          </Grid>
        ))}
      </div>
      <Grid className="totalBox">
        <div id="totalHeader">
          <h2>Total</h2>
        </div>
        <div id="totalAmount">
          <h3>RM1234.00</h3>
          <Button
            onClick={() => {
              navigate("/gateway", {
                state: {
                  items: cart.items,
                },
              });
            }}
          >
            Pay
          </Button>
        </div>
      </Grid>
    </div>
  );
}
