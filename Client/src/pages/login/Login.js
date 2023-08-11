import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault(); // preventing the reload of the page
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapperl">
          <div className="logo">GS-OTT</div>
            <Link to="/register">
              <button className="loginbutton">Sign Up</button>
            </Link>
        </div>
      </div>
      <div className="containerlogin">
        <form className="inp-form">
          <h1>Sign In</h1>
          <input
            className="inp"
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inp"
            style={{ marginTop: "20px", marginBottom: "30px" }}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forgot-cont">
            <div className="remember-me">
              <input id="check" type="checkbox" />
              <p>Remember me</p>
            </div>
          </div>
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
