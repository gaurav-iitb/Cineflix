import { useState , useRef } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"
import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });


  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try{
      await axiosInstance.post("auth/register",{email,username, password});
      navigate('/login')
    }
    catch(err){
      console.log(err)
    }
  };
  return (
    <div className="signup"> 
      <div className="wrap-sign">
        <div className="top">
          <div className="logo" >GS-OTT</div>
          <Link to="/login">
          <button className="loginbutton">Sign In</button>
          </Link>
        </div>
        <div className="container">
          <h1>
            One Stop Platform<br /> for Watching movies,<br /> series and more.
          </h1>
          <h2>Watch anytime, anywhere.</h2>
          {!email ? (
          <div className="input">
            <input className="input-elem" type="email" placeholder="enter your email address" ref={emailRef} />
            <button className="registerbutton" onClick={handleStart}>
              REGISTER
            </button>
          </div>
        ) : (
          <form className="input">
            <input className="input-elem" type="username" placeholder="username" ref={usernameRef} />
            <input className="input-elem" type="password" placeholder="password" ref={passwordRef} />
            <button className="registerbutton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
