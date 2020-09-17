import React from 'react';
import '../../styles/rootstyles.css'
import './navlinks.css'
import { Link } from "react-scroll";

const NavLinks = (props) => {
    return (
        <div className="align_center_row">
            <div className="link_container">
                <Link to='contact' smooth={true}>
                    <div className="nav_link">CONTACT</div>
                </Link>
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