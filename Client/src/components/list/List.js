import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ListItem from "../listitem/ListItem";
import "./List.css";

function List({ list }) {
  const containerref = useRef();
  const [slidedl, setslidedl] = useState(false);
  const [slideno, setslideno] = useState(0);
  const [clicklimit,setclicklimit] = useState(window.innerWidth/230);

  useEffect(() => {
    if (slideno === 0) {
      setTimeout(() => {
        setslidedl(false);
      }, 1000);
    }
  }, [slideno]);

  function SliderClick(direction) {
    let distance = containerref.current.getBoundingClientRect().x - 50;
    if (direction === "right" && slideno < 10 - clicklimit) {
      setslidedl(true);
      setslideno(slideno + 1);
      containerref.current.style.transform = `translate(${-230 + distance}px) `;
    } else if (direction === "left" && slideno > 0) {
      setslideno(slideno - 1);
      containerref.current.style.transform = `translate(${230 + distance}px) `;
    }
    // console.log(distance);
  }
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        {slidedl && (
          <KeyboardArrowLeftIcon
            onClick={() => SliderClick("left")}
            className="slider-left"
          />
        )}
        <div className="container-1" ref={containerref}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
        </div>
        <KeyboardArrowRightIcon
          onClick={() => SliderClick("right")}
          className="slider-right"
        />
      </div>
    </div>
  );
}

export default List;
