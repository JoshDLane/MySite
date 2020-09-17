import React from "react";

import SectionTitle from "../../components/sectionTitle/sectionsTitle";
import Slider from "../../components/slider/slider";

import "../../styles/rootstyles.css";
import "./guitar.css";

const Guitar = () => {
  // const [ref2, inView] = useInView({
  //   rootMargin: "-125px 0px -200px 0px",
  // });

  // const opacitySpring = useSpring({
  //   opacity: inView ? 1 : 0,
  // });

  return (
    <section className="section_content sec_background guitar_background">
      <SectionTitle
        title="My more physical projects..."
        tools={["Wood", "Drawing"]}
      />
      <div className="segment_row">
        <Slider/>
        {/* <animated.div ref={ref2} style={opacitySpring} className="page_left">
          <div className="guitar_image_container">
            <img
              src={require("../../images/guitar_pic.jpeg")}
              className="guitar_image"
            />
          </div>
        </animated.div>
        <animated.div className="page_right" style={opacitySpring}>
          <p className="myfont white">
            My sophmore year of highschool I recieved a grant to build an
            electric guitar during the summer. I loved spending most my waking
            hours on it and these memories drive me to seek projects that
            continue to push me
          </p>
        </animated.div> */}
      </div>
    </section>
  );
};

export default Guitar;
