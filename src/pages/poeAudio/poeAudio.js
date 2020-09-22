import React, {useEffect} from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import pic1 from "../../images/poeAudioScreenshot1.png";
import pic2 from "../../images/poeAudioScreenshot2.png";
import pic3 from "../../images/poeAudioScreenshot3.png";
import SectionTitle from "../../components/sectionTitle/sectionsTitle";
import AppStoreButton from "../../components/appStoreButton/appStoreButton";

import "../../styles/rootstyles.css";
import "./poeAudio.css";

const PoeAudio = (props) => {
  const [ref, inView] = useInView({
    rootMargin: "-125px 0px -200px 0px",
  });

  const opacitySpring = useSpring({
    opacity: inView ? 1 : 0,
  });
  const poePics = [
    {
      name: "primary",
      src: pic1,
    },
    {
      name: "secondary",
      src: pic2,
    },
    {
      name: "tertiary",
      src: pic3,
    },
  ];

  useEffect(()=>{
    poePics.forEach(({name, src})=>{
      const img = new Image();
      img.src = src;
    })
  }, [])

  return (
    <section className="section_content sec_background poe_background">
      <SectionTitle
        title="Poe - Audio Poems"
        tools={["React Native", "TF", "NLP", "AWS Dark"]}
        color="black"
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
            <div className="screenshot_root_poe">
              {poePics.map((item, i) => (
                    <img
                      src={item.src}
                      alt={item.name}
                      className={`screenshot_poe fadeout ${inView && "fadein"}`}
                      style={{ transitionDelay: `${inView ? i * 150 : 0}ms` }}
                      />
              ))}
          </div>
          {/* <TransitionGroup className="screenshot_root_poe">
            {inView &&
              poePics.map((item, i) => (
                <CSSTransition
                  key={item.name}
                  timeout={1000}
                  transitionAppear={true}
                  transitionAppearTimeout={1000}
                  transitionTimeout={1000}
                  classNames="fade-in"
                  style={{ transitionDelay: `${inView ? i * 200 : 0}ms` }}
                >
                    <img
                      src={item.src}
                      alt={item.name}
                      className="screenshot_poe"
                    />
                </CSSTransition>
              ))}
          </TransitionGroup> */}
        </div>
        <animated.div className="page_right" style={opacitySpring}>
          <p className="myfont paragraph_size">
            Audio poem player and recomendation system
            {/* <span className="emphasized teal paragraph_size">
              {" "}
              up to date testing data on the county level
            </span>{" "} */}
          </p>
          <p className="myfont paragraph_size">
            Implimented a lightweight version of the Universal Sentence Encoder
            as a REST API with AWS to power the apps recomendations
          </p>
          {/* <CheckoutGit
            link="https://github.com/JoshDLane/NYSCovidTesting"
            dark={true}
          /> */}
          <a
            href="https://apps.apple.com/us/app/poe-audio-poems/id1529015835"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppStoreButton />
          </a>
        </animated.div>
      </div>
    </section>
  );
};

export default PoeAudio;
