import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaShoppingBag,
  FaUsers,
  FaTruck,
  FaHeadset,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./About.css";

function About() {
  return (
    <>
      <Navbar />


      <section className="about-hero">

        <div className="container text-center">

          <h1 className="display-4 fw-bold">
            About
          </h1>
          <h2 className="display-4 fw-bold">
            Thari Dukaan
          </h2>

          <p className="lead">
            Modern Shopping Experience for
            Every Customer
          </p>

        </div>

      </section>


      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt=""
              className="img-fluid rounded-4 shadow"
            />

          </div>

          <div className="col-lg-6">

            <h2 className="fw-bold mb-4">
              Who We Are
            </h2>

            <p>
              <b>Thari Dukaan </b> is a modern e-commerce
              platform inspired by Amazon,
              Flipkart and Shopify.
            </p>

            <p>
              We provide quality products,
              fast delivery and secure
              shopping experiences.
            </p>

          </div>

        </div>

      </div>


      <div className="container py-5">

        <h2 className="text-center fw-bold mb-5">
          Why Choose Us
        </h2>

        <div className="row g-4">

          <div className="col-md-3">

            <div className="feature-card">

              <FaShoppingBag className="feature-icon" />

              <h5>Quality Products</h5>

              <p>
                Premium quality products.
              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="feature-card">

              <FaTruck className="feature-icon" />

              <h5>Fast Delivery</h5>

              <p>
                Delivery across India.
              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="feature-card">

              <FaUsers className="feature-icon" />

              <h5>Trusted Customers</h5>

              <p>
                Thousands of happy buyers.
              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="feature-card">

              <FaHeadset className="feature-icon" />

              <h5>24/7 Support</h5>

              <p>
                Customer support anytime.
              </p>

            </div>

          </div>

        </div>

      </div>


      <div className="container py-5">

        <div className="owner-card">

          <h2 className="fw-bold mb-4">
            Founder Information
          </h2>

          <div className="row">

            <div className="col-md-6">

              <h5>
                Name:
                <span className="text-primary">
                  {" "}
                  Ankit Saini
                </span>
              </h5>

              <p>
                Founder & Developer
              </p>

            </div>

            <div className="col-md-6">

              <p>
                <FaEnvelope /> Sainikumar.in@email.com
              </p>

              <p>
                <FaPhone /> +91 63761 88144
              </p>

              <p>
                <FaMapMarkerAlt /> Sikar,Rajasthan,
                India
              </p>

            </div>

          </div>

        </div>

      </div>


      <div className="container py-5">

        <div className="row text-center">

          <div className="col-md-3">
            <h1 className="text-primary">
              10K+
            </h1>
            <p>Customers</p>
          </div>

          <div className="col-md-3">
            <h1 className="text-primary">
              5K+
            </h1>
            <p>Products</p>
          </div>

          <div className="col-md-3">
            <h1 className="text-primary">
              50+
            </h1>
            <p>Brands</p>
          </div>

          <div className="col-md-3">
            <h1 className="text-primary">
              99%
            </h1>
            <p>Satisfaction</p>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;