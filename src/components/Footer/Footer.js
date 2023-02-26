import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faFacebook,
  faLinkedin,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3 col-12">
            <div className="footerbox">
              <h3>About</h3>
              <p className="text-secondary fs-5 pt-3">
                We have tested a number of registry fix and clean utilities and
                present our top 3 list on our site for your convenience. Hope
                you like it.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 col-12">
            <div className="footerbox">
              <h3 className="PE-3">Links</h3>
              <p className="footerlink">
              <span>
                    <FontAwesomeIcon
                      className="text-secondary"
                      icon={faArrowRight}
                    ></FontAwesomeIcon>
                  </span>
                  <a className="text-secondary fs-5" href="/">
                    Home
                  </a>
              </p>
              <p className="footerlink">
              <span>
                    <FontAwesomeIcon
                      className="text-secondary"
                      icon={faArrowRight}
                    ></FontAwesomeIcon>
                  </span>
                  <a className="text-secondary fs-5" href="/about">
                    About
                  </a>
              </p>
              <p className="footerlink">
              <span>
                    <FontAwesomeIcon
                      className="text-secondary"
                      icon={faArrowRight}
                    ></FontAwesomeIcon>
                  </span>
                  <a className="text-secondary fs-5" href="/services">
                    Service
                  </a>
              </p>
              <p className="footerlink">
              <span>
                    <FontAwesomeIcon
                      className="text-secondary"
                      icon={faArrowRight}
                    ></FontAwesomeIcon>
                  </span>
                  <a className="text-secondary fs-5" href="/project">
                    Project
                  </a>
              </p>
              <p className="footerlink">
              <span>
                    <FontAwesomeIcon
                      className="text-secondary"
                      icon={faArrowRight}
                    ></FontAwesomeIcon>
                  </span>
                  <a className="text-secondary fs-5" href="/contact">
                    Contact
                  </a>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 col-12">
            <div className="footerbox">
              <h3>Service</h3>
              <p className="footerser">
                <span>
                  <FontAwesomeIcon
                    className="text-secondary"
                    icon={faArrowRight}
                  ></FontAwesomeIcon>
                </span>{" "}
                <a className="text-secondary fs-5 " href="#">
                  web design
                </a>
              </p>
              <p className="footerser">
                <span>
                  <FontAwesomeIcon
                    className="text-secondary"
                    icon={faArrowRight}
                  ></FontAwesomeIcon>
                </span>{" "}
                <a className="text-secondary fs-5 " href="#">
                web development
                </a>
              </p>
              <p className="footerser">
                <span>
                  <FontAwesomeIcon
                    className="text-secondary"
                    icon={faArrowRight}
                  ></FontAwesomeIcon>
                </span>{" "}
                <a className="text-secondary fs-5 " href="#">
                Mern Project
                </a>
              </p>
              <p className="footerser">
                <span>
                  <FontAwesomeIcon
                    className="text-secondary"
                    icon={faArrowRight}
                  ></FontAwesomeIcon>
                </span>{" "}
                <a className="text-secondary fs-5 " href="#">
                Online Classes
                </a>
              </p>
              <p className="footerser">
                <span>
                  <FontAwesomeIcon
                    className="text-secondary"
                    icon={faArrowRight}
                  ></FontAwesomeIcon>
                </span>{" "}
                <a className="text-secondary fs-5 " href="#">
                Youtube Course
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 col-12">
            <div className="footerbox">
              <h3>Have a Questions?</h3>
              <div className="location">
                <p className="text-secondary fs-5">
                  {" "}
                  <span>
                    <FontAwesomeIcon
                      className="text-secondary"
                      icon={faLocationDot}
                    ></FontAwesomeIcon>
                  </span>
                  Jharkhand, India
                </p>
                <p className="text-secondary fs-5">
                  {" "}
                  <span>
                    <FontAwesomeIcon
                      className="text-secondary"
                      icon={faPhone}
                    ></FontAwesomeIcon>
                  </span>
                  +916290350916
                </p>
                <p className="text-secondary fs-5">
                  {" "}
                  <span>
                    <FontAwesomeIcon
                      className="text-secondary"
                      icon={faEnvelope}
                    ></FontAwesomeIcon>
                  </span>
                  mdimtiyazalam630@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="socialaicon text-center pt-5">
          a{" "}
          <FontAwesomeIcon
            className="fotersocialicon"
            icon={faInstagram}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="fotersocialicon"
            icon={faFacebook}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="fotersocialicon"
            icon={faGithub}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="fotersocialicon"
            icon={faTelegram}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="fotersocialicon"
            icon={faTwitter}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="fotersocialicon"
            icon={faLinkedin}
          ></FontAwesomeIcon>
          <div class="f-credits pb-5">
            <p className="text-light">
              Copyright ©2022 All rights reserved | This template is made with ❤
              by Imtiyaz Alam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
