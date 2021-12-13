import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatCurrancy } from "../components/utils"
import Fade from "react-reveal/Fade"
import Pizza from './Pizza';
import { addTo, deletePizza, changeCount } from '../actions/cartActions';
import { BsFillTrashFill } from "react-icons/bs"

function FanFavs() {

  const numberOfItems = useSelector(state => state.cartCR.numberOfItems)
  const state = useSelector(state => state.cartCR)
  const cartItems = useSelector(state => state.cartCR.cartItems)
  const fanFavorites = useSelector(state => state.cartCR.fanFavorites)

  // state for pizza count
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()

  return (
    <div className="container position-relative">
      <div className="row">

        {/* Renders pizzas in fanFavorites array */}
        <Fade left cascade duration={500}>
          <div className="mt-5 col-8">
          {fanFavorites.map(item=>{
            return(
              <div className="cartPizza row mb-5">
                <div className="col-5 ps-4">
                  <Pizza pizza={item} height={"300px"} />
                </div>
                <div className="col-5">
                  <div>
                    <span className="h1 d-block">{item.name}</span>
                    <span className="h3">Price: {formatCurrancy(item.price)}</span>
                  </div>
                  {item.toppings.length === 0
                  ?
                  <span>No toppings</span>
                  :
                  <span className="h5 fw-bolder">Toppings: </span>
                  }
                  {/* loop to render topping names */}
                  {item.toppings.map((topping, index)=>{
                    return(
                      // terinary to get rid of trailing comma
                      index === 0 ? <span>{topping}</span> : <span>, {topping}</span>
                    )
                  })}
                </div>
                <div className="col-2 d-flex align-items-end">
                  <div className="sideCartPizza d-flex align-items-end pb-3">
                    <button className="btn btn-primary " onClick={()=>dispatch(addTo(item, "cartItems"))}>Add to Order</button>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </Fade>

        {/* Rendering Order Items */}
        <Fade right>
          <div className="mt-5 ms-5 col-2 cartContainerFavs position-fixed">
            {numberOfItems === 0
            ?
            <h1 className="text-center py-3" >Order is empty</h1>
            :
              numberOfItems === 1
              ?
              <div>
                <h2 className="text-center mt-1">{numberOfItems} pizza in Order</h2>
                <h3 className="text-center">Total Price: {formatCurrancy(state.totalPrice)}</h3>
              </div>
              :
              <div>
                <h2 className="text-center mt-1">{numberOfItems} pizzas in Order</h2>
                <h3 className="text-center">Total Price: {formatCurrancy(state.totalPrice)}</h3>
              </div>
            }
              <div className="position-relative cart">
                {cartItems.map((item, index)=>{
                  {/* // component showing pizzas in cart */}
                  return(
                    <Fade>
                    <div key={item.id, index} className="sideCartPizza my-4 ps-1">
                      <Pizza pizza={item} height={"150px"}/>
                      <div className="cartButton">
                        <BsFillTrashFill className="text-danger trashSideCart" onClick={()=>dispatch(deletePizza(item))}/>
                        <br />
                        <br />
                        <span className="h4">x{item.count}</span>
                        <select className="ms-3" defaultValue={count} onChange={(e)=>setCount(parseInt(e.target.value))}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <button className="btn btn-outline-primary mt-2" onClick={()=>{dispatch(changeCount(item, count)); setCount(1)}}>Update</button>
                      </div>
                    </div>
                  </Fade>
                  )
                })}
              </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default FanFavs

