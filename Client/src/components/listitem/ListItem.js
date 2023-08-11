import React, { useEffect, useState } from "react";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import "./ListItem.css";
import axios from "axios";
import { Link } from "react-router-dom";
function ListItem({ index, item }) {
  const [hovered, sethovered] = useState(false);
  const [movie, setmovie] = useState({});
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  useEffect(() => {
    const getmovie = async () => {
      try {
        const res = await axiosInstance.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setmovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getmovie();
  }, [item]);
  // console.log(movie);
  return (
    <Link to={{ pathname: "/watch" }} state={{ movie }}>
      <div
        className="listitem"
        style={{ left: hovered && index * 225 + index * 2.5 }}
        onMouseEnter={() => sethovered(true)}
        onMouseLeave={() => sethovered(false)}
      >
        {/* {!hovered && <img className="listitem-img" src={movie.img} alt="" />} */}
      <img className="listitem-img" src={movie.img} alt="" />
        {hovered && <video src={movie.trailer} autoPlay={true} loop muted />}
        {/* {hovered &&  <><iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1?controls=0&loop=1"   /> */}
        <div className="over-cont">
          <div className="item-info">
            <PlayArrowOutlinedIcon className="icon-2" />
            <AddOutlinedIcon className="icon-2" />
            <ThumbUpOutlinedIcon className="icon-2" />
            <ThumbDownOutlinedIcon className="icon-2" />
          </div>
          <div className="iteminfo-bot">
            <p>{movie.duration}</p>
            <p className="age-limit">+{movie.limit}</p>
            <p>{movie.year}</p>
          </div>
          <div className="description">{movie.desc}</div>
          <div className="genre">{movie.genre}</div>
        </div>


      </div>
    </Link>
  );
}

export default ListItem;
