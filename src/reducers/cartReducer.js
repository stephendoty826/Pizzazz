
import { ADD_TO, DELETE_PIZZA, CHANGE_COUNT, PLACE_ORDER } from "../actions/types"
import { justCheese, pepperoni, meatLovers, veggieLovers, hawaiianPizza, byTheBay, sweetNSpicy, theWorks } from "../assets/fanFavorites"

const initalState = {
    cartItems: [],
    numberOfItems: 0,
    totalPrice: parseFloat(0.00),
    fanFavorites: [justCheese, pepperoni, meatLovers, veggieLovers, hawaiianPizza, byTheBay, sweetNSpicy, theWorks],
    favorites: [],
    numberOfFavorites: 0
}

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

export default cartReducer