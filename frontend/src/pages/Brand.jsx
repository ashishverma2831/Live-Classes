import React from 'react'
import Nav from '../components/Nav'
import { phones } from '../Data/data'
import { laptops } from '../Data/laptopData'
import { Link } from 'react-router-dom'

const Brand = () => {
  return (
    <>
      <p className='text-4xl text-center'>Brand Page</p>
      {/* <div className='flex flex-wrap gap-8 p-10'> */}
      <div className='grid grid-cols-3 gap-8 p-10'>
        {/* {
          phones.map((phone, index) => {
            return (
              <Link to={'/brand/goods/'+index} key={index} className='flex bg-stone-300 rounded-md p-4' >
                <div className='flex flex-col gap-4'>
                  <p>{phone.name}</p>
                  <p>{phone.desc}</p>
                  <p> ₹ {phone.price}</p>
                </div>
                <img className='h-[300px]' src={phone.image} alt={phone.name} />
              </Link>
            )
          })
        } */}
        {
          laptops.map((laptop) => {
            return (
              <Link to={'/brand/goods/'+laptop.id} key={laptop.id} className='flex bg-stone-200 rounded-md p-4' >
                <div className='flex flex-col gap-4'>
                  <p className='text-xl font-semibold'>{laptop.name}</p>
                  <p className='text-sm text-gray-500'>{laptop.processor}</p>
                  <p className='text-lg'> ₹ {laptop.price}</p>
                </div>
                <img className='h-[200px] mix-blend-multiply' src={laptop.img_link} alt={laptop.name} />
              </Link>
            )
          })
        }
      </div>
    </>
  )
}

export default Brand