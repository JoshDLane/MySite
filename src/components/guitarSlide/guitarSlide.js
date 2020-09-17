import React from "react";

import guitarImg from "../../images/guitar_pic.jpeg"

import "../../styles/rootstyles.css";
import "./guitarSlide.css";

function GuitarSlide(props) {
  return (
    <div className="slide_cont">
      <div className="page_left">
        <div className="slide_img_cont">
          <img
            src={guitarImg}
            alt="guitarImg"
          />
        </div>
      </div>
      <div className="page_right">
        <span className="myfont white paragraph_size">Electric Guitar -</span>
        <p className="myfont white paragraph_size main_txt">
          It was the summer I spent building this guitar that I realized the joy
          I get from taking on big projects
        </p>
      </div>
    </div>
  );
}

export default GuitarSlide;
