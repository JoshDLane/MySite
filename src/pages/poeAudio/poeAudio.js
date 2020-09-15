import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import SectionTitle from "../../components/sectionTitle/sectionsTitle";
import CheckoutGit from "../../components/checkoutGit/checkoutGit";

import "../../styles/rootstyles.css";
import "./poeAudio.css";

const PoeAudio = (props) => {
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
  const poePics = [
    {
      name: "primary",
      img: require("../../images/poeAudioScreenshot1.png"),
    },
    {
      name: "secondary",
      img: require("../../images/poeAudioScreenshot2.png"),
    },
    {
      name: "tertiary",
      img: require("../../images/poeAudioScreenshot3.png"),
    },
  ];
  return (
    <section className="section_content sec_background poe_background">
      <SectionTitle
        title="Poe - Audio Poems"
        tools={["React Native", "TF", "NLP", "AWS Dark"]}
        color="pink"
      />
      <div className="segment_row covid_cont">
        <div className="page_left" ref={ref}>
          {/* <animated.span ref={ref} style={screenshotSprings} className="screenshot_root_poe">
                            <div className="audio_poem_shots">
                                <img src={require("../../images/poeAudioScreenshot1.png")} className="screenshot_poe" />
                            </div>
                            <div className="audio_poem_shots">
                                <img src={require("../../images/poeAudioScreenshot2.png")} className="screenshot_poe" />
                            </div>
                            <div className="audio_poem_shots">
                                <img src={require("../../images/poeAudioScreenshot3.png")} className="screenshot_poe" />
                            </div>
                        </animated.span> */}
          <TransitionGroup className="screenshot_root_poe">
            {inView &&
              poePics.map((item, i) => (
                <CSSTransition
                  key={item.name}
                  timeout={3000}
                  classNames="fade-in"
                  style={{ transitionDelay: `${inView ? i * 200 : 0}ms` }}
                >
                  <div className="audio_poem_shots">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="screenshot_poe"
                    />
                  </div>
                </CSSTransition>
              ))}
          </TransitionGroup>
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

export default PoeAudio;
