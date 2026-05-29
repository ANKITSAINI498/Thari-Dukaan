import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />


      <section className="contact-hero">

        <div className="container text-center">

          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you.
            Send us your questions and feedback.
          </p>

        </div>

      </section>


      <section className="contact-section py-5">

        <div className="container">

          <div className="row g-5">


            <div className="col-lg-5">

              <div className="contact-info-card">

                <h3>Get In Touch</h3>

                <p>
                  Our support team is available
                  24/7 to help you.
                </p>

                <div className="info-box">
                  <FaPhoneAlt />
                  <span>+91 6376188144</span>
                </div>

                <div className="info-box">
                  <FaEnvelope />
                  <span>
                    support@shoppy.com
                  </span>
                </div>

                <div className="info-box">
                  <FaMapMarkerAlt />
                  <span>
                    Jaipur, Rajasthan, India
                  </span>
                </div>

                <div className="social-icons">

                  <FaFacebook />
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedin />

                </div>

              </div>

            </div>


            <div className="col-lg-7">

              <div className="contact-form-card">

                <h3 className="mb-4">
                  Send Message
                </h3>

                <div className="row">

                  <div className="col-md-6">

                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Your Name"
                    />

                  </div>

                  <div className="col-md-6">

                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Email Address"
                    />

                  </div>

                </div>

                <input
                  type="text"
                  className="form-control custom-input mt-3"
                  placeholder="Subject"
                />

                <textarea
                  rows="6"
                  className="form-control custom-input mt-3"
                  placeholder="Write Your Message..."
                ></textarea>

                <button className="send-btn mt-4">
                  Send Message
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="container pb-5">

        <div className="map-box">

          <h3>Our Location</h3>

          <iframe
            title="map"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            src="https://maps.google.com/maps?q=Jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;