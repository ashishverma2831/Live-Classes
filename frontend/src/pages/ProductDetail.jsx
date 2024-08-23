import React, { useState } from 'react'
import Nav from '../components/Nav'
import { useParams } from 'react-router-dom'
import { phones } from '../Data/data'
import { laptops } from '../Data/laptopData'

const ProductDetail = () => {

  const { id } = useParams();
  console.log(id);

  // const [phoneList, setPhoneList] = useState(phones[id]);
  // console.log(phoneList);

  const [laptopDetail, setLaptopDetail] = useState(laptops[id]);


  return (
    <>
      <h1 className='text-4xl text-center mb-10 '>Product detail Page</h1>
      {/* <div>
            <p className='font-bold text-3xl'>{phoneList.name}</p>
            <p>{phoneList.desc}</p>
            <p>{phoneList.price}</p>
            <p className='w-fit rounded-lg bg-green-600 text-white p-2'>{phoneList.review}</p>
            <img className='h-[500px]' src={phoneList.image} alt={phoneList.name} />
            <p>{phoneList.description}</p>

        </div> */}
      <div className='p-6 flex bg-red-300 justify-between'>
        <div>
          <p className='font-bold text-3xl'>{laptopDetail.name}</p>
          <p>Processor: {laptopDetail.processor}</p>
          <p>Price: {laptopDetail.price}</p>
          <p>Ram: {laptopDetail.ram}</p>
          <p>Storage: {laptopDetail.storage}</p>
          <p>Operating System: {laptopDetail.os}</p>
          <p>Display: {laptopDetail.display} cm</p>
          <p className='w-fit rounded-lg bg-green-600 text-white p-2'>{laptopDetail.rating}</p>
          <p>Ratings: {laptopDetail.no_of_ratings}</p>
          <p>Reviews: {laptopDetail.no_of_reviews}</p>
        </div>
        <img className='h-[400px]' src={laptopDetail.img_link} alt={laptopDetail.name} />
      </div>
    </>
  )
}

export default ProductDetail