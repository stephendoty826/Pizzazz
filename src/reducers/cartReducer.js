
import { ADD_TO, DELETE_PIZZA, CHANGE_COUNT } from "../actions/types"
import { pepperoni, meatLovers, veggieLovers, hawaiianPizza, byTheBay, sweetNSpicy } from "../assets/fanFavorites"

const initalState = {
    cartItems: [],
    numberOfItems: 0,
    totalPrice: parseFloat(0.00),
    fanFavorites: [pepperoni, meatLovers, veggieLovers, hawaiianPizza, byTheBay, sweetNSpicy],
    favorites: [],
    numberOfFavorites: 0
}

const cartReducer = (state=initalState, action) => {

    switch(action.type){
        case ADD_TO:

            action.pizza.count = 1
            if(action.bin === "cartItems"){
                
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.pizza],
                    numberOfItems: state.numberOfItems + action.pizza.count,
                    totalPrice: state.totalPrice + action.pizza.price
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
        default:
            return state
    }
}

export default cartReducer