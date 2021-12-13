
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { addTo, deletePizza, changeCount } from '../actions/cartActions';
import Form from 'react-bootstrap/Form';
import { toppings } from "../assets/data"
import { formatCurrancy } from "../components/utils"
import Pizza from './Pizza';
import { BsFillTrashFill } from "react-icons/bs"
import { v4 as uuidv4 } from 'uuid';
import Fade from "react-reveal/Fade"

function Builder() {

  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartCR.cartItems)
  const numberOfItems = useSelector(state => state.cartCR.numberOfItems)
  const state = useSelector(state => state.cartCR)

  // state for pizza count
  const [count, setCount] = useState(0)

  // state for building pizza
  const [pizza, setPizza] = useState({
    id: uuidv4(),
    toppings: [],
    toppingPrices: [],
    toppingImages: [],
    price: parseFloat(12.00)
  })

  // topping states
  const [anchovies, setAnchovies] = useState(false)
  const [bacon, setBacon] = useState(false)
  const [basil, setBasil] = useState(false)
  const [feta, setFeta] = useState(false)
  const [ham, setHam] = useState(false)
  const [italianSausage, setItalianSausage] = useState(false)
  const [jalapenos, setJalapenos] = useState(false)
  const [mushrooms, setMushrooms] = useState(false)
  const [olives, setOlives] = useState(false)
  const [onions, setOnions] = useState(false)
  const [parmesan, setParmesan] = useState(false)
  const [pepperoni, setPepperoni] = useState(false)
  const [pineapple, setPineapple] = useState(false)
  const [shrimp, setShrimp] = useState(false)
  const [spinach, setSpinach] = useState(false)

  // creating array of topping names
  const toppingsArr = Object.keys(toppings)

  // array of topping states to populate .map function below
  const toppingStateArr = [
    {
      state: anchovies,
      setState: setAnchovies
    },
    {
      state: bacon,
      setState: setBacon
    },
    {
      state: basil,
      setState: setBasil
    },
    {
      state: feta,
      setState: setFeta
    },
    {
      state: ham,
      setState: setHam
    },
    {
      state: italianSausage,
      setState: setItalianSausage
    },
    {
      state: jalapenos,
      setState: setJalapenos
    },
    {
      state: mushrooms,
      setState: setMushrooms
    },
    {
      state: olives,
      setState: setOlives
    },
    {
      state: onions,
      setState: setOnions
    },
    {
      state: parmesan,
      setState: setParmesan
    },
    {
      state: pepperoni,
      setState: setPepperoni
    },
    {
      state: pineapple,
      setState: setPineapple
    },
    {
      state: shrimp,
      setState: setShrimp
    },
    {
      state: spinach,
      setState: setSpinach
    }
  ]

  const addTopping = (state, setState) => {
    if(!state){
      setState(true)
    }
    else if(state){
      setState(false)
    }
  }

  const addToCart = (e) => {
    e.preventDefault()

    toppingStateArr.forEach((stateObj)=>{
      if(stateObj.state){
        stateObj.setState(false)
      }
    })

    dispatch(addTo(pizza, "cartItems"))

    console.log("resetting pizza");
    setPizza({
      id: uuidv4(),
      toppings: [],
      toppingPrices: [],
      toppingImages: [],
      price: parseFloat(12.00)
    })
  }

  const resetToppings = () => {

    toppingStateArr.forEach((stateObj)=>{
      if(stateObj.state){
        stateObj.setState(false)
      }
    })

  }

  console.log("pizza", pizza);
  console.log("state", state)

  // will fire when any topping state is changed
  useEffect(() => {
    
    let tempToppings = [...pizza.toppings]
    let tempToppingPrices = [...pizza.toppingPrices]
    let tempToppingImages = [...pizza.toppingImages]
    let tempPrice = parseFloat(0.00)

    toppingStateArr.forEach((stateObj, index)=>{ 
      
      // checks if current state is true and whether topping is in tempToppings array...adds image, topping, and price accordingly
      if(stateObj.state && !tempToppings.includes(toppings[toppingsArr[index]].name)){
        tempToppings = tempToppings.concat(toppings[toppingsArr[index]].name)
        tempToppingPrices = tempToppingPrices.concat(toppings[toppingsArr[index]].price)
        console.log("tempToppingPrices", toppings[toppingsArr[index]].price);
        tempToppingImages = tempToppingImages.concat(toppings[toppingsArr[index]].toppingImage)
        tempPrice += toppings[toppingsArr[index]].price
      }
      // checks if current state is not true and whether topping is not in tempToppings array...removes images, topping, and price accordingly
      else if(!stateObj.state && tempToppings.includes(toppings[toppingsArr[index]].name)){
        let i = tempToppings.indexOf(toppings[toppingsArr[index]].name)
        tempToppings.splice(i, 1)
        tempToppingPrices.splice(i, 1)
        tempToppingImages.splice(i, 1)
        tempPrice -= toppings[toppingsArr[index]].price
      }
    })

    setPizza({
      ...pizza,
      toppings: tempToppings,
      toppingPrices: tempToppingPrices,
      toppingImages: tempToppingImages, 
      price: pizza.price + tempPrice
    })

  }, [anchovies, bacon, basil, feta, ham, italianSausage, jalapenos, mushrooms, olives, onions, parmesan, pepperoni, pineapple, shrimp, spinach])

  return (
    <>
      <div className="container-fluid mainContainer mt-5">
        <div className="row">
          
          <Fade left duration={850}>
            <div className="col-3 bg-info pb-3 ms-5 toppingsContainer">
              <Form onSubmit={addToCart}>
                  <div className="toppingsSubContainer">
                    {/* loop to render topping choices */}
                    {toppingsArr.map((key, index)=>{
                      return (
                        <div key={toppings[key].id} className="d-flex toppings align-items-center">
                          <img className="me-4" src={toppings[key].image} width="100px" height="auto" alt="" />
                          <Form.Check type="checkbox" label={toppings[key].name} checked={toppingStateArr[index].state} onChange={()=>addTopping(toppingStateArr[index].state, toppingStateArr[index].setState)} />
                          <span>&nbsp;{formatCurrancy(toppings[key].price)}</span>
                        </div>
                      )
                    })}
                  </div>
                <div className="d-flex justify-content-between">
                  <Button variant="secondary" onClick={resetToppings}>
                    Reset Toppings
                  </Button>
                  <Button variant="primary" type="submit">
                    Add to Order
                  </Button>
                </div>
              </Form>
            </div>
          </Fade>

          {/* Rendering pizza and toppings */}
          <Fade top duration={1200}>
            <div className="col-4">
              <Pizza  pizza={pizza} height={"575px"}/>
            </div>
          </Fade>


          {/* Rendering price and topping names */}
          <Fade top duration={1400}>
            <div className="col-2">
            <h1>Price: {formatCurrancy(pizza.price)}</h1>
              {pizza.toppings.length === 0
              ?
              <h2>No Toppings</h2>
              :
              <>
                <h2>Toppings</h2>
                <ul>
                  {pizza.toppings.map((topping, index)=>{
                    return (
                      <h5 key={index}><li>{topping} ({formatCurrancy(pizza.toppingPrices[index])})</li></h5>
                    )
                  })}
                </ul>
              </>
              }
            </div>
          </Fade>


          {/* Rendering Order Items */}
          <Fade right>
            <div className="ms-5 col-2 cartContainer">
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
                  {cartItems.map(item=>{
                    {/* // component showing pizzas in cart */}
                    return(
                      <Fade key={item.id} >
                      <div className="sideCartPizza my-4 ps-1">
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
    </>
  )
}

export default Builder
