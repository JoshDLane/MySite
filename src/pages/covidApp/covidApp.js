import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import SectionTitle from "../../components/sectionTitle/sectionsTitle";
import CheckoutGit from "../../components/checkoutGit/checkoutGit";

import "./covidApp.css";
import "../../styles/rootstyles.css";

const CovidApp = (props) => {
  const [ref, inView] = useInView({
    rootMargin: "-125px 0px -200px 0px",
  });

  const screenshotSprings = useSpring({
    transform: inView ? "translate3d(0vw,0,0)" : "translate3d(-10vw,0,0)",
    opacity: inView ? 1 : 0,
  });

  const opacitySpring = useSpring({
    opacity: inView ? 1 : 0,
  });
  const myContext = (
    <div>
      <div className="screenshot_root_cov">
        <div className="screenshot_container">
          <img
            src={require("../../images/covidScreenshotHome.png")}
            className="screenshot"
          />
        </div>
        <div className="screenshot_container">
          <img
            src={require("../../images/covidScreenshotLineG.png")}
            className="screenshot"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="section_content sec_background cov_background">
      <SectionTitle
        title="A Mobile Dashboard Using React Native and D3"
        tools={["React Native", "Javascript Light", "D3"]}
      />
      <div className="segment_row covid_cont">
        <div className="page_left" ref={ref}>
          {/* <Transition
                items={inView}
                from={{ opacity: 0, transform: 'translate3d(-10vw,0,0)'}}
                enter={{ opacity: 1, transform: 'translate3d(0vw,0,0)'}}
                leave={{ opacity: 0, transform: 'translate3d(-10vw,0,0)'}}
                config={config.molasses}>
                {inView => inView && (props => <div style={props}>{myContext}</div>)}
            </Transition> */}
          <TransitionGroup style={{ width: "100%", height: "100%" }}>
            {inView && (
              <CSSTransition timeout={3000} classNames="from-left">
                <div className="screenshot_root_cov">
                  <div className="screenshot_container">
                    <img
                      src={require("../../images/covidScreenshotHome.png")}
                      className="screenshot"
                    />
                  </div>
                  <div className="screenshot_container">
                    <img
                      src={require("../../images/covidScreenshotLineG.png")}
                      className="screenshot"
                    />
                  </div>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>

          {/* <animated.div ref={ref} style={screenshotSprings} className="screenshot_root">
                            <div className="screenshot_container">
                                <img src={require("../../images/covidScreenshotHome.png")} className="screenshot" />
                            </div>
                            <div className="screenshot_container">
                                <img src={require("../../images/covidScreenshotLineG.png")} className="screenshot" />
                            </div>
                        </animated.div> */}
        </div>
        <animated.div className="page_right" style={opacitySpring}>
          <p className="myfont white">
            Integrated an API offered by the New York State Department of Health
            to provide
            <span className="emphasized teal">
              {" "}
              up to date testing data on the county level
            </span>{" "}
          </p>
          <p className="myfont white">
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
