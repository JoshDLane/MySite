import React from 'react'
import './downarrow.css'

export default function DownArrow(props) {
        return(
            <div className={`arrow_box ${props.show?'':'fadeOut'}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            )
    }
