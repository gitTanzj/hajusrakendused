import React from 'react'
import { RegisterForm } from '../components/RegisterForm'
import { LoginForm } from '../components/LoginForm'

export const Entry = () => {

  const [register, setRegister] = React.useState(false)

  return (
    <div className="entry">
      {register ? 
      <div className="register">
        <h1>Register</h1>
        <RegisterForm />
      </div>
      :
      <div className="register">
        <h1>Login</h1>
        <LoginForm/>
      </div>
      }
      <div className="register-switch">
        <p>Or maybe you want to <b
            onClick={() => setRegister(!register)}
            style={{cursor: 'pointer', textDecoration: 'underline'}}
          >
            {register ? "login" : "register"}
         </b></p>
      </div>
    </div>
      
  )
}
