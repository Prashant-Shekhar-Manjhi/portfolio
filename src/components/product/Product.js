import React from 'react'
import "./Product.css"
export default function Product({mytube, url}) {
  return (
    <div className='product-container'>
        <div className="product-browser">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        <a href={url} target="_blank" className="product-link" rel="noreferrer">
            <img src={mytube} alt="" className='product-img'/>
        </a>
    </div>
  )
}
