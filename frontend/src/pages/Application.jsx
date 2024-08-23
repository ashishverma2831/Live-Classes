import React from 'react'
import Nav from '../components/Nav'

const Application = () => {

  const data = [
    {
      title: 'New Launch',
      image: 'https://image01.realme.net/general/20240820/1724138611700c21297380ee24e4d80766d25511f1f70.jpg.webp'
    },
    {
      title: 'Highlighted Events',
      image: 'https://image01.realme.net/general/20240815/1723717743293aa2cae9636c444c28a781bb5b066e2af.jpg.webp'
    }
  ]

  return (
    <>
      <p>Application Page</p>
      <div className='flex flex-col gap-8 p-6 max-w-screen-xl mx-auto'>
      {
        data.map((item,index) => {
          return (
            <div key={index} className='flex flex-col w-full gap-4'>
              <p className='text-3xl font-bold'>{item.title}</p>
              <div className='overflow-hidden w-full rounded-xl'>
              <img className='h-[300px] w-full rounded-md hover:scale-105 transition-all duration-400' src={item.image} alt={item.title} />
            </div>
            </div>
            
          )
        })
      }
      </div>
    </>
  )
}

export default Application