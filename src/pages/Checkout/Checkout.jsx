import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

function Checkout() {

  const navigate = useNavigate();

  const currentUser =
    JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    ) || {};

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  const [address, setAddress] =
    useState({
      name:
        currentUser.name || "",
      mobile:
        currentUser.mobile || "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });

  const subtotal =
    cartItems.reduce(
      (acc, item) =>
        acc +
        item.price *
          item.quantity *
          83,
      0
    );

  const shipping =
    subtotal > 5000 ? 0 : 99;

  const gst = subtotal * 0.18;

  const total =
    subtotal +
    shipping +
    gst;

  function handlePlaceOrder() {

    const order = {
      id: Date.now(),
      user:
        currentUser.email,
      items: cartItems,
      address,
      paymentMethod,
      total,
      date:
        new Date().toLocaleString(),
    };

    const orders =
      JSON.parse(
        localStorage.getItem(
          "orders"
        )
      ) || [];

    orders.push(order);

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    localStorage.removeItem(
      `cart_${currentUser.email}`
    );

    alert(
      "Order Placed Successfully"
    );

    navigate("/dashboard");
  }

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <h1 className="fw-bold mb-5">
          Checkout
        </h1>

        <div className="row">


          <div className="col-lg-8">

            <div className="card border-0 shadow p-4 mb-4">

              <h4 className="mb-4">
                Shipping Address
              </h4>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Full Name"
                value={address.name}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    name:
                      e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Mobile"
                value={
                  address.mobile
                }
                onChange={(e) =>
                  setAddress({
                    ...address,
                    mobile:
                      e.target.value,
                  })
                }
              />

              <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="Address"
                onChange={(e) =>
                  setAddress({
                    ...address,
                    address:
                      e.target.value,
                  })
                }
              ></textarea>

              <div className="row">

                <div className="col-md-4">

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="City"
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        city:
                          e.target.value,
                      })
                    }
                  />

                </div>

                <div className="col-md-4">

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="State"
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        state:
                          e.target.value,
                      })
                    }
                  />

                </div>

                <div className="col-md-4">

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Pincode"
                    onChange={(e) =>
                      setAddress({
                        ...address,
                        pincode:
                          e.target.value,
                      })
                    }
                  />

                </div>

              </div>

            </div>


            <div className="card border-0 shadow p-4">

              <h4 className="mb-4">
                Payment Method
              </h4>

              <div className="form-check">

                <input
                  type="radio"
                  checked={
                    paymentMethod ===
                    "COD"
                  }
                  onChange={() =>
                    setPaymentMethod(
                      "COD"
                    )
                  }
                />

                <label>
                  Cash On Delivery
                </label>

              </div>

              <div className="form-check">

                <input
                  type="radio"
                  checked={
                    paymentMethod ===
                    "UPI"
                  }
                  onChange={() =>
                    setPaymentMethod(
                      "UPI"
                    )
                  }
                />

                <label>
                  UPI Payment
                </label>

              </div>

              <div className="form-check">

                <input
                  type="radio"
                  checked={
                    paymentMethod ===
                    "CARD"
                  }
                  onChange={() =>
                    setPaymentMethod(
                      "CARD"
                    )
                  }
                />

                <label>
                  Credit / Debit Card
                </label>

              </div>

            </div>

          </div>


          <div className="col-lg-4">

            <div className="card border-0 shadow p-4">

              <h4>
                Order Summary
              </h4>

              <hr />

              <p>
                Products:
                {" "}
                {cartItems.length}
              </p>

              <p>
                Subtotal:
                {" "}
                ₹
                {subtotal.toFixed(0)}
              </p>

              <p>
                Shipping:
                {" "}
                ₹
                {shipping}
              </p>

              <p>
                GST:
                {" "}
                ₹
                {gst.toFixed(0)}
              </p>

              <hr />

              <h4 className="text-success">

                ₹
                {total.toFixed(0)}

              </h4>

              <input
                type="text"
                className="form-control mt-3"
                placeholder="Coupon Code"
              />

              <button
                className="btn btn-success w-100 mt-4"
                onClick={
                  handlePlaceOrder
                }
                disabled={
                  !cartItems.length
                }
              >
                Place Order
              </button>

            </div>

          </div>

        </div>

      </div>
      

      <Footer />
    </>
  );
}

export default Checkout;