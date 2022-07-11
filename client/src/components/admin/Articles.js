import React, { useEffect, useState } from 'react'
import axios from 'axios'
import adminStyle from './admin.module.css'
import SingleNewsCard from '../News/SingleNewsCard'
import AdminNavigation from './AdminNavigation'
import DashboardSidebar from './DashboardSidebar'

function Articles() {
    const [articles,setArticles] = useState([])
    let content = ''
    useEffect(() => {
        axios.get('/article').then(data => setArticles(data.data))
    },[])
    if(articles.length !== 0){
        content = articles.map( article => <SingleNewsCard  admin = {true} news = {article} key= {article._id}/>)
    }
    return (
    <div className={adminStyle.container}>
        <AdminNavigation />
        <div className={adminStyle.dashboard_container}>
            <DashboardSidebar />
            <div className={adminStyle.articles}>
                {content}
                </div>
        </div>
    </div>
    )
}


export default Articles
