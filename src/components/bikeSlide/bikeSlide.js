import React from "react";
import "../../styles/rootstyles.css";
import "./bikeSlide.css";
function BikeSlide(props) {
  return (
    <div className="slide_cont">
      <div className="page_left">
        <div className="guitar_image_container">
          <img
            src={require("../../images/bambooBike.jpeg")}
            className="guitar_image"
          />
        </div>
      </div>
      <div className="page_right">
        <span className="myfont white">Bamboo Bike -</span>
        <div className="padding">
          <p className="myfont white">
            I thought it would be cool to build a completely organic bike frame
            using bamboo and hemp fiber for joints.
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
