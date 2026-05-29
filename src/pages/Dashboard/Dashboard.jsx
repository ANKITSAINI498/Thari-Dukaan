import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSignOutAlt,
  FaBoxOpen,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Dashboard() {

     

  const currentUser =
  JSON.parse(
    localStorage.getItem(
      "currentUser"
    )
  ) || {};

   const orders =
      JSON.parse(
        localStorage.getItem(
          "orders"
        )
      ) || [];

       const userOrders =
      orders.filter(
        (order) =>
          order.user ===
          currentUser.email
      );

  const navigate = useNavigate();

  const wishlist =
    JSON.parse(
      localStorage.getItem(
        `wishlist_${currentUser.email}`
      )
    ) || [];

  const cart =
    JSON.parse(
      localStorage.getItem(
        `cart_${currentUser.email}`
      )
    ) || [];

  function handleLogout() {

    localStorage.removeItem(
      "currentUser"
    );

    navigate("/login");
  }

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <div className="row">


          <div className="col-lg-4 mb-4">

            <div className="card shadow border-0 p-4 text-center">

              <img
                src={
                  currentUser.image ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt=""
                className="rounded-circle mx-auto mb-3"
                width="120"
                height="120"
              />

              <h3>
                {currentUser.name}
              </h3>

              <p className="text-muted">
                {currentUser.email}
              </p>

              <p>
                {currentUser.mobile}
              </p>

              <button
                className="btn btn-danger mt-3"
                onClick={handleLogout}
              >
                <FaSignOutAlt />
                {" "}
                Logout
              </button>

            </div>

          </div>


          <div className="col-lg-8">

            <div className="row g-4">


              <div className="col-md-4">

                <div className="card border-0 shadow p-4 text-center">

                  <FaBoxOpen
                    size={35}
                    className="mb-3 text-primary"
                  />

                  <h4>
                    Orders
                  </h4>

                  <h2>{userOrders.length}</h2>

                </div>

              </div>


              <div className="col-md-4">

                <div className="card border-0 shadow p-4 text-center">

                  <FaHeart
                    size={35}
                    className="mb-3 text-danger"
                  />

                  <h4>
                    Wishlist
                  </h4>

                  <h2>
                    {wishlist.length}
                  </h2>

                </div>

              </div>


              <div className="col-md-4">

                <div className="card border-0 shadow p-4 text-center">

                  <FaShoppingCart
                    size={35}
                    className="mb-3 text-success"
                  />

                  <h4>
                    Cart
                  </h4>

                  <h2>
                    {cart.length}
                  </h2>

                </div>

              </div>

            </div>


            <div className="card border-0 shadow p-4 mt-4">

              <h3 className="mb-4">

                <FaUser />
                {" "}
                Account Information

              </h3>

              <div className="row">

                <div className="col-md-6 mb-3">

                  <label className="fw-bold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={
                      currentUser.name || ""
                    }
                    readOnly
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <label className="fw-bold">
                    Email
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={
                      currentUser.email || ""
                    }
                    readOnly
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <label className="fw-bold">
                    Mobile
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={
                      currentUser.mobile || ""
                    }
                    readOnly
                  />

                </div>

              </div>

            </div>


            <div className="card border-0 shadow p-4 mt-4">

              <h3 className="mb-4">
                Recent Activity
              </h3>

              <ul className="list-group">

                <li className="list-group-item">
                  Logged In Successfully
                </li>

                <li className="list-group-item">
                  Wishlist Items:
                  {" "}
                  {wishlist.length}
                </li>

                <li className="list-group-item">
                  Cart Items:
                  {" "}
                  {cart.length}
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;