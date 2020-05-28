import React from 'react';
import './covidApp.css'
import '../../assets/rootstyles.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import CheckoutGit from '../../components/checkoutGit/checkoutGit'

const CovidApp = (props) => {

    const [ref, inView ] = useInView({
        rootMargin: '-125px 0px -200px 0px',
    })
 
    const screenshotSprings = useSpring({
        transform: inView ? 'translate3d(0vw,0,0)' : 'translate3d(-10vw,0,0)',
        opacity: inView ? 1 : 0

    })

    const opacitySpring = useSpring({
        opacity: inView ? 1 : 0
    })
    return (
            <section className="section_content">
                <div className="segment_row covid_cont">
                    <div className="page_left">
                        <animated.div ref={ref} style={screenshotSprings} className="screenshot_root">
                            <div className="screenshot_container">
                                <img src={require("../../assets/img/covidScreenshotHome.png")} className="screenshot" />
                            </div>
                            <div className="screenshot_container">
                                <img src={require("../../assets/img/covidScreenshotLineG.png")} className="screenshot" />
                            </div>
                        </animated.div>
                    </div>
                    <animated.div class="page_right" style={opacitySpring}>
                        <p className="myfont white">Integrated an API offered by the New York State Department of Health to provide 
                            <span className="emphasized teal"> up to date, reliable, testing data on the county level</span> </p>
                        <p className="myfont white">Utilized D3 to geomap the data and create an interactive line chart to view the data over time</p>
                        <CheckoutGit link="https://github.com/JoshDLane/NYSCovidTesting"/>
                    </animated.div>
                </div>
        </section>

    );
};  

export default CovidApp;