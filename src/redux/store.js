import { configureStore } from '@reduxjs/toolkit'
import TenderReducer, { setSelectedSupplier } from "./slice/TenderSlice"

export const store = configureStore({
  reducer: {tender:TenderReducer,
             
           },


  
});

