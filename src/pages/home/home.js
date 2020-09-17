import React from 'react'
import './home.css'
import MyIntro from '../../components/myintro/myintro.js'
import LogoSVG from '../../images/logoSVG'

export default function Home(props) {



    return (
        <div className="homeBackground" id="home">
            <div className="loadingLogo_cont">
                <LogoSVG/>
            </div>
            <MyIntro top={props.top}/>
        </div>
    )
}