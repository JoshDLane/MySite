import React, {Linking} from 'react';
import './contact.css'
import '../../styles/rootstyles.css'

const Contact = () => {
    function emailMe(){
            window.location.href = 'mailto:joshdlane22@gmail.com';
        }
    return (
        <section id="contact" className="contact_sec_cont">
            <div className="contact_text myfont">
                <span className="contact_intro">Get in Touch!</span>
                <p className="contact_intro detail">Always looking to discuss new projects</p>
                <span className="contact_intro email" onClick={emailMe}>joshdlane22@gmail.com</span>
            </div>
        </section>
    );
};

export default Contact;


