import React from 'react'
import Login from './SubComponents/Login'
import SignUp from './SubComponents/SignUp'

const SigninComponent = () => {
  return (
<div className='md:m-20'>
  <div className='flex justify-end '>
  <a href="/" >Back to the website</a>
  </div>
    <div className='flex mt-5 w-full '>
      <Login/>
      <SignUp/>
    </div>
    </div>
  )
}

export default SigninComponent
