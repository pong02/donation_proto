import { Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import { height, maxHeight } from "@mui/system";

export default function FundCard({ title, desc, link, imgpath }) {
  let img = "ww.png";
  if (imgpath != null) {
    img = imgpath;
  }
  let navigate = useNavigate();
  const routeChange = () =>
    navigate(link, {
      state: {
        id: link.replace("donationID/", ""),
      },
    });

  /**
  * <div className="fundraiserBanner" style={{ height: "140px" }}>
        <img src={require("../../assets/ww.png")} />
      </div>
  */
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        src={img}
        alt="fundraiser banner img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={routeChange}>
          Donate
        </Button>
      </CardActions>
    </Card>
  );
}
