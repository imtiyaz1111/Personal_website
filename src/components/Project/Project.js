import React, { useEffect, useState } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "./project.css"
import Menu from "./Projectmenu";
const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [projectmenu, setprjectmenu] = useState(Menu);
  const filterprojectmenu = (catitem) => {
    const updateditem = Menu.filter((curElem) => {
      return curElem.category === catitem;
    });
    setprjectmenu(updateditem);
  };
  return (
    <>
<div className="propage" data-aos="zoom-in">
            <h1 class="text-center prohead">Project</h1>
            <div class="text-center propagebtn">
              <Link to="/">
                {" "}
                <button type="button" class="btn">
                  Back to home
                </button>
              </Link>
        </div>
      </div>
      <div className="project">
        <div className="container" data-aos="zoom-in">
          <h1 className="text-white text-center">
            Latest <span className="prospan">Works</span>
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
                <div className="col-sm-12 col-md-12 col-lg-4 col-12 pt-5" data-aos="zoom-in">
                  <figure className="card-img" data-aos="zoom-in">
                    <img src={image} alt={title} />
                  </figure>
                  <div className="card-body" data-aos="zoom-in">
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
    </>
  );
};

export default Project;