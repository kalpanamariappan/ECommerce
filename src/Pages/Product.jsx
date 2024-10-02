import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Braedcrum from '../Components/Breadcrums/Braedcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const Product =all_product.find((e)=> e.id ===Number(productId))
  return (
    <div>
        <Braedcrum product ={Product}/>
        <ProductDisplay product={Product}/>
        <DescriptionBox/>
        <RelatedProducts/>
    </div>
  )
}

export default Product