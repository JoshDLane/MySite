import React from 'react';
import "./footer.css"
const Footer = () => {
    function test() {
        console.log('hi')
    }
    return (
        <section className="footer_container">
            <button onClick={test}>hi</button>
        </section>
    );
};

export default Footer;