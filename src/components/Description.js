import React from 'react'
import product from '../Product.js'


const Description = ({description}) => {
    const buttonstyle ={
        backgroundColor: 'burlywood',
        color: 'black',
        padding: '13px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginLeft: '10px'
    }
  return (
    <div>
        
        <p>{product.description}</p>
        <button style={buttonstyle}>Add to Cart</button>
  
    </div>
  )
}

export default Description