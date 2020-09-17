import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./toolIcons.css";

export default function ToolIcons(props) {
  const [useTools, setUseTools] = useState([]);

  const tools = [
    {
      name: "React Native",
      src: require("../../images/react_native_logo.png"),
    },
    {
      name: "React",
      src: require("../../images/React_logo.png"),
    },
    {
      name: "NLP",
      src: require("../../images/nlp_logo.png"),
    },
    {
      name: "Drawing",
      src: require("../../images/light_drawing_logo.png"),
    },
    {
      name: "AWS",
      src: require("../../images/aws_logo.png"),
    },
    {
      name: "AWS Dark",
      src: require("../../images/aws_logo_dark.png"),
    },
    {
      name: "Javascript",
      src: require("../../images/javascript_logo.png"),
    },
    {
      name: "Javascript Light",
      src: require("../../images/js_logo_light.png"),
    },
    {
      name: "CSS",
      src: require("../../images/css_logo.png"),
    },
    {
      name: "CSS Light",
      src: require("../../images/css_logo_light.png"),
    },
    {
      name: "D3",
      src: require("../../images/d3_logo.png"),
    },
    {
      name: "Netlify",
      src: require("../../images/netlify_logo.png"),
    },
    {
      name: "Wood",
      src: require("../../images/wood.png"),
    },
    {
      name: "TF",
      src: require("../../images/tf_logo.png"),
    },
  ];

  useEffect(() => {
    tools.forEach(({ name, src }) => {
    const img = new Image();
    img.src = src;
    });
  }, []);

  const currentTools = tools.filter((tool) => useTools.includes(tool.name));

  useEffect(() => {
    if (props.tools) {
        console.log(props.tools)
      setUseTools(props.tools);
    }
  }, [props.tools]);

  return (
    <TransitionGroup className="tools_root">
      {props.show &&
        currentTools.map((item, i) => (
          <CSSTransition
            key={item.name}
            timeout={3000}
            classNames="fade-up"
            style={{ transitionDelay: `${props.show ? i * 100 : 0}ms` }}
          >
            <div className="tool_img">
              <img src={item.src} alt={item.name} />
            </div>
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
}
