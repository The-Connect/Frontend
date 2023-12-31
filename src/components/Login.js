import React, { useState } from 'react'
import Footer from './Footer'


export default function Login(props) {
   

  return (
    <div className='login-container'>
        <form>
            <fieldset>
                <h2>Login</h2>
                <div className='field'>
                    <label>
                        Email: 
                    </label>
                    <input required type='email' placeholder='Enter your email'/>
                </div>
                <div className='field'>
                    <label>Password</label>
                    <input required type='password' placeholder='Enter your password' />
                </div>
                <button className='submitButton'>
                    Login
                </button>
            </fieldset>
        </form>
        
        
    </div>
  )
}
