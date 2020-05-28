import React from 'react'
import './thisWebsite.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import '../../assets/rootstyles.css'
import CheckoutGit from '../../components/checkoutGit/checkoutGit'
import DownArrow from '../../components/downarrow/downarrow'

export default function ThisSite() {
    const [ref2, inView] = useInView({
        rootMargin: '-125px 0px -200px 0px',
    })

    const opacitySpring = useSpring({
        opacity: inView ? 1 : 0
    })

    return (
        <section className='section_content'>
            <div className='segment_row mysite_background'>
                <animated.div ref={ref2} style={opacitySpring} className="page_left">
                    <div className="siteImage_container" >
                        <img src={require("../../assets/img/mysitephoto.png")} className="siteImage" />
                    </div>
                </animated.div>
                <animated.div class="page_right" style={opacitySpring}>
                    <p className="myfont white">Really enjoyed using React for the web for the first time and experimenting with different animation tools</p>
                    <CheckoutGit link="https://github.com/JoshDLane/MySite" />
                </animated.div>
                <DownArrow show={inView} title={'Checkout some of my work'}/>
            </div>
        </section>
    )
}