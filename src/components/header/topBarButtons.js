import "./AppHeader.css";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import ButtonOptionCollection from "../../class/buttonOptions";

/* the three buttons that appear on the wrapper (the blue part), NOT PERSISTENT APPBAR! */
function TopNaviButtons() {
  //for redirect
  const navigate = useNavigate();

  //create all buttons and link (sample)
  let buttonOptions = new ButtonOptionCollection();
  let options = buttonOptions.getOptions();
  return (
    <div>
      <Grid container direction={"row"} className="unpersistentBar">
        {Array.from(Array(options.length)).map((_, index) => (
          <Grid item xs={12} sm={3} md={2} key={index}>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/" + options[index].path);
              }}
            >
              <p style={{ color: "#96a9b2" }}>{options[index].name}</p>
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default TopNaviButtons;
