import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      mobile: "",
      image: "",
      password: "",
      confirmPassword: "",
    });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const emailExists =
      users.find(
        (user) =>
          user.email === formData.email
      );

    if (emailExists) {
      alert(
        "Email already registered"
      );
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      image: formData.image,
      password: formData.password,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify(newUser)
    );

    alert(
      "Registration Successful"
    );

    navigate("/");

    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  return (
     <>
    <Navbar />
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-6">

          <div className="card shadow-lg border-0 p-4 rounded-4">

            <h2 className="text-center fw-bold mb-4">
              Create Account
            </h2>

            <form
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-control mb-3"
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="form-control mb-3"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                className="form-control mb-3"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="image"
                placeholder="Profile Image URL"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control mb-3"
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-control mb-4"
                onChange={handleChange}
                required
              />

              <button className="btn btn-primary w-100 py-2">
                Register
              </button>

            </form>

            <p className="text-center mt-4">

              Already have account?

              {" "}

              <Link to="/login">
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
    <Footer />

    </>
  );
}

export default Signup;