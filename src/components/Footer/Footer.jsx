import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaCcVisa,
  FaCcPaypal,
  FaCcMastercard,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row g-5">

          

          <div className="col-lg-4 col-md-6">

            <h2 className="footer-logo">
             🛍️ Thari Dukaan 🙏🏻
            </h2>

            <p className="footer-text">
              "थारी पसंद, थारो बाजार — Fashion, Electronics, Beauty, Home Decor अर हर रोज री जरूरत एकै जगह."
            </p>

            <div className="social-icons">

              <a className="iconns" href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

            </div>

          </div>

          

          <div className="col-lg-2 col-md-6">

            <h5>Quick Links</h5>

            <ul className="footer-links">

              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
              <li>FAQ</li>

            </ul>

          </div>

         

          <div className="col-lg-2 col-md-6">

            <h5>Categories</h5>

            <ul className="footer-links">

              <li>Fashion</li>
              <li>Electronics</li>
              <li>Mobiles</li>
              <li>Laptops</li>
              <li>Beauty</li>

            </ul>

          </div>

          

          <div className="col-lg-4 col-md-6">

            <h5>Newsletter</h5>

            <p>
              Subscribe for latest offers &
              product updates.
            </p>

            <div className="newsletter-box">

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>
                Subscribe
              </button>

            </div>

            <div className="payment-icons">

              <FaCcVisa />

              <FaCcPaypal />

              <FaCcMastercard />

            </div>

          </div>

        </div>

        <hr className="footer-line" />

        <div className="footer-bottom">

          <p>
            © 2026 Thari Dukaan. All Rights Reserved.
          </p>

          <div>

            Privacy Policy |
            Terms & Conditions
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;