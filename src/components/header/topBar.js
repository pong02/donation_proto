import "./AppHeader.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useScrollTrigger } from "@mui/material";
import Slide from "@mui/material/Slide";
import ButtonOptionCollection from "../../class/buttonOptions";
import { useNavigate } from "react-router-dom";

/** Appears when user scrolls past the WRAPPER
 *  APPBAR, PERSISTENT
 */
export default function ShowTopAppBar() {
  //to detect scroll event and trigger something (showing the appbar in our case)
  const trigger = useScrollTrigger({
    disableHysteresis: true, //to keep it even when scrolled up
    threshold: 215,
  });

  //for redirect
  const navigate = useNavigate();

  //create all buttons and link (sample)
  let buttonOptions = new ButtonOptionCollection();
  let options = buttonOptions.getOptions();

  return (
    <div>
      {/**Slide is used to animate the appbar appearing, using the trigger (see above) to know when to start animation */}
      <Slide appear={true} direction={"down"} in={trigger}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" style={{ background: "#f5f5f5" }}>
            <Toolbar className="persistentBar">
              {Array.from(Array(options.length)).map((_, index) => (
                <Button
                  key={index}
                  color="inherit"
                  onClick={() => {
                    navigate("/" + options[index].path);
                  }}
                >
                  <p style={{ color: "black" }}>{options[index].name}</p>
                </Button>
              ))}
            </Toolbar>
          </AppBar>
        </Box>
      </Slide>
    </div>
  );
}
