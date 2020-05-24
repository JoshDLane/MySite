import React from 'react';
import './sectionTitle.css'
import '../../assets/rootstyles.css'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import ToolIcons from '../toolIcons/toolIcons'

const SectionTitle = (props) => {

    const [ref, titleInView] = useInView({
        rootMargin: '-100px 0px -200px 0px',
    })

    const opacitySpring = useSpring({
        opacity: titleInView ? 1 : 0
    })
        if (props.title) {
            return (
                <div className="">
                    <animated.div ref={ref} style={opacitySpring} className="section_title_cont">
                        <span className="section_title">
                            {props.title}
                        </span>
                    </animated.div>
                    <ToolIcons show={titleInView} section={props.section} />
                </div>
            );
        } else if (props.section == 'guitar') {
            return (
                <React.Fragment>
                    <animated.div ref={ref} style={opacitySpring} className="section_title_cont">
                        <span className="section_title">
                            Do i play guitar? No. Did I really want to build one? Yes...
                        </span>
                    </animated.div>
                    <ToolIcons show={titleInView} section={props.section} />
                </React.Fragment>

            )}
        else{
            return null
        }

    }

export default SectionTitle;