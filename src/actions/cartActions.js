
import { ADD_TO } from "./types"

export const addTo = (pizza, bin) => {
    return {
        type: ADD_TO,
        pizza,
        bin
    }
}