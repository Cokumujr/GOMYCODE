
import React from 'react'
import product from '../Product.js'

const Price = ({price}) => {
  return (
    <div>
        <h2>Unit Price: Ksh {product.price}</h2>
  
    </div>
  )
}

export default Price