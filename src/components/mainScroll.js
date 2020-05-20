import React from 'react'
import Home from '../screens/home/home'
import CovidApp from '../screens/covidApp/covidApp'
import Contact from '../screens/contact/contact'
import Footer from '../screens/footer/footer'
import "./mainScroll.css"
export default function mainScroll () {
    return( 
        <div className="page_content">
            <Home/>
            <CovidApp/>
            <Contact/>
            <Footer/>
        </div>
    )
}