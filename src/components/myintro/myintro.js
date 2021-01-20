import React from "react";

import { useSpring, animated } from "react-spring";
// import { bounce } from "react-animations";
// import styled, { keyframes } from "styled-components";
import DownArrow from "../downarrow/downarrow";
import {isMobile} from 'react-device-detect';

import "./myintro.css";


export default function MyIntro(props) {

  // const Bounce = styled.div`
  //   animation: 2s ${keyframes`${bounce}`};
  // `;

  const opacitySpring = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 3000,
    config: { mass: 1, tension: 100, friction: 120 },
  });

  return (
    <animated.div style={opacitySpring}>
      {/* <Bounce>
                <div className="profilepic_container">
                    <img src= {require("../../styles/test_face.png")} alt="portrait" className="profilepic"/>
                </div>
            </Bounce> */}
      <div className="home_intro_root">
        <div className="intro_container">
          <div className="hi_cont">
            <span className="before_name myfont home_title_size"> Hi, I'm </span>
            <span className="name myfont home_title_size">Josh</span>
          </div>

          {/* <p className="white myfont subtitle intro">Constantly learning while creating</p> */}
          <div className="grey intro">
             <div className="myfont big_sub_size qualities">
             <span>Creator.</span>
              <span>Problem Solver.</span>
              <span>Outcome Driven.</span>
            </div>

            <p className="myfont paragraph_size">
              Genomics | Data Science | Full Stack Dev
            </p>
          </div>

          {/* <p className="white myfont subtitle intro">A creator and problem solver </p> */}
        </div>

        <DownArrow show={props.top} title={"Checkout some of my work"} />
      </div>
    </animated.div>
  );
}
