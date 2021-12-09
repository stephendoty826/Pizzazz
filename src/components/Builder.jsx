
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux'
import { addTo } from '../actions/cartActions';
import Form from 'react-bootstrap/Form';
import { toppings } from "../assets/data"
import { formatCurrancy } from "../components/utils"
import Pizza from './Pizza';

function Builder() {

  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartCR.cartItems)
  const state = useSelector(state => state.cartCR)

  // state for building pizza
  const [pizza, setPizza] = useState({
    //todo add id
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
        tempToppingImages.splice(i, 1)
        tempPrice -= toppings[toppingsArr[index]].price
      }
    })

    setPizza({
      toppings: tempToppings,
      toppingPrices: tempToppingPrices,
      toppingImages: tempToppingImages, 
      price: pizza.price + tempPrice
    })

  }, [anchovies, bacon, basil, feta, ham, italianSausage, jalapenos, mushrooms, olives, onions, parmesan, pepperoni, pineapple, shrimp, spinach])

  return (
    <>
      <div className="container-fluid mainContainer">
        <div className="row">
          
          <div className="col-3 bg-info pb-3">
            <Form onSubmit={addToCart}>
                <div className="toppings">
                  {/* loop to render topping choices */}
                  {toppingsArr.map((key, index)=>{
                    return (
                      <div key={toppings[key].id} className="d-flex my-5">
                        <img className="me-5" src={toppings[key].image} width="100px" height="auto" alt="" />
                        <Form.Check type="checkbox" label={toppings[key].name} checked={toppingStateArr[index].state} onChange={()=>addTopping(toppingStateArr[index].state, toppingStateArr[index].setState)} />
                        <span>&nbsp; {formatCurrancy(toppings[key].price)}</span>
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

          {/* component showing pizza being built */}
          <div className="col-4">
            <Pizza  pizza={pizza} height={"575px"}/>
          </div>

          <div className="col-2">
          <h1>Price: {formatCurrancy(pizza.price)}</h1>
            <h2>Toppings</h2>
            <ul>
              {pizza.toppings.map((topping, index)=>{
                return (
                  <h5 key={index}><li>{topping} ({formatCurrancy(pizza.toppingPrices[index])})</li></h5>
                )
              })}
            </ul>
          </div>

          <div className="ms-5 col-2 cartContainer">
            {cartItems.length === 0
            ?
            <h1 className="text-center">Cart is empty</h1>
            :
            <h1 className="text-center">{cartItems.length} pizzas in Cart</h1>
            }
            <div className="position-relative cart pb-5">
              {cartItems.map((item, index)=>{
                return(
                  // component showing pizzas in cart
                  <div className="pizzaHeight my-4">
                    <Pizza key={index} pizza={item} height={"150px"}/>
                  </div>
                  
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Builder
