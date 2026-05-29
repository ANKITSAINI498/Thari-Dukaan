import { useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { fetchProducts } from "../../redux/productSlice";

function Shop() {

  const dispatch = useDispatch();

  const { items } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>

      <Navbar />

      <div className="container py-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h1>Shop</h1>

          <select className="form-select w-auto">

            <option>Latest</option>

            <option>
              Price Low To High
            </option>

            <option>
              Price High To Low
            </option>

          </select>

        </div>

        <div className="row g-4">

          {items.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>

      </div>

      <Footer />

    </>
  );
}

export default Shop;