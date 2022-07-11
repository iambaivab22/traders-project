import React, { useState } from 'react'
import adminStyle  from './admin.module.css'
import DashboardSidebar from './DashboardSidebar'
import AdminNavigation from './AdminNavigation'
import axios from 'axios'

function AddCategory() {
    const [state,setState] = useState('')
    const changeHandler = (e) => {
        setState({...state,[e.target.name]: e.target.value})
    }
    const addCategory = e => {
        e.preventDefault();
        axios.post('/article/add-category',state).then(ack => {
            alert(ack.data.msg)
            e.target.children[0].value = ''
        })
    }

    return (
        <>
           <AdminNavigation />
           <div className={adminStyle.dashboard_container}>
               <DashboardSidebar />
               <div className={adminStyle.add_form_container}>
                   <h2>Add Category</h2>
                    <form  onSubmit={addCategory} className = {adminStyle.add_article_form}>
                        <input type='text' className={adminStyle.add_article_input_title} required autoComplete = 'off' name='category' placeholder='Category' value = {state.title} onChange={changeHandler}/>
                        <button type='submit'>Submit</button>
                    </form>
               </div>
           </div>
        </>
    )
}

export default AddCategory
