import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const admin  = JSON.parse(localStorage.getItem('admin'))
  let isAuthenticated = false;
  if(admin){
    isAuthenticated = true
  }
  return (
    <Route {...rest} render={
      props => {
          if(isAuthenticated){
            console.log(isAuthenticated)
              return <Component {...rest} {...props} />
          } else {
              return <Redirect to={
                {
                  pathname: '/unauthorized',
                  state: {
                    from: props.location
                  }
                }
              } />
          }
      }
    } />
  )
}

export default ProtectedRoutes;