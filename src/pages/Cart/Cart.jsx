import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import { removeFromCart } from "../../redux/cartSlice";

import "./Cart.css";

function Cart() {

  const dispatch = useDispatch();

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity * 83,
    0
  );

  const shipping = subtotal > 5000 ? 0 : 99;

  const total = subtotal + shipping;

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <h2 className="cart-title">
          🛒 Shopping Cart
        </h2>

        <div className="row">


          <div className="col-lg-8">

            {cartItems.length === 0 ? (

              <div className="empty-cart">

                <h3>Your Cart is Empty</h3>

                <p>
                  Add some products to continue shopping.
                </p>

              </div>

            ) : (

              cartItems.map((item) => (

                <div
                  key={item.id}
                  className="cart-card"
                >

                  <div className="row align-items-center">

                    <div className="col-md-2">

                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="cart-image"
                      />

                    </div>

                    <div className="col-md-4">

                      <h5 className="fw-bold">
                        {item.title}
                      </h5>

                      <p className="text-success">
                        In Stock
                      </p>

                    </div>

                    <div className="col-md-2">

                      <h5 className="price">
                        ₹{(item.price * 83).toFixed(2)}
                      </h5>

                    </div>

                    <div className="col-md-2">

                      <span className="qty-box">
                        Qty : {item.quantity}
                      </span>

                    </div>

                    <div className="col-md-2">

                      <button
                        className="btn btn-danger remove-btn"
                        onClick={() =>
                          dispatch(
                            removeFromCart(item.id)
                          )
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))
            )}

          </div>


          <div className="col-lg-4">

            <div className="summary-card">

              <h4>
                Price Details
              </h4>

              <hr />

              <div className="d-flex justify-content-between mb-2">

                <span>Subtotal</span>

                <strong>
                  ₹{subtotal.toFixed(2)}
                </strong>

              </div>

              <div className="d-flex justify-content-between mb-2">

                <span>Shipping</span>

                <strong>
                  ₹{shipping.toFixed(2)}
                </strong>

              </div>

              <hr />

              <div className="d-flex justify-content-between">

                <h5>Total</h5>

                <h5 className="text-success">
                  ₹{total.toFixed(2)}
                </h5>

              </div>

              <Link
                    to="/checkout"
                    className="checkout-btn mt-4 text-decoration-none d-block text-center"
                  >
                    Proceed To Checkout
                  </Link>

            </div>

          </div>

        </div>

      </div>
       <Footer />
    </>
  );
}

export default Cart;