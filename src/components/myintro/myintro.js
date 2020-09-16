import React from 'react'
import { useSpring, animated } from 'react-spring'
import './myintro.css'
import { bounce } from 'react-animations'
import styled, { keyframes } from 'styled-components'
import DownArrow from '../downarrow/downarrow'

export default function MyIntro(props) {

    const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} `

    const opacitySpring = useSpring({
        from: { opacity: 0 },
        opacity: 1,
        delay: 3000,
        config: { mass: 1, tension: 100, friction: 120 }
    })

    return (
        <animated.div style={opacitySpring}>
            {/* <Bounce>
                <div className="profilepic_container">
                    <img src= {require("../../styles/test_face.png")} alt="portrait" className="profilepic"/>
                </div>
            </Bounce> */}
            <div className="home_intro_root">
                <div className="intro_container">
                    <div className="nameline_container">
                        <span className="before_name myfont name_size"> Hi, I'm </span>
                        <span className="name myfont name_size">&nbsp;Josh</span>
                    </div>
                    {/* <p className="white myfont subtitle intro">Constantly learning while creating</p> */}
                    <p className="myfont largeSub intro">Creator. Problem Solver. Outcome Driven.</p>
                    <p className="white myfont subtitle intro">Data Scientist by profession</p>
                    {/* <p className="white myfont subtitle intro">A creator and problem solver </p> */}

                </div>
                
                <DownArrow show={props.top} title={'Checkout some of my work'}/>
            </div>

        </animated.div>
    )
}