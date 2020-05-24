
import React from 'react'
import './covidApp.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'


const CovidDescription = () => {

    const [refTitle, titleInView, entrytitle] = useInView({
        root: document.window,
        threshold: .1,
    })
    const opacitySpring = useSpring({
        opacity: titleInView ? 1 : 0
    })

    return (
        <div>
            <animated.div ref={refTitle} style={opacitySpring} className="covid_title_cont">
                <h2 className="main_title">
                    A Mobile Dashboard Using React Native and D3
                    </h2>
            </animated.div>
        </div>
    );
};

export default CovidDescription;




