import React, { useEffect, useState } from 'react'
import Home from '../pages/home/home'
import CovidApp from '../pages/covidApp/covidApp'
import Contact from '../pages/contact/contact'
import ThisWebsite from '../pages/thisWebsite/thisWebsite'
import TopLogo from './topLogo/topLogo'
import SectionTitle from './sectionTitle/sectionsTitle'
import Navbar from './navbar/navbar'
import ContactModal from './contactModal/contactModal'
import Guitar from '../pages/guitar/guitar'
import SideLinks from '../components/sidelinks/sidelinks'
import PoeAudio from '../pages/poeAudio/poeAudio'
import "./mainScroll.css"

export default function MainScroll() {

    const [atTop, setAtTop] = useState(true)
    const [contactModal, setContactModal] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 150;
            const total = window.outerHeight
            if (isTop) {
                setAtTop(true)
            }
            else {
                setAtTop(false)
            }
        })
    }, [])

    function showContact() {
        setContactModal(true)
    }
    function closeModal() {
        setContactModal(false)
        console.log('setting close')
        console.log(contactModal)
    }

    return (
        <React.Fragment>
            <div className={`page_content ${contactModal ? 'hideScroll' : ''}`}>
                <ContactModal show={contactModal} setModalClosed={closeModal}/>
                <div className="side_pads">
                    <TopLogo />
                    <SideLinks/>
                    <Navbar top={atTop} onClick={showContact}/>
                    <Home top={atTop} />
                    <SectionTitle title="A Mobile Dashboard Using React Native and D3" tools={["React Native", "Javascript","D3"]}/>
                    <CovidApp />
                    <SectionTitle title="Poe - Audio Poems" tools={["React Native", "NLP","AWS"]}/>
                    <PoeAudio />
                    <SectionTitle title="This Site!" tools={["React", "Javascript", "CSS", "Netlify"]}/>
                    <ThisWebsite />
                    <SectionTitle title="Do I play guitar? No. Did I really want to build one? Yes..." tools={["Wood"]}/>
                    <Guitar/>
                    <Contact id={'contact'} />
                </div>
                {/* <Footer onMailClick={showContact}/> */}
            </div>
        </React.Fragment>

    )
}