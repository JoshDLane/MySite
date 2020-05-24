import React, { useEffect, useState, useRef } from 'react';
import './covidApp.css'
import { useInView } from 'react-intersection-observer'
import { Transition, config } from 'react-spring/renderprops'
import { useSpring, animated } from 'react-spring'

function useOnScreen(options) {
    const picref = useRef();
    const [showScreenshots, setShowScreenshots] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setShowScreenshots(entry.isIntersecting);
        }, options);

        if (picref.current) {
            observer.observe(picref.current)
        }

        return () => {
            if (picref.current) {
                observer.unobserve(picref.current)
            }
        }
    }, [picref, options])

    return [picref, showScreenshots];

}

// const selections = document.querySelectorAll("div")

// console.log('hi')
// console.log(selections)
// const options = {
//     threshold: 0.2
// }

// const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach((entry) => {
//         console.log(entry)
//     })
// }, options)

// selections.forEach(section => {
//     observer.observe(section)
// })

const CovidApp = (props) => {
    // const [showScreenshots, setShowScreenshots] = useState(true)

    // const [picref, showScreenshots] = useOnScreen({ rootMargin: '-10%' })
    const [ref, inView] = useInView({
        rootMargin: '-100px 0px',
      })
    // console.log('screenshot', showScreenshots)

    // useEffect(() => {
    //     // if (props.show){
    //     //     setShowScreenshots(true)
    //     // }
    //     // else{
    //     //     setShowScreenshots(false)
    //     // }

    // }, [])
    // const [ref, inView] = useInView({
    //     rootMargin: '-100px 0px',
    //   })
    console.log(inView)
    //   const props = useSpring({ opacity: inView ? 1 : 0 })
    
    //   return (
    //     <animated.div ref={ref} style={props}>

    const springprops = useSpring({ opacity: inView ? 1 : 0 })

    return (
        <section className="covid_container">
                {/* <React.Fragment>
                    <Transition
                        items={true}
                        from={{ opacity: 0 }}
                        enter={{ opacity: 1 }}
                        leave={{ opacity: 0 }}
                        config={config.molasses}>
                        {inView => inView && (props => <div style={props}>
                            <div ref={ref} className="screenshot_container animate">
                                <img src={require("../../assets/covidScreenshotHome.png")} className="screenshot" />
                            </div>
                        </div>)}
                    </Transition>
                </React.Fragment> */}
                <animated.div ref={ref} style={springprops} className="screenshot_container animate" id="animate">
                <img src={require("../../assets/covidScreenshotHome.png")} className="screenshot" />
                </animated.div>>
        </section>
    );
};

export default CovidApp;