import React, { useState } from "react";
import GuitarSlide from "../guitarSlide/guitarSlide";
import BikeSlide from "../bikeSlide/bikeSlide";

import "./slider.css";

function Slider(props) {
  let sliderArr = [<GuitarSlide />, <BikeSlide />];
  const [x, setX] = useState(0);

  const goRight = () => {
    console.log(x);
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  const goLeft = () => {
    x === 0 ? setX((sliderArr.length - 1) * -100) : setX(x + 100);
  };
  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" className="moveButton" onClick={goLeft}>
        <span id="leftArrow" className="chevron"></span>
      </button>
      <button id="goRight" className="moveButton" onClick={goRight}>
        <span id="rightArrow" className="chevron"></span>
      </button>
    </div>
  );
}

export default Slider;
