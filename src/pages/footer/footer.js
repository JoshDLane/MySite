import React from 'react';
import MailIcon from '../../components/mailIcon'
import LinkdinIcon from '../../components/linkdinIcon'
import GitIcon from '../../components/gitIcon'
import "./footer.css"

const Footer = (props) => {

    return (
        <section className="footer_container">
            <span className="iconContainer">
                <div onClick={props.onMailClick} className="icon mail">
                    <MailIcon />
                </div>
                <a href="https://github.com/JoshDLane"  className="icon">
                    <GitIcon />
                </a>
                <a href="https://linkedin.com/in/josh-lane-4a51a0145" className="icon">
                    <LinkdinIcon />
                </a>
            </span>
        </section>
    );
};

export default Footer;