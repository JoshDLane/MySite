import React, { useEffect, useState } from 'react'

import Home from '../pages/home/home'
import CovidApp from '../pages/covidApp/covidApp'
import Contact from '../pages/contact/contact'
import ThisSite from '../pages/thisSite/thisSite'
import TopLogo from './topLogo/topLogo'
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
                <div>
                    <TopLogo />
                    <SideLinks/>
                    <Navbar top={atTop} onClick={showContact}/>
                    <Home top={atTop} />
                    <CovidApp />
                    <PoeAudio />
                    <ThisSite />
                    <Guitar/>
                    <Contact id={'contact'} />
                </div>
                {/* <Footer onMailClick={showContact}/> */}
            </div>
        </React.Fragment>

    )
}