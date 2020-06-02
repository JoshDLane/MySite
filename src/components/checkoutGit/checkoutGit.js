import React from 'react';
import GitIcon from '../../components/gitIcon'
import './checkoutGit.css'
import '../../styles/rootstyles.css'
const CheckoutGit = (props) => {
    return (
        <div className="checkout_git_root">
            <div className="center_column">
                <span className="myfont gitTxt white">Check it out @</span>
            </div>
                <a href={props.link} className="git_icon icon_hover" >
                        <GitIcon />
                </a>
            </div>
    );
};

export default CheckoutGit;