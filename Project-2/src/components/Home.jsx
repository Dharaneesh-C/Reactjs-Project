import React from 'react'
import products from '../products'
import {Row,Col} from "react-bootstrap";
import ProductScreen from './screens/ProductScreen';




function Home() {
  return (
<div>
  <h1 className='text-center mt-2'>Latest Products</h1>

  <Row>
    {products.map((product)=>(
      <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
      {/* <h3>{product.name}</h3>
       */}
      
      <ProductScreen product={product}/>
      </Col>
    ))}
  </Row>
</div>
  )
}

export default Home