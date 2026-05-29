import Navbar from "../../components/Navbar/Navbar";

function Admin() {
  return (
    <>

      <Navbar />

      <div className="container py-5">

        <h1 className="fw-bold mb-5">
          Admin Dashboard
        </h1>

        <div className="row g-4">

          <div className="col-md-3">
            <div className="card p-4 shadow">
              <h4>Total Products</h4>
              <h2>250</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-4 shadow">
              <h4>Total Orders</h4>
              <h2>150</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-4 shadow">
              <h4>Total Users</h4>
              <h2>320</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-4 shadow">
              <h4>Total Sales</h4>
              <h2>$12K</h2>
            </div>
          </div>

        </div>

      </div>

    </>
  );
}

export default Admin;