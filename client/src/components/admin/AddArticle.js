import React, { useEffect, useState } from 'react'
import adminStyle  from './admin.module.css'
import AdminNavigation from './AdminNavigation'
import DashboardSidebar from './DashboardSidebar'
import axios from 'axios'

function AddArticle() {
    const [state,setState] = useState({
        title: '',
        category: 'Choose one',
        body: '',
        thumbnail: ''

    })
    const [category,setCategory] = useState([])

    const changeHandler = (e) => {
        setState({...state,[e.target.name]: e.target.value})
    }
    const changeFileHandler = (e) => {
        setState({ thumbnail: e.target.files[0] })
    }
    let options = ''
    useEffect(() => {
        axios.get('/article/category').then(data => {
            setCategory(data.data)
        }).catch(err => {
            console.log(`There is error: ${err}`)
        })
    },[])
    if(category.length !== 0){
        options = category.map(oneCat => <option value={oneCat._id}>{oneCat.name}</option>)
    }
    return (
        <div className={adminStyle.add_article_container}>
            <AdminNavigation />
            <div className={adminStyle.dashboard_container}>
               <DashboardSidebar />
               <div className={adminStyle.add_form_container}>
                   <h2>Add Article</h2>
                    <form  action = '/article/add' method="POST" className = {adminStyle.add_article_form} enctype="multipart/form-data">
                        <input type='text' className={adminStyle.add_article_input_title} required autoComplete = 'off' name='title' placeholder='Title' value = {state.title} onChange={changeHandler}/>
                        <select name='category' value = {state.category} onChange={changeHandler}>
                            {options}
                        </select>
                        <input  type="file" name='thumbnail' required className={adminStyle.add_article_input_file} onChange={changeFileHandler}/>
                        <textarea  type = 'text' name='body' required className={adminStyle.add_article_textarea}  rows='30' cols='100' value = {state.body} onChange={changeHandler}></textarea>
                        <button type='submit'>Submit</button>
                    </form>
               </div>
           </div>
        </div>
    )
}

export default AddArticle
