import React, { useEffect, useState } from "react";
import "./sectionTitle.css";
import "../../styles/rootstyles.css";

import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import ToolIcons from "../toolIcons/toolIcons";

const Title = styled.span`
    color: ${props => props.color};
  `;

const SectionTitle = (props) => {
  const [tools, setTools] = useState([])
  const [titleRef, titleInView] = useInView({
    rootMargin: "-100px 0px -200px 0px",
  });

  const opacitySpring = useSpring({
    opacity: titleInView ? 1 : 0,
  });
  useEffect(()=>{
    setTools(props.tools)
  }, [])
  return (
    <div>
      <animated.div
        ref={titleRef}
        style={opacitySpring}
        className="section_title_cont"
      >
        <Title className="section_title" color={props.color}>
          {props.title}
        </Title>
      </animated.div>
      <ToolIcons show={titleInView} tools={tools} />
    </div>
  );
};

export default SectionTitle;
