import React from 'react'
import './downarrow.css'

export default function DownArrow(props) {
    return (
        <div className={`point_down_container ${props.show ? '' : 'fadeOut'}`}>
            <div className="scroll_down_title">
                <p className="myfont scrolldown">
                    {props.title}
                    </p>
            </div>
            <div className="arrow_box_root">
                <div className="arrow_box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}
