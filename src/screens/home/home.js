import React, { useState, useEffect } from 'react'
import './home.css'
import Navbar from '../../components/navbar/navbar'
import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations'
import DownArrow from '../../components/downarrow/downarrow.js'
import MyIntro from '../../components/myintro/myintro.js'
export default function Home() {
    const [atTop, setatTop] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            const total = window.outerHeight
            if (isTop) {
                setatTop(true)
            }
            else {
                setatTop(false)
            }
        })
    })

    const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} `

    return (
        <div className="homeBackground" id="home">
            <Navbar show={atTop} />
            <Bounce>
                <div className="profilepic_container">
                    <img src= {require("../../assets/test_face.png")} alt="portrait" className="profilepic"/>
                </div>
            </Bounce>
            <MyIntro />
            <DownArrow show={atTop}/>
        </div>
    )
}