import React from 'react';
import { Grid } from '@mui/material';
import PrizeOne from '../assets/prize-1.png';
import PrizeTwo from '../assets/prize-2.png';
import PrizeThree from '../assets/prize-3.png';
import './PrizesSection.css';

function PrizesSection() {
  return (
    <div className="PrizesSection">
      <Grid container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item xs={10} className="Rectangle">
          <p className="PrizeHeading">PRIZES</p>
          <p className="PrizePara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud </p>
          <Grid container direction="row">
            <Grid className="Prize" item xs={12} md={4}>
              <img className="PrizeImage" src={PrizeOne} alt="1st Prize" />
            </Grid>
            <Grid className="Prize" item xs={12} md={4}>
              <img className="PrizeImage" src={PrizeTwo} alt="1st Prize" />
            </Grid>
            <Grid className="Prize" item xs={12} md={4}>
              <img className="PrizeImage" src={PrizeThree} alt="1st Prize" />
            </Grid>
          </Grid>
          {/* <div>
          <img src={Group} className="img1" alt="gropu5" />
          <div className="first">1st Place</div>
          <p className="Prize1">15,000 LKR</p>
        </div>
        <div>
          <img src={Group} className="img2" alt="group6" />
          <p className="second">2nd Place</p>
          <p className="Prize2">12,000 LKR</p>
        </div>
        <div>
          <img src={Group} className="img3" alt="group7" />
          <p className="third">3rd Place</p>
          <p className="Prize3">9,000 LKR</p>
        </div> */}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div >
  );
}

export default PrizesSection;
