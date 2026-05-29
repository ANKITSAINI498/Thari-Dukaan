import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">

      <h1 className="display-1 fw-bold">
        404
      </h1>

      <h3>Page Not Found</h3>

      <Link to="/" className="btn btn-dark mt-3">
        Back Home
      </Link>

    </div>
  );
}

export default NotFound;