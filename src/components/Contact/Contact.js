import React,{useEffect} from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"
import "./contact.css"
const Contact = () => {
  useEffect(() => {
    Aos.init({duration:2000});
   }, []);
  return (
    <>
    <div className="conpage" data-aos="zoom-in">
            <h1 class="text-center conhead">Contact Us</h1>
            <div class="text-center conpagebtn">
              <Link to="/">
                {" "}
                <button type="button" class="btn">
                  Back to home
                </button>
              </Link>
        </div>
      </div>
      <div className="contact">
        <div className="container"  data-aos="zoom-in">
          <h1 className="text-white text-center">
            Contact <span className="conspan">Us</span>
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

export default Contact;
