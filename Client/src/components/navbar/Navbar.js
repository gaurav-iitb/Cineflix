import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

function Navbar() {
  const [scroll, setscroll] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setscroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(scroll);
  return (
    <div className={scroll ? "navbar scrolled" : "navbar"}>
      <div className="al-left">
        <div className="logo1">GS-OTT</div>
      </div>
      <div className="mid">
        <Link to="/" className="link">
          <p>HOMEPAGE</p>
        </Link>
        <Link to="/series" className="link">
          <p>SERIES</p>
        </Link>
        <Link to="/movies" className="link">
          <p>MOVIES</p>
        </Link>
        {/* <Link to="/" className="link"> */}
        <p>NEW AND POPULAR</p>
        {/* </Link> */}
        {/* <Link to="/" className="link"> */}
        <p>MY LIST</p>
        {/* </Link> */}
      </div>
      <div className="al-right">
        <SearchIcon className="ricon" />
        {/* <p className="ricon">KID</p> */}
        <NotificationsIcon className="ricon" />
        <img
          className="ricon"
          style={{ height: "30px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDn65YiCWjptvAOCj6Y97hGtdCVKTDKVjImA&usqp=CAU"
        />
        <button className="logoutbut" onClick={() => dispatch(logout())}>Logout</button>
        {/* <div className="drop-down">
          <KeyboardArrowDownIcon className="ricon1" />
          <div className="options">
            <span>Settings</span>
            <span onClick={() => dispatch(logout())}>Logout</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
