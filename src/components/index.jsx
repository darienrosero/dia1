import React from 'react'
import './stalys.css'
import logo from '../assets/icon.png'
import css from '../assets/iconCss.png'
import java from '../assets/iconJava.png'
import accesses from '../assets/accesses.png'

export const Buttons = () => {

    return (
        <><div className="buttons">
            <img className='logo' src={logo} alt="" /> <p> HTML </p>
        </div>
        <div className="buttons">
            <img className='logo' src={css} alt="" /> <p> CSS </p>
        </div>
        <div className="buttons">
            <img className='logo' src={java} alt="" /> <p> JAVASCRIPT </p>
        </div>
        <div className="buttons">
            <img className='logo' src={accesses} alt="" /> <p>ACCESSIBILITY</p>
        </div>
        </>

        
    )
}
