import * as React from 'react';
import { Grid, Divider } from '@mui/material';

import PrizeOne from '../assets/prize-1.png';
import PrizeTwo from '../assets/prize-2.png';
import PrizeThree from '../assets/prize-3.png';
import './SponsorSection.css';


function sponsor() {
  return (
    <div className="Sponsor">
      <Grid container direction="row" marginTop="5%">
        <Grid item xs={1}></Grid>
        <Grid item xs={10} >
          <Grid container direction="row">
            <Grid ClassName="Prize" align="center" item xs={12} md={4}>
              <p className="PrizeHeading">OUR SPONSORS</p>
            </Grid>
          </Grid>


          <Grid container direction="row">
            <Grid className="Prize" item xs={12} md={3}>
              <h1 style={{ color: 'WHITE' }}>PLATINUM SPONSOR</h1>
              <img className="PrizeImage" src={PrizeOne} alt="1st Prize" />
            </Grid>
            <Grid className="Prize" item xs={12} md={3}>
              <h1 style={{ color: 'WHITE' }}>GOLD SPONSOR</h1>
              <img className="PrizeImage" src={PrizeTwo} alt="1st Prize" />
            </Grid>
            <Grid className="Prize" item xs={12} md={3}>
              <h1 style={{ color: 'WHITE' }}>SILVER SPONSOR</h1>
              <img className="PrizeImage" src={PrizeThree} alt="1st Prize" />
            </Grid>
            <Grid className="Prize" item xs={12} md={3}>
              <h1 style={{ color: 'WHITE' }}>BRONZE SPONSOR</h1>
              <img className="PrizeImage" src={PrizeThree} alt="1st Prize" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>







      <Grid container direction="row" marginTop="6%">

        <Grid item xs={11} >


          <Grid container direction="row" className="Rectangle" marginBottom="-4%">
            <Grid container direction="row">
              <Grid ClassName="Prize" align="center" marginTop="2%" item xs={12} md={4}>
                <h1 style={{ color: 'WHITE' }}>CO-SPONSORS</h1>
              </Grid>
            </Grid>
            <Grid className="Prize" item xs={12} md={1}></Grid>
            <Grid className="Prize" item xs={12} md={2}>

              <img className="PrizeImage" src={PrizeTwo} alt="1st Prize" />
            </Grid>
            <Grid className="Prize" item xs={12} md={2}>

              <img className="PrizeImage" src={PrizeThree} alt="1st Prize" />
            </Grid>
            <Grid className="Prize" item xs={12} md={2}>

              <img className="PrizeImage" src={PrizeThree} alt="1st Prize" />
            </Grid>

            <Divider sx={{ display: { xs: 'none', sm: 'block' } }} orientation="vertical" style={{ border: "1px solid", borderRadius: "1", color: "white", marginLeft: "2%", marginBottom: "4%" }} flexItem></Divider>

            <Grid className="Prize" item xs={12} md={4} align="center" marginBottom="4%" marginLeft="4%" marginTop="-5%">
              <h1 style={{ color: 'WHITE', align: "CENTER" }}>OFFICIAL DIGITAL MEDIA PARTNER</h1>
              <img style={{ width: "40%", alignContent: "center" }} src={PrizeThree} alt="1st Prize" />
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>






    </div >
  );
}
export default sponsor;