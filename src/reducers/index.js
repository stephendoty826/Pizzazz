
import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import builderReducer from "./builderReducer"

// EX: access sampleReducer count by using "state.sampleCR.count"
const rootReducer = combineReducers({
    builderCR: builderReducer,
    cartCR: cartReducer
})

export default rootReducer