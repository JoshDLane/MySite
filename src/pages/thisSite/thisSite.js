import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import compImg from "../../images/macdisplay.png";
import SectionTitle from "../../components/sectionTitle/sectionsTitle";

import "../../styles/rootstyles.css";
import "./thisSite.css";

const ThisSite = (props) => {
  const [ref, inView] = useInView({
    rootMargin: "-125px 0px -200px 0px",
  });

  return (
    <section className="section_content sec_background">
      <SectionTitle
        title="This Site!"
        tools={["React", "CSS Light", "Javascript Light", "Netlify"]}
        color="white"
      />
      <div ref={ref} className={`segment_row covid_cont fadeout ${inView && "fadein"}`}>
        <div className="page_left">
          <div className="siteImage_container">
            <img src={compImg} alt="compImg" className="siteImage" />
          </div>
        </div>
        <div className="page_right">
          <p className="myfont paragraph_size white">
            I use this website as a platform for me to continue growing my web
            development skills using React, Javascript & CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThisSite;
