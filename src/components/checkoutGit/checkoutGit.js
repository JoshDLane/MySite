import React, {useEffect} from "react";
import GitIcon from "../../components/gitIcon";
import styled from "styled-components";

import "./checkoutGit.css";
import "../../styles/rootstyles.css";

const GitText = styled.span`
  color: ${(props) => props.color};
`;

const CheckoutGit = (props) => {

useEffect(()=>{
  console.log(props.link)
  }, [props.link])
  
  return (
    <div className="checkout_git_root">
      <div className="center_column">
        <GitText className={`myfont gitTxt ${props.dark ? "dark" : "light"}`}>Check it out @</GitText>
      </div>
      <a href={props.link} className={`git_icon icon_hover ${props.dark ? "dark" : "light"}`}>
        <GitIcon />
      </a>
    </div>
  );
};

export default CheckoutGit;
