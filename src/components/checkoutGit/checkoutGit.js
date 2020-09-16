import React from "react";
import GitIcon from "../../components/gitIcon";
import "./checkoutGit.css";
import "../../styles/rootstyles.css";
import styled from "styled-components";

const GitText = styled.span`
  color: ${(props) => props.color};
`;
const GitIconCont = styled.a`
  & > svg {
    color: ${(props) => props.color};
  }
`;
const CheckoutGit = (props) => {

  return (
    <div className="checkout_git_root">
      <div className="center_column">
        <GitText className="myfont gitTxt">Check it out @</GitText>
      </div>
      <GitIconCont href={props.link} className="git_icon icon_hover">
        <GitIcon color={props.color} />
      </GitIconCont>
    </div>
  );
};

export default CheckoutGit;
