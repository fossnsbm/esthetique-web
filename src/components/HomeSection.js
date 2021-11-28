import { Grid, Button } from "@mui/material";
import Countdown from "./Countdown";
import "./HomeSection.scss";

function HomeSection() {
  let deadline = "december, 18, 2021";
  return (
    <div className="HomeSection">
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <h1 className="Heading">ESTHÈTIQUE.</h1>
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <Countdown deadline={deadline}></Countdown>
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <Button
            variant="outlined"
            className="RegisterButton"
            href="https://forms.gle/tT8T4yxTA5bUTvJh6"
            target="_blank"
          >
            Register Now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeSection;
