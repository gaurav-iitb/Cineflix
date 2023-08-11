import List from "../../components/list/List";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Home({ type }) {
  const [ lists, setlists ] = useState([]);
  const [genre, setgenre] = useState(null);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });


  useEffect(() => {
    const getrandomlists = async () => {
      try {
        const res = await axiosInstance.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        console.log(
          `lists${type ? "?type=" + type : ""}&${genre ? "genre=" + genre : ""}`
        );
        setlists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getrandomlists();
  }, [genre, type]);

  return (
    <div className="homepage">
      <Navbar />
      <Featured type={type} setgenre = {setgenre}/>
      {lists.map((list) => (
          <List list={list} />
      ))}
      
    </div>
  );
}

export default Home;
