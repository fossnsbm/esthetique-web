import React from "react";
import { Grid, Button } from '@mui/material';
import './RegisterSection.css';

function RegisterSection() {
    return (
        <div className="RegisterSection">
            <Grid container direction="row">
                <Grid item xs={1}></Grid>
                <Grid item xs={10} className="Register">
                    <Grid container direction="row"
                        justifyContent="space-around"
                        alignItems="center">
                        <Grid item xs={1}></Grid>
                        <Grid item xs={12} md={7}>
                            <h1>Ready for the challenge?</h1>
                        </Grid>
                        <Grid item xs={12} md={3} className="ButtonGrid">
                            <Button variant="filled" className="RegisterSectionBtn" href="#">Register Now</Button>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div >
    )
}
export default RegisterSection;