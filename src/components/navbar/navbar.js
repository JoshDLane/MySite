import React, { useState, useEffect } from 'react'
import { Transition, config } from 'react-spring/renderprops'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar(props) {
    // const test = useSpring({
    //     to: async (next, cancel) => {
    //         await next({ opacity: 1, color: '#ffaaee' })
    //         await next({ opacity: 0, color: 'rgb(14,26,19)' })
    //     },
    //     from: { opacity: 0, color: 'red' }
    // })
    const [myshow, setmyshow] = useState(true)

    useEffect(() => {
        if (props.show != true){
            setmyshow(false)
        }
        else{
            setmyshow(true)
        }
    }, [props.show])
    
    const myContext = <nav className='nav_container'>
        <div className="link_container">
            <Link to='/' className="nav_link">HOME</Link>
        </div>
        <div className="link_container">
            <Link to='/contact' className="nav_link">CONTACT</Link>
        </div>
    </nav>
    // function toggleShow() {
    //     setmyshow(false)
    // }
    // if (props.show == true) {
    //     return

    // }
    // else {
    //     return null
    // }
    return (
        <React.Fragment>
            <Transition
                items={myshow}
                from={{ opacity: 0, transform: 'translate3d(0,-100px,0)' }}
                enter={{ opacity: 1, transform: 'translate3d(0,0px,0)', position: 'fixed' }}
                leave={{ opacity: 0, transform: 'translate3d(0,-100px,0)' }}
                config={config.slow}>
                {myshow => myshow && (props => <div style={props}>{myContext}</div>)}
            </Transition>
        </React.Fragment>
    )
    // return(
    //         <nav className='nav_container'>
    //             <div className="link_container">
    //                 <Link to='/' className="nav_link">HOME</Link>
    //             </div>
    //             <div className="link_container">
    //                 <Link to='/contact' className="nav_link">CONTACT</Link>
    //             </div>
    //         </nav>
    // )
}

