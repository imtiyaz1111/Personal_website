import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faComputer,
  faPeopleGroup,
  faDiagramProject,
  faHandsPraying,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faFacebook,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";
import "aos/dist/aos.css";
import Menu from "../Project/Projectmenu";
import "./home.css"
import "../Counter/counter.css"
const Home = () => {
  const [counteron, setCounterOn] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [projectmenu, setprjectmenu] = useState(Menu);
  const filterprojectmenu = (catitem) => {
    const updateditem = Menu.filter((curElem) => {
      return curElem.category == catitem;
    });
    setprjectmenu(updateditem);
  };
  return (
    <>
      <div className="home pt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-12">
              <div className="home-deail">
                <div className="main " data-aos="zoom-in">
                  <p className="follw">Follow on</p>
                  <Link to="https://github.com/imtiyaz1111/" target={"_blank"}>
                    <FontAwesomeIcon
                      className="followicon"
                      icon={faGithub}
                    ></FontAwesomeIcon>
                  </Link>
                  <Link to="">
                    <FontAwesomeIcon
                      className="followicon"
                      icon={faFacebook}
                    ></FontAwesomeIcon>
                  </Link>
                  <Link
                    to="https://www.instagram.com/imtiyaz_123_/"
                    target={"_blank"}
                  >
                    <FontAwesomeIcon
                      className="followicon"
                      icon={faInstagram}
                    ></FontAwesomeIcon>
                  </Link>

                  <h2>Hello, my name is</h2>
                  <h1 className="">
                    Imtiyaz <span className="text-danger">Alam</span>
                  </h1>
                  <p>Front End Developer, Programmer..</p>
                  <div class="hero-btn">
                    <Link to="/contact">
                      {" "}
                      <button type="button" class="btn">
                        Contact me
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-12">
              <figure className="homeimg" data-aos="zoom-in">
                <img src="/images/mypic2.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* about */}
      <div className="about">
        <div className="container " data-aos="zoom-in">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-12">
              <div className="about-details">
                <h1 className="text-white">
                  About <span className="text-danger">ME</span>
                </h1>
                <hr className="abhar" />
                <h3 className="text-white">
                  Developer <span className="abspan"> & Designer</span>
                </h3>
                <p className="text-light fs-6">
                  My name is Md Imtiyaz Alam from jharkhand.I am a student, I am
                  studying in class 12.
                </p>
                <p className="text-light fs-6">
                  I am a front-end web developer. using HTML5, Cascade Style
                  Sheets (CSS3), Bootstrap, Advance Javascript, React.Js I can
                  provide clean code and pixel perfect design. I also make the
                  website more & more interactive with web animations.A
                  responsive design makes your website accessible to all users,
                  regardless of their device.
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
                    <div className="progress-bar HTML" data-aos="fade-right">
                      75%
                    </div>
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
                    <div className="progress-bar CSS" data-aos="fade-right">
                      60%
                    </div>
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
                    <div
                      className="progress-bar JavaScript"
                      data-aos="fade-right"
                    >
                      50%
                    </div>
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
                    <div className="progress-bar REACT" data-aos="fade-right">
                      90%
                    </div>
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
                    <div className="progress-bar MERN" data-aos="fade-right">
                      70%
                    </div>
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
      {/* Service */}
      <div className="service pt-5">
        <div className=" container" data-aos="zoom-in">
          <h1 className="text-white text-center">
            Service<span className="text-danger">Offers</span>
          </h1>
          <hr className="w-50 mx-auto serhar" />
          <p className="text-light text-center fs-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex
            dolores tempore possimus, mollitia vero quas
          </p>
          <div className="service-main">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4 col-12 my-3">
                <div className="ser-box">
                  <div className="text-center">
                    <FontAwesomeIcon
                      className="sericon "
                      icon={faCode}
                    ></FontAwesomeIcon>
                  </div>

                  <h3 className="text-white text-center">Web Design</h3>
                  <p className="text-light fs-6 text-center">
                    “It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult.”
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 col-12 my-3">
                <div className="ser-box">
                  <div className="text-center">
                    <FontAwesomeIcon
                      className="sericon "
                      icon={faComputer}
                    ></FontAwesomeIcon>
                  </div>

                  <h3 className="text-white text-center">Web Development</h3>
                  <p className="text-light fs-6 text-center">
                    “It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult.”
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 col-12 my-3">
                <div className="ser-box">
                  <div className="text-center">
                    <FontAwesomeIcon
                      className="sericon "
                      icon={faCode}
                    ></FontAwesomeIcon>
                  </div>

                  <h3 className="text-white text-center">Photography</h3>
                  <p className="text-light fs-6 text-center">
                    “It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult.”
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4 col-12 my-3">
                <div className="ser-box">
                  <div className="text-center">
                    <FontAwesomeIcon
                      className="sericon "
                      icon={faJava}
                    ></FontAwesomeIcon>
                  </div>

                  <h3 className="text-white text-center">Clipping Path</h3>
                  <p className="text-light fs-t text-center">
                    “It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult.”
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 col-12 my-3">
                <div className="ser-box">
                  <div className="text-center">
                    <FontAwesomeIcon
                      className="sericon "
                      icon={faCode}
                    ></FontAwesomeIcon>
                  </div>

                  <h3 className="text-white text-center">Apps Interface</h3>
                  <p className="text-light fs-t text-center">
                    “It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult.”
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 col-12 my-3">
                <div className="ser-box">
                  <div className="text-center">
                    <FontAwesomeIcon
                      className="sericon "
                      icon={faCode}
                    ></FontAwesomeIcon>
                  </div>

                  <h3 className="text-white text-center">Graphic Design</h3>
                  <p className="text-light fs-t text-center">
                    “It is not because things are difficult that we do not dare;
                    it is because we do not dare that they are difficult.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter */}
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="counter" data-aos="zoom-in">
          <div className="container">
            <div className="row ">
              <div className="col-sm-12 col-md-12 col-lg-3 col-12">
                <div className="couter-box">
                  <div className="text-center">
                    <FontAwesomeIcon
                      className="couicon pt-5"
                      icon={faDiagramProject}
                    ></FontAwesomeIcon>
                  </div>
                  <h2 className=" text-center counnum">
                    {counteron && (
                      <CountUp
                        start={0}
                        end={256}
                        duration={2}
                        delay={0}
                      ></CountUp>
                    )}
                    +
                  </h2>
                  <p className=" text-center pb-5 fs-5">project completed</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-3 col-12">
                <div className="couter-box">
                  <div className="text-center">
                    <FontAwesomeIcon
                      className="couicon pt-5"
                      icon={faPeopleGroup}
                    ></FontAwesomeIcon>
                  </div>
                  <h2 className=" text-center counnum">
                    {counteron && (
                      <CountUp
                        start={0}
                        end={300}
                        duration={2}
                        delay={0}
                      ></CountUp>
                    )}
                  </h2>
                  <p className=" text-center pb-5 fs-5">Happy clients</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-3 col-12">
                <div className="couter-box">
                  <div className="text-center">
                    <FontAwesomeIcon
                      className="couicon pt-5"
                      icon={faDiagramProject}
                    ></FontAwesomeIcon>
                  </div>
                  <h2 className=" text-center counnum">
                    {counteron && (
                      <CountUp
                        start={0}
                        end={1000}
                        duration={2}
                        delay={0}
                      ></CountUp>
                    )}
                  </h2>
                  <p className=" text-center pb-5 fs-5">cups of coffee</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-3 col-12">
                <div className="couter-box">
                  <div className="text-center">
                    <FontAwesomeIcon
                      className="couicon pt-5"
                      icon={faHandsPraying}
                    ></FontAwesomeIcon>
                  </div>
                  <h2 className=" text-center counnum">
                    {counteron && (
                      <CountUp
                        start={0}
                        end={756}
                        duration={2}
                        delay={0}
                      ></CountUp>
                    )}
                  </h2>
                  <p className=" text-center pb-5 fs-5">real professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
      {/* project */}
      <div className="project">
        <div className="container" data-aos="zoom-in">
          <h1 className="text-white text-center">
            Latest <span className="text-danger">Works</span>
          </h1>
          <hr className="w-50 mx-auto serhar" />
          <p className="text-light text-center fs-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex
            dolores tempore possimus, mollitia vero quas
          </p>
          <div className="menu-tabs">
            <div className="menu-tab d-flex justify-content-center ">
              <button
                className="btn-menu text-light me-3"
                onClick={() => setprjectmenu(Menu)}
              >
                All
              </button>
              <button
                className="btn-menu text-light me-3"
                onClick={() => filterprojectmenu("business website")}
              >
                Business Website
              </button>
              <button
                className="btn-menu text-light me-3"
                onClick={() => filterprojectmenu("design")}
              >
                Design
              </button>
              <button
                className="btn-menu text-light me-3"
                onClick={() => filterprojectmenu("gym website")}
              >
                Gym Website
              </button>
            </div>
          </div>
          <div className="row">
            {projectmenu.map((elem) => {
              const { id, image, title, category, link, description } = elem;
              return (
                <div className="col-sm-12 col-md-12 col-lg-4 col-12 pt-5">
                  <figure className="card-img">
                    <img src={image} alt={title} />
                  </figure>
                  <div className="card-body">
                    <h5 className="card-title text-light">{title}</h5>
                    <p className="card-text text-light">{description}</p>
                    <a href={link} className="btn-card" target={"_blank"}>
                      Go to view
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="contact">
        <div className="container" data-aos="zoom-in">
          <h1 className="text-white text-center">
            Contact <span className="text-danger">Us</span>
          </h1>
          <hr className="w-50 mx-auto serhar" />
          <div className="contact-main">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 col-12">
                <div className="contact-map">
                  <section>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8742769252312!2d86.17219711545518!3d23.64467309039687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f423e0824c6a5d%3A0x75af32765283eeed!2sAzad%20Nagar%20Street%20No.%204%2C%20Azad%20Nagar%20Chas%2C%20Ansari%20Colony%2C%20Bokaro%20Steel%20City%2C%20Jharkhand%20827013!5e0!3m2!1sen!2sin!4v1670497047605!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </section>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-12">
                <div className="contact-details">
                  <form action="https://formspree.io/f/xqkopdyd" method="POST">
                    <div className="mb-3">
                      <label for="username" class="form-label text-light fs-5">
                        Enter your name
                      </label>
                      <input
                        type="text"
                        name="username"
                        class="form-control mb-3 "
                        id=""
                        required
                        placeholder="Name"
                        autoComplete="off"
                      />
                      <label for="email" class="form-label text-light fs-5">
                        Enter your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        class="form-control mb-3"
                        id=""
                        required
                        placeholder="Email"
                        autoComplete="off"
                      />
                      <label for="subject" class="form-label text-light fs-5">
                        Enter your subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        class="form-control mb-3"
                        placeholder="subject"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="message" class="form-label text-light fs-5">
                        Enter your message
                      </label>
                      <textarea
                        name="message"
                        autoComplete="off"
                        required
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="msgbts pb-5">
                      <input type="submit" value="send message" class="btn" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;