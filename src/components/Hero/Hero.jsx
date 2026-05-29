import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">

      <div className="container">

        <div className="row align-items-center min-vh-100">


          <div className="col-lg-6 hero-content">

            <span className="offer-badge">
              🔥 MEGA SALE 2026
            </span>

            <h1 className="hero-title">
              Discover The
              <span> Future Of Shopping</span>
            </h1>

            <p className="hero-desc">
              Explore thousands of premium products,
              exclusive collections, trending gadgets,
              fashion, beauty, furniture and more.
              Save up to 70% on selected items.
            </p>

            <div className="hero-buttons">

              <button className="shop-btn">
                Shop Now
              </button>

              <button className="explore-btn">
                Explore Collection
              </button>

            </div>

            <div className="hero-stats">

              <div>
                <h3>50K+</h3>
                <span>Products</span>
              </div>

              <div>
                <h3>100K+</h3>
                <span>Customers</span>
              </div>

              <div>
                <h3>4.9★</h3>
                <span>Ratings</span>
              </div>

            </div>

          </div>


          <div className="col-lg-6">

            <div className="hero-image-box">

              <div className="floating-card card1">
                💻 Laptops
              </div>

              <div className="floating-card card2">
                👟 Shoes
              </div>

              <div className="floating-card card3">
                📱 Mobiles
              </div>

              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="hero"
                className="hero-main-image"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;