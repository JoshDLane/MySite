import React, { useState } from 'react';
import { useTransition, config } from 'react-spring'
import './toolIcons.css'

export default function ToolIcons(props) {
    const [items, set] = useState([])
    // const [index, setIndex] = useState(0)
    // const tool_options = [
    //     { key: 'react', image: "../../assets/img/React_logo.png" },
    //     { key: 'react_native', image: "../../assets/img/React_logo.png" },
    //     { key: 'd3', image: "../../assets/img/d3_logo.png" },
    //     { key: 'netlify', image: "../../assets/img/netlify_logo.png" },
    //     { key: 'css', image: "../../assets/img/css_logo.png" }]

    // const tools = ['react', 'react_native', 'd3']


    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,50px,0)', opacity: 0 },
        enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
        leave: { transform: 'translate3d(0,-50px,0)', opacity: 0 },
        config: config.molasses
    })

    if (props.section == 'covid') {
        return (<div className={`tools ${props.show ? `tools_root` : 'leave'}`}>
            {/* {items.map(item =>
        <img src={require(`${item.image}`)} ></img>
    )} */}
            <img src={require("../../assets/img/react_native_logo.png")} ></img>
            <img src={require("../../assets/img/d3_logo.png")}></img>
            <img src={require("../../assets/img/javascript_logo.png")}></img>
        </div>

        )
    } else if (props.section == 'mysite') {
        return (<div className={`tools ${props.show ? `tools_root` : 'leave'}`}>
            {/* {items.map(item =>
        <img src={require(`${item.image}`)} ></img>
    )} */}
            <img src={require("../../assets/img/React_logo.png")} ></img>
            <img src={require("../../assets/img/css_logo.png")}></img>
            <img src={require("../../assets/img/javascript_logo.png")}></img>
            <img src={require("../../assets/img/netlify_logo.png")}></img>
        </div>

        )
    } else if (props.section == 'guitar') {
        return (<div className={`tools ${props.show ? `tools_root` : 'leave'}`}>
            {/* {items.map(item =>
        <img src={require(`${item.image}`)} ></img>
    )} */}
            <img src={require("../../assets/img/wood.png")} ></img>
        </div>

        )
    } else {
        return null
    }
}