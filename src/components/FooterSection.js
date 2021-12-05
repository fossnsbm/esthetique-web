import * as React from "react";
import { Grid } from "@mui/material";
import FOSS from "../assets/logoset.png";
import "./FooterSection.scss";
import { Link } from "react-router-dom";
import { Link as RSLink } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function FooterSection() {
  return (
    <div className="Footer">
      <div className="Container">
        <Grid container direction="row">
          <Grid item xs={1}></Grid>
          <Grid item xs={12} md={5}>
            <h1 className="Esthetique">ESTHÉTIQUE'21</h1>
            <h2 item xs="12" md="3" className="UIUX">
              UI/ UX Hackathon
            </h2>
            <h2 className="footercont">
              Esthétique '21, an online UI/UX Hackathon organized by NSBM Green
              University's FOSS Community. Esthétique signifies “Aesthetic
              beauty and a set of principles underlying an artist’s work.”
              Esthétique ‘21 is not merely a Hackathon, but a lifetime
              experience.
            </h2>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            align="center"
            style={{ marginTop: "2.5%" }}
          >
            <div className="footerNav">
              <span>
                <Link to="/">HOME</Link>
              </span>
              <span>
                <RSLink activeClass="active" spy smooth to="IntroSection">
                  ABOUT
                </RSLink>
              </span>
              <span>
                <RSLink activeClass="active" spy smooth to="PrizesSection">
                  PRIZES
                </RSLink>
              </span>
              <span>
                <RSLink activeClass="active" spy smooth to="JudgeSection">
                  JUDGES
                </RSLink>
              </span>
              <span>
                <RSLink activeClass="active" spy smooth to="SponsorSection">
                  SPONSORS
                </RSLink>
              </span>
            </div>
          </Grid>

          <Grid item xs={12} md={4} align="center">
            <h4 className="foot" align="center">
              Organized by
            </h4>
            <img align="center" className="FOSS" src={FOSS} alt="FOSS Logo" />
            <div className="socials">
              <a href="https://www.facebook.com/foss.nsbm/">
                <FaFacebook size={18} color={"#fff"} />
              </a>
              <a href="https://twitter.com/fossnsbm">
                <FaTwitter size={18} color={"#fff"} />
              </a>
              <a href="https://www.instagram.com/fossnsbm/">
                <FaInstagram size={18} color={"#fff"} />
              </a>
              <a href="https://www.linkedin.com/company/fossnsbm">
                <FaLinkedin size={18} color={"#fff"} />
              </a>
            </div>
          </Grid>
        </Grid>

        <Grid container direction="row" className="endbr">
          <Grid item xs={12} md={6} className="endbar">
            <p className="endbrtxt">© 2021 FOSS Community of NSBM</p>
          </Grid>
          <Grid item xs={12} md={6} className="endbar">
            <p align="right" className="endbrtxttwo">
              &lt;/&gt; with &hearts; by the FOSS Community of NSBM
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default FooterSection;
