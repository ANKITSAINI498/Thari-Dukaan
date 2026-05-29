import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");


  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (currentUser) {
      navigate("/");
    }
  }, [navigate]);


  useEffect(() => {
    const savedUser = JSON.parse(
      localStorage.getItem("rememberUser")
    );

    if (savedUser) {
      setEmail(savedUser.email);
      setPassword(savedUser.password);
      setRememberMe(true);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) ||
      [];

    const user = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }


    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );


    if (rememberMe) {
      localStorage.setItem(
        "rememberUser",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem(
        "rememberUser"
      );
    }

    alert(`Welcome ${user.name}`);

    navigate("/");

    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  return (
    <>
    <Navbar />
    <div className="login-page">

      <div className="login-container">


        <div className="login-left">

          <h1>
            Welcome Back 👋
          </h1>

          <p>
            Login to continue shopping,
            access your wishlist and cart.
          </p>

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="shopping"
          />

        </div>


        <div className="login-right">

          <div className="login-card">

            <h2>Login Account</h2>

            <form
              onSubmit={handleSubmit}
            >

              <input
                type="email"
                placeholder="Email Address"
                className="form-control mb-3"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                required
              />

              <div className="password-box">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  required
                />

                <span
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </span>

              </div>

              <div className="d-flex justify-content-between mt-3">

                <label>

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(
                        e.target.checked
                      )
                    }
                  />

                  {" "}
                  Remember Me

                </label>

                <Link to="#">
                  Forgot Password?
                </Link>

              </div>

              <button
                className="login-btn-main"
              >
                Login
              </button>

            </form>

            <div className="divider">
              OR
            </div>

            <button className="google-btn">

              <FaGoogle />

              Continue with Google

            </button>

            <p className="mt-4 text-center">

              Don't have an account?

              {" "}

              <Link to="/signup">
                Register
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

export default Login;