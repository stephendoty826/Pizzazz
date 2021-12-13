# Pizzazz - Pizza Builder

## Overview:
Pizzazz is a pizza building site where a user is able to customize pizzas with a variety of different toppings. A user can also look through some pre-built fan favorite pizzas.  

## Application screenshots:

![Alt text](public/images/screenshots/homepage_screenshot.png)
<br/>

![Alt text](public/images/screenshots/fanFavs_screenshot.png)
<br/>

![Alt text](public/images/screenshots/builder_screenshot.png)
<br/>

## Team:

Stephen Doty
<br>

## Tools used to build this application:

HTML,
CSS,
Bootstrap,
JavaScript,
React,
Redux

## Basic Objectives:

Allow individuals to build their own pizza with a variety of toppings or choose from a selection of fan favorites.
 - User can add their pizzas or fan favorites to their order. 
 - Change quantity of pizzas on the order.
 - Focus on fucntionality and implment a nice webpage layout.

## Flex Goals Completed:

- Visually show pizza being built
- Track price of pizza as toppings are added
- Add multiple pizzas to order
- Show order items on builder page as they are added with delete and quantity buttons
- Show order items on cart page with delete and quantity buttons along with subtotal, tax, and total
- Fan favorites page with pre-built pizzas

## Stretch Goals Future:

- Add customer built pizzas to favorites
- Sort toppings in specific order (meats, seafood, veggies, misc...)
- Add deals that a user can use on an order
- Select lite, regular, or extra toppings
- Different types of crust
- Different types of cheese
- Different size pizzas (X-Large, Large, Medium)
- Coupon codes
- Drag & drop toppings
- Be able to edit pizza in the cart
- Make it a game where you build pizzas for orders comming in. Keep track of profits. Have cost vs price. When orders are late, customer is charged less. Quick orders customer is charged more. 


## Challenges & Solutions:

Challenges: 
- Tracking global state through out the application and through reducer.
```
const cartReducer = (state=initalState, action) => {

    switch(action.type){
        case ADD_TO:
            
            if(action.bin === "cartItems"){
                let newCartItems = [...state.cartItems]
                let isFound = false
                
                newCartItems.forEach(item => {
                    if(item.id === action.pizza.id){
                        item.count++
                        isFound = true
                    }
                })

                if(!isFound){
                    newCartItems.push({...action.pizza, count: 1})
                }

                return {
                    ...state,
                    cartItems: newCartItems,
                    numberOfItems: state.numberOfItems + 1,
                    totalPrice: state.totalPrice + parseFloat(action.pizza.price)
                }
            }
        case DELETE_PIZZA:
            return {
                ...state,
                cartItems: state.cartItems.filter(item=>action.pizza.id !== item.id),
                numberOfItems: state.numberOfItems - action.pizza.count,
                totalPrice: state.totalPrice - parseFloat(action.pizza.price * action.pizza.count)
            }
        case CHANGE_COUNT:
            action.pizza.count = action.count
            let newPrice = 0
            let newTotalNumber = 0
            let newCartItems = state.cartItems.map(item=>{
                if(item.id === action.pizza.id){
                    console.log("inside if-statement")
                    newPrice += action.pizza.price * action.pizza.count
                    newTotalNumber += action.pizza.count
                    return item
                }
                newPrice += item.price * item.count
                newTotalNumber += item.count
                return item
            })
            return {
                ...state,
                cartItems: newCartItems,
                numberOfItems: newTotalNumber,
                totalPrice: newPrice
            }
        case PLACE_ORDER:
            return {
                ...state,
                cartItems: [],
                numberOfItems: 0,
                totalPrice: parseFloat(0.00)
            }
        default:
            return state
    }
}
```
- Stacking toppings one on top of the other
- Implementing quantity options for orders in cart
<br>

Solutions:
- Referenced previous projects to review structure of data flow
- Made use of Photoshop to create PNGs of toppings along with position absolute to stack toppings
- Referenced previous projects for logic of quantity

