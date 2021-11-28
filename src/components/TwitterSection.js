import { Timeline } from "react-twitter-widgets";
import { Grid } from "@mui/material";
import "./TwitterSection.css";

function TwitterSection() {
  return (
    <div className="TwitterSection">
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <h1 className="TwitterHeading">SEE WHAT'S HAPPENING</h1>
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <iframe
            title="esthetique"
            id="wallsio-iframe"
            src="https://my.walls.io/zd5vd?nobackground=1&amp;show_header=0"
            style={{ border: 0, height: "600px", width: "100%" }}
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
}

export default TwitterSection;
