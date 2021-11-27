import { Grid, Button } from '@mui/material';
import Countdown from './Countdown';
import './HomeSection.css'

function HomeSection() {
    let deadline = "december, 18, 2021";
    return (
        <div className="HomeSection" >
            <div className="GradientEclipse" ></div>
            <Grid className="BackgroundLogomark" >
                <Grid container direction="row">
                    <Grid item xs={1}></Grid>
                    <Grid item xs>
                        <h1 className="Heading">ESTHÈTIQUE.</h1>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={1}></Grid>
                    <Grid item xs>
                        <Countdown deadline={deadline}></Countdown>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={1}></Grid>
                    <Grid item xs>
                        <Button variant="outlined" className="RegisterButton" href="#">Register Now</Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default HomeSection;