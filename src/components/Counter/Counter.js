import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup,faDiagramProject,faHandsPraying} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";
import "./counter.css"
const Counter = () => {
    const [counteron,setCounterOn]=useState(false)
    useEffect(() => {
      Aos.init({duration:2000});
     }, []);
  return (
    <>
          {/* counter */}
          <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <div className="counter">
            <div className="container">
              <div className="row ">
                <div className="col-sm-12 col-md-12 col-lg-3 col-12">
                  <div className="couter-box">
                    <div className="text-center">
                      <FontAwesomeIcon className="couicon pt-5" icon={faDiagramProject}></FontAwesomeIcon>
                    </div>
                    <h2 className=" text-center counnum">
                      {counteron && <CountUp start={0} end={256} duration={2} delay={0}></CountUp>}+
                    </h2>
                    <p className=" text-center pb-5 fs-5">
                      project completed
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3 col-12">
                  <div className="couter-box">
                  <div className="text-center">
                      <FontAwesomeIcon className="couicon pt-5" icon={faPeopleGroup}></FontAwesomeIcon>
                    </div>
                    <h2 className=" text-center counnum">
                      {counteron && <CountUp start={0} end={300} duration={2} delay={0}></CountUp>}
                    </h2>
                    <p className=" text-center pb-5 fs-5">
                      Happy clients
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3 col-12">
                  <div className="couter-box">
                  <div className="text-center">
                      <FontAwesomeIcon className="couicon pt-5" icon={faDiagramProject}></FontAwesomeIcon>
                    </div>
                    <h2 className=" text-center counnum">
                      {counteron && <CountUp start={0} end={1000} duration={2} delay={0}></CountUp>}
                    </h2>
                    <p className=" text-center pb-5 fs-5">
                      cups of coffee
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3 col-12">
                  <div className="couter-box">
                  <div className="text-center">
                      <FontAwesomeIcon className="couicon pt-5" icon={faHandsPraying}></FontAwesomeIcon>
                    </div>
                    <h2 className=" text-center counnum">
                      {counteron && <CountUp start={0} end={756} duration={2} delay={0}></CountUp>}
                    </h2>
                    <p className=" text-center pb-5 fs-5">
                      real professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollTrigger>
          </>
  );
}

export default Counter;
