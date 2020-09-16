import React from "react";
import "../../styles/rootstyles.css";
import "./bikeSlide.css";
function BikeSlide(props) {
  return (
    <div className="slide_cont">
      <div className="page_left">
        <div className="slide_img_cont">
          <img
            src={require("../../images/bambooBike.jpeg")}
          />
        </div>
      </div>
      <div className="page_right">
        <span className="myfont white paragraph_size">Bamboo Bike -</span>
        <div className="body">
          <p className="myfont white paragraph_size bottom_pad">
            A completely organic bike frame
            using bamboo and hemp fiber for joints
          </p>
          <span className="myfont white">Fun Fact!</span>
          <p className="myfont white smaller_font">
            Bamboo is the fastest growing plant on the planet (up to 3 ft in one
            day) and has a weight to strength ratio as strong as both steel and
            graphite.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BikeSlide;
