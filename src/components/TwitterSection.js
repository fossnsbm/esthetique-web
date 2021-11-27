import { Timeline } from "react-twitter-widgets";
import { Grid } from '@mui/material';
import './TwitterSection.css';

function TwitterSection() {
  return (
    <div className="TwitterSection">
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <p className="TwitterHeading">SEE WHAT'S HAPPENING</p>
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "fossnsbm",
            }}
            options={{
              height: "600",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TwitterSection;