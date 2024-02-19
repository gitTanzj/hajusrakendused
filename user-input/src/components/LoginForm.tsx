import React from 'react'
import { useState } from 'react';


export const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
    }

  return (
    <div>
        <form className='login-form' onSubmit={(event) => handleSubmit(event)}>
            <div className='login-field'>
                <label>Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='login-field'>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Saada</button>
        </form>
    </div>
  )
}
