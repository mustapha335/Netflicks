import React, { useRef, useState } from "react";
import ArrowBack from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForward from "@material-ui/icons/ArrowForwardIosOutlined";
import ListItem from "../ListItem/listItem";
import "./List.scss";

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, selectClickLimit] = useState(window.innerWidth / 230);
  const [isMoved, setIsMoved] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      {/* {console.log(list)} */}
      <div className="wrapper">
        <ArrowBack
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem index={i} item={item} key={i} />
          ))}
          ;
        </div>
        <ArrowForward
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
