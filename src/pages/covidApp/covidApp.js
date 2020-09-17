import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import SectionTitle from "../../components/sectionTitle/sectionsTitle";
import CheckoutGit from "../../components/checkoutGit/checkoutGit";
import covidimg1 from "../../images/covidScreenshotLineG.png"
import covidimg2 from "../../images/covidScreenshotHome.png"

import "./covidApp.css";
import "../../styles/rootstyles.css";

const CovidApp = (props) => {
  const [ref, inView] = useInView({
    rootMargin: "-125px 0px -200px 0px",
  });

  // const screenshotSprings = useSpring({
  //   transform: inView ? "translate3d(0vw,0,0)" : "translate3d(-10vw,0,0)",
  //   opacity: inView ? 1 : 0,
  // });

  const opacitySpring = useSpring({
    opacity: inView ? 1 : 0,
  });

  return (
    <section className="section_content sec_background cov_background">
      <SectionTitle
        title="A Mobile Dashboard Using React Native and D3"
        tools={["React Native", "Javascript Light", "D3"]}
      />
      <div className="segment_row covid_cont">
        <div className="page_left" ref={ref}>

          <TransitionGroup style={{ width: "100%", height: "100%" }}>
            {inView && (
              <CSSTransition timeout={3000} classNames="from-left">
                <div className="screenshot_root_cov">
                  <div className="screenshot_container">
                    <img
                      src={covidimg1}
                      alt="appImg1"
                      className="screenshot"
                    />
                  </div>
                  <div className="screenshot_container">
                    <img
                      src={covidimg2}
                      alt="appImg2"
                      className="screenshot"
                    />
                  </div>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>

        </div>
        <animated.div className="page_right" style={opacitySpring}>
          <p className="myfont white paragraph_size">
            Integrated an API offered by the New York State Department of Health
            to provide
            <span className="myblue paragraph_size">
              {" "}
              up to date testing data on the county level
            </span>{" "}
          </p>
          <p className="myfont white paragraph_size">
            Utilized D3 to geomap the data and create interactive time series
            charts
          </p>
          <CheckoutGit
            link="https://github.com/JoshDLane/NYSCovidTesting"
            color="white"
          />
        </animated.div>
      </div>
    </section>
  );
};

export default CovidApp;
