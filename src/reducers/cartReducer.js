
import { ADD_TO } from "../actions/types"

const initalState = {
    cartItems: [],
    numberOfItems: 0,
    totalPrice: parseFloat(0.00),
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
        default:
            return state
    }
}

export default cartReducer