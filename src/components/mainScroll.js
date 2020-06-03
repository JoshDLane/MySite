import React, { useEffect, useState } from 'react'
import Home from '../pages/home/home'
import CovidApp from '../pages/covidApp/covidApp'
import Contact from '../pages/contact/contact'
import Footer from '../pages/footer/footer'
import ThisWebsite from '../pages/thisWebsite/thisWebsite'
import TopLogo from './topLogo/topLogo'
import "./mainScroll.css"
import SectionTitle from './sectionTitle/sectionsTitle'
import Navbar from './navbar/navbar'
import ContactModal from './contactModal/contactModal'
import Guitar from '../pages/guitar/guitar'
import SideLinks from '../components/sidelinks/sidelinks'
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
                    <SectionTitle title="A Mobile Dashboard Using React Native and D3" section={"covid"}/>
                    <CovidApp />
                    <SectionTitle title="This Site!" section={"mysite"}/>
                    <ThisWebsite />
                    <SectionTitle section={"guitar"}/>
                    <Guitar/>
                    <Contact id={'contact'} />
                </div>
                {/* <Footer onMailClick={showContact}/> */}
            </div>
        </React.Fragment>

    )
}