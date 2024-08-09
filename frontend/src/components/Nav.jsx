import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <>
        <section className='max-w-screen-xl bg-stone-200 px-4 mx-auto py-2 flex justify-between items-center'>
            <div className='flex gap-4'>
                <Link target='_blank' className='hover:text-yellow-400' to={'/brand'}>Brand</Link>
                <Link className='hover:text-yellow-400' to={'/realme-nextai'}>realme NEXT AI</Link>
                <Link className='hover:text-yellow-400' to={'/application'}>App</Link>
                <Link className='hover:text-yellow-400' to={'/community'}>Community</Link>
                <Link className='hover:text-yellow-400' to={'/support'}>Support</Link>
                <Link className='hover:text-yellow-400' to={'/portrait'}>Portrait Master Academy</Link>
            </div>
            <div className='flex gap-4'>
                <Link className='hover:text-yellow-400' to={'/login'}>Login</Link>
                <Link className='hover:text-yellow-400' to={'/orders'}>My Order</Link>
                <Link className='hover:text-yellow-400' to={'/cart'}>Cart</Link>
            </div>
        </section>
    </>
  )
}

export default Nav