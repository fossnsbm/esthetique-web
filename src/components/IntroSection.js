import React from 'react';
import { Grid } from '@mui/material';
import "./IntroSection.css";

function IntroSection() {
    return (
        <div className="IntroSection" >
            <Grid container direction="row">
                <Grid item xs={1} ></Grid>
                <Grid item xs={11} md={8}>
                    <h1 className="IntroHeading">ESTHÉTIQUE'21</h1>
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item xs={1} ></Grid>
                <Grid item xs="auto" md="auto">
                    <h2 className="SubHeading">UI/UX Hackathon</h2>
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid className="DW" item xs={1} ></Grid>
                <Grid item xs={11} >
                    <p className="IntroPara">Esthétique '21, an online  UI/UX Hackathon organized by NSBM Green University's FOSS Community.
                        <ul><li>Date : 18th December 2021</li><li>Time : 8.00 a.m to 12 Mid night</li><li>Via : Discord</li></ul>
                        Esthétique signifies “Aesthetic beauty and a set of principles underlying an artist’s work.”
                        Esthétique ‘21 is not merely a Hackathon, but a lifetime experience.
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}
export default IntroSection;