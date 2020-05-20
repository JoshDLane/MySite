import React, { useEffect, useState, useRef } from 'react';
import './covidApp.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'


const CovidApp = (props) => {
    const [ref, inView] = useInView({
        rootMargin: '-200px 0px',
    })
    const [refTitle, titleInView] = useInView({
        rootMargin: '-100px 0px',
    })

    const screenshotSprings = useSpring({
        transform: inView ? 'translate3d(0vw,0,0)' : 'translate3d(-10vw,0,0)',
        opacity: inView ? 1 : 0
    })

    const opacitySpring = useSpring({
        opacity: titleInView ? 1 : 0
    })

    return (
        <section className="covid_container">
            <div className="covid_title_cont">
                <animated.div ref={refTitle} style={opacitySpring}>
                    <h2 className="main_title">
                        A Mobile Dashboard Using React Native and D3
                    </h2>
                </animated.div>

            </div>
            <div className="screenshot_root">
                <animated.div ref={ref} style={screenshotSprings} className="screenshot_container c_home animate" id="animate">
                    <img src={require("../../assets/covidScreenshotHome.png")} className="screenshot" />
                </animated.div>
                <animated.div ref={ref} style={screenshotSprings} className="screenshot_container c_line animate" id="animate">
                    <img src={require("../../assets/covidScreenshotLineG.png")} className="screenshot" />
                </animated.div>
            </div>
        </section>
    );
};

export default CovidApp;