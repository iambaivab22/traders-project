import React, { useState } from 'react'
import market from './market.module.css'

import { withRouter } from 'react-router-dom'; 

function Search(props) {
    const [state,setState] = useState('')

    const changeHandler = (e) =>{
        setState(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        
        props.history.push(`/company/${state}`)
    }
    
    return (
        <div className={market.search}>
            <form onSubmit={submitHandler}>
                <input value={state} onChange={changeHandler} placeholder='Company Symbol'/>
            </form>
        </div>
    )
}

export default withRouter(Search)
