import * as React from "react";
import { Grid } from "@mui/material";

import PlatinumSponsor from "../assets/platinum-sponsor.png";
import GoldSponsor from "../assets/gold-sponsor.svg";
import SilverSponsor from "../assets/silver-sponsor.png";
import MediaPartner from "../assets/media-partner.png";
import "./SponsorSection.scss";

function SponsorSection() {
  return (
    <div className="SponsorSection">
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Grid container direction="row">
            <Grid item xs={12}>
              <p className="SponsorHeading">OUR SPONSORS</p>
            </Grid>
          </Grid>
          <Grid container direction="row" textAlign="center">
            <Grid item xs={12} md={4}>
              <h1 className="SponsorName">Platinum Sponsor</h1>
              <img
                className="SponsorImage"
                src={PlatinumSponsor}
                alt="Platinum Sponsor"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <h1 className="SponsorName">Gold Sponsor</h1>
              <img 
                className="GoldImage" 
                src={GoldSponsor} 
                alt="Gold Sponsor" 
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <h1 className="SponsorName">Silver Sponsor</h1>
              <img
                className="SponsorImage"
                src={SilverSponsor}
                alt="Silver Sponsor"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid container direction="row" marginTop="4%">
        <Grid item xs={11} >
          <Grid container direction="row" className="Rectangle" marginBottom="-4%">
            {/* <Grid container direction="row">
              <Grid ClassName="Prize" align="center" marginTop="2%" item xs={12} md={4}>
                <h1 style={{ color: 'WHITE' }}>Co-sponsors</h1>
              </Grid>
            </Grid> */}
            {/* <Grid className="Prize" item xs={12} md={1}></Grid>
            <Grid className="Prize" item xs={12} md={2}>

              <img className="PrizeImage" src={SilverSponsor} alt="1st Prize" />
            </Grid> */}
            {/*
            <Grid className="Prize" item xs={12} md={2}>

              <img className="PrizeImage" src={SilverSponsor} alt="1st Prize" />
            </Grid>
            <Grid className="Prize" item xs={12} md={2}>

              <img className="PrizeImage" src={SilverSponsor} alt="1st Prize" />
            </Grid> */}

            {/* <Divider sx={{ display: { xs: 'none', sm: 'block' } }} orientation="vertical" style={{ border: "1px solid", borderRadius: "1", color: "white", marginLeft: "2%", marginBottom: "4%" }} flexItem></Divider> */}

            <Grid className="Prize" item xs={12} md={12} align="center" marginBottom="4%" marginLeft="4%" marginTop="4%">
              <h1 className="SponsorName">Official<br />Digital Media Partner</h1>
              <img className="MediaPartnerImage" src={MediaPartner} alt="1st Prize" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}
export default SponsorSection;
