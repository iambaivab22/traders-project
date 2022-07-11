import React from 'react'
import adminStyle  from './admin.module.css'
import DashboardMain from './DashboardMain'
import DashboardSidebar from './DashboardSidebar'
import AdminNavigation from './AdminNavigation'

function Dashboard() {
    return (
        <div className={adminStyle.container}>
           <AdminNavigation />
           <div className={adminStyle.dashboard_container}>
               <DashboardSidebar />
               <DashboardMain />
           </div>
        </div>
    )
}

export default Dashboard
