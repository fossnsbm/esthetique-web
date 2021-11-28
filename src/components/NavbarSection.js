import "./NavbarSection.scss";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Link as RSLink } from "react-scroll";
import Button from "@mui/material/Button";

const NavbarSection = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <Link to="/">
          <img width={48} src={logo} className="logo" alt="logo"></img>
        </Link>
        <div className="navLinks">
          <div className="links">
            <Link to="/">HOME</Link>
            <RSLink activeClass="active" spy smooth to="IntroSection">
              ABOUT
            </RSLink>
            <RSLink activeClass="active" spy smooth to="PrizesSection">
              PRIZES
            </RSLink>
            <RSLink activeClass="active" spy smooth to="#">
              JUDGES
            </RSLink>
            <RSLink activeClass="active" spy smooth to="SponsorSection">
              SPONSORS
            </RSLink>
          </div>
          <div>
            <Link
              to={{
                pathname: "#",
              }}
              target="_blank"
            >
              <Button className="navBtn">REGISTER</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
