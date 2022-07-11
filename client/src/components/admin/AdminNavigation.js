import React from 'react'
import { useDispatch } from 'react-redux';
import { adminLoggedOut } from '../../features/authSlice';
import  adminStyle  from './admin.module.css'
import { withRouter } from 'react-router-dom';

function AdminNavigation(props) {
    const dispatch = useDispatch()
    const logout = (e) => {
        props.history.push('/')
        dispatch(adminLoggedOut());
    }
    return (
        <div className={adminStyle.navigation_container}>
            <h1>Admin Dashboard - Hamrolagani</h1>
            <button className={adminStyle.navigation_button} onClick={logout}>Logout</button>
        </div>
    )
}

export default withRouter(AdminNavigation)
