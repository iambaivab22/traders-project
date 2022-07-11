import React from 'react'
import { Link } from 'react-router-dom'
import './unauthorized.css'

function Unauthorized() {
    return (
        <>
            <div className="gandalf">
            <div className="fireball"></div>
            <div className="skirt"></div>
            <div className="sleeves"></div>
            <div className="shoulders">
                <div className="hand left"></div>
                <div className="hand right"></div>
            </div>
            <div className="head">
                <div className="hair"></div>
                <div className="beard"></div>
            </div>
            </div>
            <div className="message">
            <h1>403 - You Shall Not Pass</h1>
            <p>Uh oh, Gandalf is blocking the way!<br/>Maybe you have a typo in the url? Or you meant to go to a different location? Like...Hobbiton?</p>
            </div>
            <Link to='/admin/login' style={{color:'blue',textDecoration: "underline",marginLeft: '30%'}}>Login as admin</Link>
        </>
    )
}

export default Unauthorized
