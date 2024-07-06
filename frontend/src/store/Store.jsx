import {configureStore} from "@reduxjs/toolkit"
import CarDashboardSlice from "./slices/CarDashboardSlice";

const Store = configureStore ({
    reducer:{
        cars: CarDashboardSlice
    } 
})

export default Store;