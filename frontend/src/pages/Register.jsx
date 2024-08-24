import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
    name:Yup.string().required(),
    email:Yup.string().email().required(),
    password:Yup.string().required().min(6).max(12)
})

const Register = () => {

    const registerForm = useFormik({
    initialValues:{
        name:'',
        email:'',
        password:''
    },
    onSubmit: (values)=>{
      console.log(values);
    },
    validationSchema:registerSchema
    })

  return (
    <>
    <p>Register Page</p>
        
        <div className='flex justify-center items-center h-screen'>
          <form onSubmit={registerForm.handleSubmit} className='bg-red-300 p-5 flex flex-col gap-4'>
          <p className='text-3xl font-semibold text-center'>Register</p>
          <div className='bg-blue-300 p-2 flex flex-col gap-2'>
              <label>Name</label>
              <input id='name' onChange={registerForm.handleChange} value={registerForm.values.name} className='p-2' type='text' name='name'/>
              <span className='text-red-500'>{registerForm.touched.name && registerForm.errors.name}</span>
            </div>
            <div className='bg-blue-300 p-2 flex flex-col gap-2'>
              <label>Email</label>
              <input id='email' onChange={registerForm.handleChange} value={registerForm.values.email} className='p-2' type='email' name='email'/>
                <span className='text-red-500'>{registerForm.touched.email && registerForm.errors.email}</span>
            </div>
            <div className='bg-blue-300 p-2 flex flex-col gap-2'>
              <label>Password</label>
              <input id='password' onChange={registerForm.handleChange} value={registerForm.values.password} className='p-2' type='password' name='password' />
                <span className='text-red-500'>{registerForm.touched.password && registerForm.errors.password}</span>
            </div>
            <button type='submit' className='bg-black text-white hover:bg-gray-800 p-3 rounded-xl'>Login</button>
            <p>already have an account <Link className='text-blue-500' to={'/login'}>Login here</Link></p>
          </form>
        </div>
        </>
  )
}

export default Register