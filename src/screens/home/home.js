import React from 'react'
import './home.css'
import MyIntro from '../../components/myintro/myintro.js'
import LoadingIcon from '../../components/loadingIcon/loadingIcon'


export default function Home(props) {



    return (
        <div className="homeBackground" id="home">
            <div className="loadingLogo_cont">
                <LoadingIcon/>
            </div>
            <MyIntro top={props.top}/>
        </div>
    )
}