import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

import CheckoutGit from "../../components/checkoutGit/checkoutGit";
import DownArrow from "../../components/downarrow/downarrow";
import SectionTitle from "../../components/sectionTitle/sectionsTitle";

import "./thisWebsite.css";
import "../../styles/rootstyles.css";



export default function ThisSite() {
  const [ref2, inView] = useInView({
    rootMargin: "-125px 0px -200px 0px",
  });

  const opacitySpring = useSpring({
    opacity: inView ? 1 : 0,
  });

  return (
    <section className="section_content sec_background">
      <SectionTitle
        title="This Site!"
        tools={["React", "Javascript", "CSS", "Netlify"]}
      />

      <div className="segment_row mysite_background">
        <animated.div ref={ref2} style={opacitySpring} className="page_left">
          <div className="siteImage_container">
            <img
              src={require("../../images/testing.png")}
              className="siteImage"
            />
          </div>
        </animated.div>
        <animated.div className="page_right" style={opacitySpring}>
          <p className="myfont white">
            After really enjoying using React Native, I knew I wanted my next
            web dev project to use React
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
