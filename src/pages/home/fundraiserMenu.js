import React from "react";
import { Grid } from "@mui/material";
import FundCard from "../../components/cards/fundCard";
import Event from "../../class/fundraiserEvent";
import { useState, useEffect } from "react";

function FundMenu() {
  /** VERY PRIMITIVE TO just take events as input,
   * use listadapter while taking events AS INPUT in actual implementation*/
  let cardNum = Math.floor(Math.random() * (100 - 12)) + 12;
  const sampleEvents = [];
  const sampleImg = [null, "kidsplaying.png", "kid2.png", "kid3.png"];

  for (let i = 0; i < cardNum; i++) {
    let x = Math.floor(Math.random() * 4);
    let e = new Event(
      "Fundraiser #" + i,
      "Support our efforts in helping the innocent",
      "donationID/" + i,
      sampleImg[x]
    );
    sampleEvents.push(e);
  }
  return (
    <div>
      {/* Displaying current balance & reload button */}
      <div className="balanceBox">
        <h1 htmlFor="cbLabel">Help the children</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/** automatically generate cards using an array*/}
          {Array.from(Array(sampleEvents.length)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <FundCard
                title={sampleEvents[index].title}
                desc={sampleEvents[index].desc}
                link={sampleEvents[index].link}
                imgpath={sampleEvents[index].imgpath}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default FundMenu;
