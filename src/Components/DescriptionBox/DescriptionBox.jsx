import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
       <div className="descriptionbox-navigator">
         <div className="descriptionbox-nav-box">Description</div>
         <div className="descriptionbox-nav-box fade">Reviews(122)</div>
       </div> 
       <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying selling of products or services over the internet. It serves as a virtual          
        marketplace where business and individuals can showcase their products,interact with customers, and conduct transictions ithout the need for a physical presence.
        E-commerce websites have gained immense popularity due ton their convenience, accesability, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with detailed decriptions,images, prices, and any available variations(e.g.,sizes,colors). Each produts 
        usually has its dedicated page with relevent information.
        </p>
       </div>
    </div>
  )
}

export default DescriptionBox