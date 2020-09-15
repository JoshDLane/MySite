import React from 'react';
import '../../styles/rootstyles.css'
import './guitarSlide.css'
function GuitarSlide(props) {
    return (
        <div className="slide_cont">
        <div className="page_left">
          <div className="guitar_image_container">
            <img
              src={require("../../images/guitar_pic.jpeg")}
              className="guitar_image"
            />
          </div>
        </div>
        <div className="page_right">
          <p className="myfont white paragraph_size">
            My sophmore year of highschool I recieved a grant to build an
            electric guitar during the summer. I loved spending most my waking
            hours on it and these memories drive me to seek projects that
            continue to push me
          </p>
        </div>
        </div>
    );
}

export default GuitarSlide;