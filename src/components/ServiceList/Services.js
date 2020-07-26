import React, { useState } from 'react'
import './Services.css'


function Services() {

  const [details] = useState([
    {
      image: 'https://res.cloudinary.com/shafali/image/upload/v1595702248/u3kfaj1lnzopayscrcc4.png',
      title: 'Men Hair Cut',
      desc: "Haircut, shampoo and conditioner."
    },
    {
      image: 'https://res.cloudinary.com/shafali/image/upload/v1595702262/aie2g62jldxt3hw1tqqq.png',
      title: "Beard Waxing",
      desc: "Haircut, shampoo & conditioner."
    },
    {
      image: 'https://res.cloudinary.com/shafali/image/upload/v1595702256/vdaoctgf6va5odlpcuif.png',
      title: "Beard Treatment",
      desc: "Haircut, color, shampoo."
    },
  ])

  return (
    <div className="service-container">
      {details.map((product, index) => (
        <div key={index} className="aligner">
          <img className="service-image" src={product.image} alt={product.name} />
          <h3>{product.title}</h3>
          <h4>{product.desc}</h4>
        </div>
      ))}
    </div>
  )
}

export default Services

