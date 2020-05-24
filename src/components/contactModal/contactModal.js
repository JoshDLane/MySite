import React, { useEffect, useState } from 'react';
import './contactModal.css'

export default function ContactModal(props) {
    const [showing, setShowing] = useState(true)
    
    useEffect(()=>{
        if(props.show){
            console.log('trying to show')
            setShowing(true)
        } 
        else{
            setShowing(false)
        }
    }, [props.show])


    return (
        <div className={`modal_container ${showing ? '' : 'hide'}`}>
            <div className="close_cont" onClick={props.setModalClosed}>
                <h1>X</h1>
            </div>
            <span class="myfont email_size">joshdlane22@gmail.com</span>
        </div>
    )
}

