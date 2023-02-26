import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
import "./about.css"
const About = () => {
  useEffect(() => {
    Aos.init({duration:2000});
   }, []);
  return (
    <>
         <div className="aboutpage" data-aos="zoom-in">
            <h1 class="text-center abouhead">About Us</h1>
            <div class="text-center aboutpagebtn">
              <Link to="/">
                {" "}
                <button type="button" class="btn">
                  Back to home
                </button>
              </Link>
        </div>
      </div>
      <div className="about" id="about">
        <div className="container "  data-aos="zoom-in">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-12">
              <div className="about-details">
                <h1 className="text-white">
                  About <span className="aboutspan">ME</span>
                </h1>
                <hr className="abhar" />
                <h3 className="text-white">
                  Developer <span className="abspan"> & Designer</span>
                </h3>
                <p className="text-light fs-6">
                  My name is Md Imtiyaz Alam from jharkhand.I am a student, now i
                  study in class 12.
                </p>
                <p className="text-light fs-6">
                I am a front-end web developer.I will create fully dynamic website which you want using HTML5, Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript, React.Js I can provide clean code and
                  pixel perfect design. I also make the website more & more
                  interactive with web animations.A responsive design makes your
                  website accessible to all users, regardless of their device.
                </p>
              </div>
              <div className="skill">
                <div className="skill-detail">
                  <h5 className="text-white skil-name">HTML</h5>
                  <div
                    className="progress"
                   
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar HTML" data-aos="fade-right">75%</div>
                  </div>
                  <h5 className="text-white skil-name">CSS</h5>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar CSS"  data-aos="fade-right">60%</div>
                  </div>
                  <h5 className="text-white skil-name">JavaScript</h5>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar JavaScript"  data-aos="fade-right">50%</div>
                  </div>
                  <h5 className="text-white skil-name">React</h5>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar REACT"  data-aos="fade-right">90%</div>
                  </div>
                  <h5 className="text-white skil-name">MERN</h5>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar MERN"  data-aos="fade-right">70%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-12">
              <figure className="abimg">
                <img src="/images/img.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
