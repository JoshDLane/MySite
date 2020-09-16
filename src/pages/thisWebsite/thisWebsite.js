import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

import CheckoutGit from "../../components/checkoutGit/checkoutGit";
import DownArrow from "../../components/downarrow/downarrow";
import SectionTitle from "../../components/sectionTitle/sectionsTitle";

import "./thisWebsite.css";
import "../../styles/rootstyles.css";



export default function ThisSite() {
  const [ref, inView] = useInView({
    rootMargin: "-125px 0px -200px 0px",
  });

  const opacitySpring = useSpring({
    opacity: inView ? 1 : 0,
  });


  return (
    <section className="section_content sec_background">
      <SectionTitle
        title="This Site!"
        tools={["React", "Javascript Light", "CSS Light", "Netlify"]}
        color="white"
      />

      <div className="segment_row mysite_background">
        <animated.div ref={ref} style={opacitySpring} className="page_left">
          <div className="siteImage_container">
            <img
              src={require("../../images/testing.png")}
              className="siteImage"
            />
          </div>
        </animated.div>
        <animated.div className="page_right" style={opacitySpring}>
          <p className="myfont white paragraph_size">
            I use this website as a platform for me to continue growing my web development skills using React, Javascript & CSS
          </p>
          <CheckoutGit
            link="https://github.com/JoshDLane/MySite"
            color="white"
          />
        </animated.div>
        <DownArrow show={inView} title={"Checkout some of my work"} />
      </div>
    </section>
  );
}
