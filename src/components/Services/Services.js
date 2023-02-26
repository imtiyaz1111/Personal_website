import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faComputer} from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import "aos/dist/aos.css"
import "./services.css"
const Services = () => {

  return (
    <>
    <div className="serpage" data-aos="zoom-in">
            <h1 class="text-center serhead">Service</h1>
            <div class="text-center serpagebtn">
              <Link to="/">
                {" "}
                <button type="button" class="btn">
                  Back to home
                </button>
              </Link>
        </div>
      </div>
      <div className="service pt-5">
        <div className=" container" data-aos="zoom-in">
          <h1 className="text-white text-center">
            Service<span className="servspan">Offers</span>
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

    </>
  );
};

export default Services;
