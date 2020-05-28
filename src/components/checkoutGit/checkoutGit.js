import React from 'react';
import GitIcon from '../../components/gitIcon'
import './checkoutGit.css'
const CheckoutGit = (props) => {
    return (
        <div className="checkout_git_root">
            <div class="center_column">
                <span className="myfont gitTxt white">Check it out @</span>
            </div>
                <a href={props.link} className="github_img_container" style={{fill: props.color}}>
                        <GitIcon />
                </a>
            </div>
    );
};

export default CheckoutGit;