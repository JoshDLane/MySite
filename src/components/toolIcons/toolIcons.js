import React, { useState, useEffect } from 'react';
import { useTransition, config } from 'react-spring'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './toolIcons.css'

export default function ToolIcons(props) {
    const [items, set] = useState([])
    const [useTools, setUseTools] = useState([])

    const tools = [{
        name: 'React Native',
        img: require("../../images/react_native_logo.png")
    },
    {
        name: 'React',
        img: require('../../images/React_logo.png')
    },
    {
        name: 'Javascript',
        img: require('../../images/javascript_logo.png')
    },
    {
        name: 'CSS',
        img: require('../../images/css_logo.png')
    },
    {
        name: 'D3',
        img: require('../../images/d3_logo.png')
    },
    {
        name: 'Netlify',
        img: require('../../images/netlify_logo.png')
    },
    {
        name: 'Wood',
        img: require('../../images/wood.png')
    }
    ]
    
    const currentTools = tools.filter(tool => useTools.includes(tool.name));

    useEffect(()=>{
        setUseTools(props.tools)
    }, [])

        return (
            <TransitionGroup className="tools_root">
                {props.show &&
                    currentTools.map((item, i) => (
                        <CSSTransition key={item.name} timeout={3000} classNames="fade-up" style={{ transitionDelay: `${props.show ? i * 100 : 0}ms` }}>
                            <div className="tool_img">
                                <img src={item.img} alt={item.name} />
                            </div>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup >
        )
    }
