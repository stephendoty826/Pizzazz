
import { ADD_TO, CHANGE_COUNT, DELETE_PIZZA, PLACE_ORDER } from "./types"

export const addTo = (pizza, bin) => {
    return {
        type: ADD_TO,
        pizza,
        bin
    }
}

export const deletePizza = (pizza) =>{
    return {
        type: DELETE_PIZZA,
        pizza
    }
}

export const changeCount = (pizza, count) => {
    return {
        type: CHANGE_COUNT,
        pizza,
        count
    }
}

export const placeOrder = () => {
    return {
        type: PLACE_ORDER
    }
}