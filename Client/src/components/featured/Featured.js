import "./Featured.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "axios";
import { useEffect, useState } from "react";

function Featured({ type, setgenre }) {
  const [content, setcontent] = useState({});
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });


  useEffect(() => {
    const getRandomcontent = async () => {
      try {
        // const res = await axios.get(`/movies/random?type=${type}`, {
          const res = await axiosInstance.get(`/movies/random${type?"?type="+type: ""}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setcontent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomcontent();
  }, [type]);
console.log(content)
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span className="span-ele">
            {type === "movie" ? "Movies" : "Series"}
          </span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setgenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img className="backg-image" src={content.img} />
      <div className="info">
        <img className="imgbag" src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play-movie">
            <PlayArrowIcon />
            <p>Play</p>
          </button>
          <button className="infoinner">
            <InfoOutlinedIcon />
            <p>Info</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
