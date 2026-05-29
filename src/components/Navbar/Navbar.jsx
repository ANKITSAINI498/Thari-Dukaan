import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navbar.css";

function Navbar() {

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  const { wishlistItems } = useSelector(
    (state) => state.wishlist
  );

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  function handleLogout() {

    localStorage.removeItem(
      "currentUser"
    );

    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">

      <div className="container">

        {/* Logo */}

        <Link
          className="navbar-brand logo-text"
          to="/"
        >
        🛍️ Thari Dukaan 🙏🏻
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="menu"
        >


          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link
                className="nav-link nav-custom"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link nav-custom"
                to="/shop"
              >
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link nav-custom"
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link nav-custom"
                to="/contact"
              >
                Contact
              </Link>
            </li>

          </ul>


          <div className="search-box me-4">

            <input
              type="text"
              placeholder="Search Products..."
            />

            <button>
              <FaSearch />
            </button>

          </div>


          <div className="d-flex align-items-center gap-4">


            <Link
              to="/wishlist"
              className="icon-box"
            >

              <FaHeart />

              <span className="count-badge">
                {wishlistItems.length}
              </span>

            </Link>


            <Link
              to="/cart"
              className="icon-box"
            >

              <FaShoppingCart />

              <span className="count-badge">
                {cartItems.length}
              </span>

            </Link>


            {currentUser ? (

                  <div className="user-section d-flex align-items-center gap-2">

                    <img
                      src={
                        currentUser.image ||
                        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      alt="user"
                      className="user-avatar"
                    />

                    <span className="user-name">
                      {currentUser.name}
                    </span>


                    <Link
                      to="/dashboard"
                      className="dashboard-btn"
                    >
                      Dashboard
                    </Link>

                    <button
                      className="logout-btn"
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt />
                    </button>

                  </div>

                ) : (

              
              <Link
                to="/login"
                className="login-btn"
              >

                <FaUser />

                <span>
                  Login
                </span>

              </Link>

              
            )
            
            }

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;