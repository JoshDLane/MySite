import React, { useEffect, useState } from 'react';
import { useTransition, animated, config } from 'react-spring'
import './toolIcons.css'

export default function ToolIcons(props) {
    const [items, set] = useState([{ key: 'react', image: <h1>2</h1> }, { key: 'react_native', image: <h1>3</h1> }, { key: 'd3', image: <h1>2</h1> }])
    // const [index, setIndex] = useState(0)

    function setIcons() {
        if (props.show) {
            set([{ key: 'react', image: "../../assets/img/React_logo.png" }, { key: 'react_native', image: "../../assets/img/React_logo.png" }, { key: 'd3', image: "../../assets/img/React_logo.png" }])
        }
    }
    const tools = ['react', 'react_native', 'd3']

    useEffect(() => {
        setIcons()
        // void setInterval(() => setIndex(state => (state + 1) % tools.length), 2000)
    }, [props.show])

    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,50px,0)' , opacity: 0},
        enter: { transform: 'translate3d(0,0px,0)', opacity: 1},
        leave: { transform: 'translate3d(0,-50px,0)', opacity: 0 },
        config: config.molasses	
    })


    return (
    <div className="tools_root">
        {transitions.map(({item, props, key}) =>
        <animated.div key={key} className="tool_icon" style={{...props, backgroundImage: "url(../../assets/img/React_logo.png)"
        }}/>)}
    </div>
    )
};
