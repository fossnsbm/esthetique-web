import * as React from 'react';
import { Grid } from '@mui/material';
import FOSS from '../assets/logoset.png';

import './Footer.css';


function Footer() {
    return (
      <div className="Footer">
      <div className="Container">
      <Grid container direction="row">
                <Grid item xs={1} ></Grid>
                <Grid item xs={11} md={5}>
                    <h1 className="Esthetique" >ESTHÉTIQUE'21</h1>
                    <h2 item xs="11" md="3" className="UIUX">UI/UX Hackathon</h2>
                    <h2 className="footercont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore </h2>
                </Grid>
                <Grid item xs={11} md={2} align="center" style={{marginTop:"2.5%"}}>
                 <a align="center" className="footernav" href="#" >Home</a><br/><br/>
                 <a align="center" className="footernav" href="#" >About</a><br/><br/>
                 <a align="center" className="footernav" href="#">Prizes</a><br/><br/>
                 <a align="center" className="footernav" href="#">Judges</a><br/><br/>
                 <a align="center" className="footernav" href="#">Sponsors</a>
                </Grid>

               
                 
                 <Grid item xs={11} md={4} align="center">
                 <h2 className="foot" align="center" >Organized by</h2>
                 <img  align="center" className="FOSS"   src={FOSS} alt="FOSS Logo" />
                 
                 </Grid>

                 

            

                
                
            </Grid>


            <Grid container direction="row" className="endbr">
                <Grid item xs={12}  className="endbar" className="endbar" >
                    <p align="center" className="endbrtxt">
                        2021 FOSS Community of NSBM
                    </p>

                </Grid>
       
            </Grid>
        
        

    

            
      </div>
    
    
    </div >
    );
  }
  export default Footer;


