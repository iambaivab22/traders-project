import React from 'react'
import adminStyle  from './admin.module.css'

function DashboardSidebar() {
    return (
        <div className={adminStyle.sidebar}>
            <ul>
                <li><a href='/admin'>Dashboard</a></li>
                <li><a href='/admin/articles'>Articles</a></li>
                <li><a href='/admin/new-article'>Add an article</a></li>
                <li><a href='/admin/add-category'>Category</a></li>
            </ul>
        </div>
    )
}

export default DashboardSidebar
