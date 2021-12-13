
import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deletePizza, changeCount, placeOrder } from '../actions/cartActions';
import Pizza from './Pizza';
import { formatCurrancy } from "../components/utils"
import Fade from "react-reveal/Fade"
import { useNavigate } from 'react-router-dom'

function Sample() {

  const navigate = useNavigate()

    // state for pizza count
  const [count, setCount] = useState("")

  const cartItems = useSelector(state=>state.cartCR.cartItems)
  const numberOfItems = useSelector(state => state.cartCR.numberOfItems)
  const totalPrice = useSelector(state => state.cartCR.totalPrice)

  const dispatch = useDispatch()

  const tax = totalPrice * 0.0825

  const handlePlaceOrder = () => {

    alert("Thank you for using my site. Unfortunately you cannot actually order the pizzas you built but I'm sure they would have been extra tasty.\n\nIf you are craving some pizza, I'd recommend placing an order with your favorite pizza place.")

    dispatch(placeOrder())

    navigate("/builder")

  }

  return (
    numberOfItems === 0
    ?
    <div className="container d-flex flex-column align-items-center mt-5">
      <h1>Your order is currently empty</h1>
      <h2 className="mt-4 mb-5">Head to our <a href="/builder">Builder Page</a> and make an awesome pizza!</h2>
      <a href="/builder"><img height="700px" width="auto" src="/images/builder.gif" alt="" /></a>
    </div>
    :
    <div className="container position-relative">
      <div className="row">
        <Fade left cascade duration={500}>
          <div className="mt-5 col-8">
          {cartItems.map((item, index)=>{
            return(
                <div key={index} className="cartPizza row mb-5">
                  <div className="col-5 ps-4">
                    <Pizza pizza={item} height={"300px"} />
                  </div>
                  <div className="col-5">
                    <div>
                      <span className="h1">Price: {formatCurrancy(item.price * item.count)}</span>&nbsp;
                      {/* below displays only when item.count is > 1 */}
                      {item.count > 1 && <span className="h4 d-block">({formatCurrancy(item.price)} each)</span>}
                    </div>
                    <span className="h3">Quantity: {item.count}</span>
                    <select className="ms-4" defaultValue={count} onChange={(e)=>setCount(parseInt(e.target.value))}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <button className="btn btn-outline-primary ms-3 mb-1" onClick={()=>{dispatch(changeCount(item, count)); setCount(1)}}>Update</button>
                    <br />
                    <span className="h5 fw-bolder">Toppings: </span>
                    {/* loop to render topping names */}
                    {item.toppings.map((topping, index)=>{
                      return(
                        // terinary to get rid of trailing comma
                        index === 0 ? <span>{topping}</span> : <span>, {topping}</span>
                      )
                    })}
                  </div>
                  <div className="col-2 d-flex justify-content-center">
                    <div className="sideCartPizza my-4 ps-1">
                      <button className="btn btn-danger" onClick={()=>dispatch(deletePizza(item))}>Remove</button>
                    </div>
                  </div>
                </div>
            )
          })}
          </div>
        </Fade>
        <Fade top>
          <div className="my-5 totals d-flex align-items-center flex-column position-fixed">
            <h2 className="mt-4">Total Pizzas: {numberOfItems}</h2>
            <h5 className="mt-2">Subtotal: {formatCurrancy(totalPrice)}</h5>
            <h5 className="mt-2">Sales Tax: {formatCurrancy(tax)}</h5>
            <h1 className="mt-4">Total: {formatCurrancy(totalPrice + tax)}</h1>
            <button className="btn btn-primary mt-4" onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Sample
