import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./CartSlice.jsx"

const Store = configureStore({
    reducer : {
        cart : CartSlice,
    }
})

export default Store