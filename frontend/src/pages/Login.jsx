import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6).
  // matches(/^[a-zA-Z0-9]{6}$/,{message:'password must be alphanumeric'}).
  max(12)
}) 

const Login = () => {

  const loginForm = useFormik({
    initialValues:{
        email:'',
        password:''
    },
    onSubmit: (values)=>{
      console.log(values);
    },
    validationSchema:loginSchema
  })

  return (
    <>
        <p>Login Page</p>
        
        <div className='flex justify-center items-center h-screen'>
          <form onSubmit={loginForm.handleSubmit} className='bg-red-300 p-5 flex flex-col gap-4'>
          <p className='text-3xl font-semibold text-center'>Login</p>
            <div className='bg-blue-300 p-2 flex flex-col gap-2'>
              <label>Email</label>
              <input required placeholder='enter your email' id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='p-2' type='email' name='email'/>
              <span className='text-red-500'>{loginForm.touched.email && loginForm.errors.email}</span>
            </div>
            <div className='bg-blue-300 p-2 flex flex-col gap-2'>
              <label>Password</label>
              <input required placeholder='enter your password' id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='p-2' type='password' name='password' />
              <span className='text-red-500'>{loginForm.touched.password && loginForm.errors.password}</span>
            </div>
            <button type='submit' className='bg-black text-white hover:bg-gray-800 p-3 rounded-xl'>Login</button>
            <p>don't have an account <Link className='text-blue-500' to={'/register'}>Register here</Link></p>
          </form>
        </div>
    </>
  )
}

export default Login