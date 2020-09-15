import React from "react";
import "./sectionTitle.css";
import "../../styles/rootstyles.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import ToolIcons from "../toolIcons/toolIcons";

const SectionTitle = (props) => {
  const [titleRef, titleInView] = useInView({
    rootMargin: "-100px 0px -200px 0px",
  });
  const Title = styled.span`
    color: ${props.color};
  `;
  const opacitySpring = useSpring({
    opacity: titleInView ? 1 : 0,
  });
  return (
    <div>
      <animated.div
        ref={titleRef}
        style={opacitySpring}
        className="section_title_cont"
      >
        <Title className="section_title">
          {props.title}
        </Title>
      </animated.div>
      <ToolIcons show={titleInView} tools={props.tools} />
    </div>
  );
};

export default SectionTitle;
