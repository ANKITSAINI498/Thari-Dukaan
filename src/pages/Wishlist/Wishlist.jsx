import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  removeFromWishlist,
} from "../../redux/wishlistSlice";

import {
  addToCart,
} from "../../redux/cartSlice";

function Wishlist() {

  const dispatch = useDispatch();

  const { wishlistItems } = useSelector(
    (state) => state.wishlist
  );

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <h1 className="fw-bold mb-4">
          My Wishlist ❤️
        </h1>

        {wishlistItems.length === 0 ? (

          <div className="text-center py-5">

            <h3>
              Wishlist Empty
            </h3>

            <p>
              Add products to wishlist
            </p>

          </div>

        ) : (

          <div className="row g-4">

            {wishlistItems.map((item) => (

              <div
                className="col-lg-3 col-md-4 col-sm-6"
                key={item.id}
              >

                <div className="card h-100 shadow border-0">

                  <img
                    src={
                      item.thumbnail ||
                      item.images?.[0]
                    }
                    alt={item.title}
                    className="card-img-top p-3"
                    style={{
                      height: "250px",
                      objectFit: "contain",
                    }}
                  />

                  <div className="card-body">

                    <h6>
                      {item.title}
                    </h6>

                    <h5 className="text-primary fw-bold">

                      ₹
                      {Math.round(
                        item.price * 85
                      )}

                    </h5>

                    <div className="d-grid gap-2 mt-3">

                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          dispatch(
                            addToCart(item)
                          )
                        }
                      >
                        Add To Cart
                      </button>

                      <button
                        className="btn btn-outline-danger"
                        onClick={() =>
                          dispatch(
                            removeFromWishlist(
                              item.id
                            )
                          )
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
         <Footer />
    </>
  );
}

export default Wishlist;