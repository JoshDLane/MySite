import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LinkdinIcon from '../../components/linkdinIcon'
import GitIcon from '../../components/gitIcon'
// import loaderDelay from '../../styles/theme'
import './sidelinks.css'
import '../../styles/rootstyles.css'


export default function SideLinks(props) {
    const [isMounted, setIsMounted] = useState(false)
    
    useEffect(() => {
        setTimeout(() => setIsMounted(true), 3500)
    })
    return (
        <React.Fragment>
            <TransitionGroup component={null}>
                {isMounted && (
                    <div className="sideLink_container">
                        <CSSTransition in={isMounted} classNames="fadeLeft" timeout={2000}>
                            <div className="side_icon icon_hover" style={{ transitionDelay: '100ms' }}>
                                <a href="https://github.com/JoshDLane" >
                                    <GitIcon />
                                </a>
                            </div>
                        </CSSTransition>
                        <CSSTransition in={isMounted} classNames="fadeLeft" timeout={2000}>
                            <div className="side_icon icon_hover" style={{ transitionDelay: '300ms' }}>
                                <a href="https://linkedin.com/in/josh-lane-4a51a0145" >
                                    <LinkdinIcon />
                                </a>
                            </div>
                        </CSSTransition>
                        <CSSTransition in={isMounted} classNames="fadeLeft" timeout={2000}>
                            <div className="dec_line" style={{ transitionDelay: '500ms' }}>
                            </div>
                        </CSSTransition>
                    </div>

                )}
            </TransitionGroup>

        </React.Fragment>
    );
};
