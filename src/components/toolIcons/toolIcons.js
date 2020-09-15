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
        name: 'NLP',
        img: require('../../images/nlp_logo.png')
    },
    {
        name: 'Drawing',
        img: require('../../images/light_drawing_logo.png')
    },
    {
        name: 'AWS',
        img: require('../../images/aws_logo.png')
    },
    {
        name: 'AWS Dark',
        img: require('../../images/aws_logo_dark.png')
    },
    {
        name: 'Javascript',
        img: require('../../images/javascript_logo.png')
    },
    {
        name: 'Javascript Light',
        img: require('../../images/js_logo_light.png')
    },
    {
        name: 'CSS',
        img: require('../../images/css_logo.png')
    },
    {
        name: 'CSS Light',
        img: require('../../images/css_logo_light.png')
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
    },
    {
        name: 'TF',
        img: require('../../images/tf_logo.png')
    }
    ]
    
    const currentTools = tools.filter(tool => useTools.includes(tool.name));

    useEffect(()=>{
        if (props.tools){
            setUseTools(props.tools)
        }
    }, [props.tools])

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
