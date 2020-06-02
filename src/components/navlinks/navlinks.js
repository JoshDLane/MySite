import React from 'react';
import '../../styles/rootstyles.css'
import './navlinks.css'
const NavLinks = (props) => {
    return (
        <div className="align_center_row">
            <div className="link_container">
                <div className="nav_link" onClick={props.onContact}>CONTACT</div>
            </div>
            <span className="seperator">|</span>
            <div className="link_container">
                <a className="nav_link" href="/resume.pdf"
                    target="_blank"
                    rel="nofollow noopener noreferrer">RESUME</a>
            </div>
        </div>
    );
};

export default NavLinks;