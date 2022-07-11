import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import adminStyle from './admin.module.css'
import axios from 'axios'
import { adminLoggedIn } from '../../features/authSlice'

function Login(props) {
    const [user,setUser] = useState({
        email:'',
        password: ''
    })
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault();
        if(user.email === '' || user.password ===''){
            alert('Enter email and password.')
        } else {
            axios.post('/admin/login', { user }).then(data => {
                console.log(data)
                const token = data.data.token;
                const email = data.data.user.email;
                dispatch(adminLoggedIn({email,token}));
                localStorage.setItem('admin',JSON.stringify({token,email}));
                props.history.push('/admin');
            })
            .catch(err => {
                console.log(err)
                alert('Looks like your credentials are wrong!')
            })
        }
    }
    const changeHandler = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
    }
    return (
        <div className={adminStyle.login_form_container}>
            <div className={adminStyle.login_form_second}>
                <h1 className={adminStyle.header}>Login</h1>
                <form className={adminStyle.login_form} onSubmit={submitHandler}>
                    <input type='email' name='email' placeholder='Enter admin email' onChange={changeHandler}/>
                    <input type='password' name='password' placeholder='Enter admin passsword' onChange={changeHandler}/>
                    <input type='submit' value='Login'/>
                </form>
            </div>
        </div>
    )
}

export default Login
