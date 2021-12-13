
import React from 'react'

function Pizza({pizza, height}) {
  return (
    <>
      <div className="position-static">
        <img className="position-absolute" height={height} src="images/crusts/pizza_crust.png" alt="" />
        <img className="position-absolute" height={height} src="images/sauces/sauce_marinara.png" alt="" />
        <img className="position-absolute" height={height} src="images/cheeses/cheese_mozz.webp" alt="" />
        {pizza.toppingImages.map((toppingImage, index)=>{
          return (
            <img key={index} className="position-absolute" height={height} src={toppingImage} alt="" />
          )
        })}
      </div>
    </>
  )
}

export default Pizza
