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
    {
      image: 'https://res.cloudinary.com/shafali/image/upload/v1595702248/u3kfaj1lnzopayscrcc4.png',
      title: 'Lady Hair Cut',
      desc: "Haircut, shampoo and conditioner."
    },
    {
      image: 'https://res.cloudinary.com/shafali/image/upload/v1595702262/aie2g62jldxt3hw1tqqq.png',
      title: "Facial Waxing",
      desc: "Facials for all skin types and conditions"
    },
    {
      image: 'https://res.cloudinary.com/shafali/image/upload/v1595702256/vdaoctgf6va5odlpcuif.png',
      title: "Threading & Tinting",
      desc: "Eyebrow Shaping, Upper Lips and more"
    }
  ])

  return (
    <div className="service-container">
      {details.map((product, index) => (
        <div key={index} className="aligner">
          <img src={product.image} alt={product.name} />
          <h3>{product.title}</h3>
          <h4>{product.desc}</h4>
        </div>
      ))}
    </div>
  )
}

export default Services

