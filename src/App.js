import React from 'react'
import Description from './components/Description'
import Name from './components/Name'
import Image from './components/Image'
import Price from './components/Price'
import Card from './components/Card'
import product from './Product'
import './App.css'



const App = (props) => {
  const firstName = '';



  return (
    <>
    <div className='App'>
      <Card>
      <Name name ={product.name}/>
       <Image image ={product.image} />
      <Price price={product.price}/>  
      <Description description ={product.description}/>
      </Card>
 </div>
  
    <div>
    {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="https://sofontsy.com/cdn/shop/products/well-hello-there-svg-svg-so-fontsy-design-shop-783799_1024x1024.jpg?v=1620334044" alt="Greeting"  /> 
          </>
        ) : (
          <p>Hello, there!</p>
        )}
    </div>
    </>

  )

}

export default App