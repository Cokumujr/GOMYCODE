import React from 'react'
import product from '../Product.js'

const Image = ({image}) => {
    const imagestyle={
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '10px'
  
    }
  return (
    <div>
        <img src={product.image} alt={product.name} style={imagestyle}/>
      
    </div>
  )
}

export default Image