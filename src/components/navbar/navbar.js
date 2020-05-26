import React, { useState, useEffect } from 'react'
import { Transition, config } from 'react-spring/renderprops'
import './navbar.css'
import MyLogo from '../../assets/img/myLogo'

export default function Navbar(props) {
    const [atTop, setatTop] = useState(true)

    useEffect(() => {
        if (props.top===true){
            setatTop(true)
        }
        else{
            setatTop(false)
        }
    }, [props.top])
    
    const myContext = <nav className='nav_container'>
        <div className="logo_container include">
            <MyLogo/>
        </div>
        <div className="link_container">
            <div className="nav_link" onClick={props.onClick}>CONTACT</div>
        </div>
    </nav>
    return (
        <React.Fragment>
            <Transition
                items={atTop}
                from={{ opacity: 0, transform: 'translate3d(0,-100px,0)' }}
                enter={{ opacity: 1, transform: 'translate3d(0,0px,0)', position: 'fixed', left: 0 }}
                leave={{ opacity: 0, transform: 'translate3d(0,-100px,0)' }}
                config={config.molasses}>
                {atTop => atTop && (props => <div style={props}>{myContext}</div>)}
            </Transition>
        </React.Fragment>
    )
}

