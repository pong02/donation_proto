import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import "./itemCard.css";

export default function ItemCard({
  fundID,
  price,
  title,
  desc,
  subtitle,
  imgpath,
  shipping, //i lazy make this
  freemode,
}) {
  //to view card details in the future
  let navigate = useNavigate();

  //to control card check
  let checked = false;
  function handleChange() {}
  return (
    <Card className="cardWrapper">
      <CardContent
        id="itemCard"
        sx={{ display: "flex", flexDirection: "Column" }}
      >
        <Grid id="itemBox">
          <Grid
            id="itemCardColumnParent"
            sx={{ display: "flex", flexDirection: "Row" }}
          >
            <Grid item>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Grid>
            <Grid item>
              <CardMedia
                className="itemCardImg"
                component="img"
                src={imgpath}
                alt="Cover Image"
              />
            </Grid>
            <Grid item className="itemInfo">
              <Typography
                className="itemTitle"
                component="div"
                variant="h5"
                align="left"
              >
                {title}
              </Typography>
              <Typography
                className="itemDesc"
                variant="subtitle1"
                color="text.secondary"
                component="div"
                align="left"
              >
                {desc}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
                align="left"
              >
                {subtitle}
              </Typography>
              <Grid className="cornerWrapper">
                <form className="numField">
                  <input
                    type="number"
                    min="1"
                    value={price}
                    disabled={!freemode}
                  />
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
