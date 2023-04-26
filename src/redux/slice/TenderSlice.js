import { createSlice} from '@reduxjs/toolkit'

const initialState = [{ id:Math.random(), title:"Tender 1", TenderBudget:'100' 
                    , description:"fourniture 100 rames papiers", type:"travaux", date: new Date ()
                    , quantity: '20', isDone:false },
                    { id:Math.random(), title:"Tender 2", TenderBudget:'500' 
                    , description:"fourniture des roulements", type:"founiture", date: new Date ()
                    , quantity: '600', isDone:true },
                    { id:Math.random(), title:"Tender 3", TenderBudget:'500' 
                    , description:"fourniture des roulements", type:"service", date: new Date ()
                    , isDone:true }, {
                    
                    }]

                    
export const tenderSlice = createSlice({
  name: "tender",
  initialState,
  searchQuery:'',
  reducers: {
    addTender:(state,action) =>{
      state.push(action.payload)
    },
    deleteTender :(state, action) =>
        { return  state.filter((el)=>el.id !== action.payload.id)},
    editTender : (state,action) =>{
       return state.map(el=> el.id === action.payload.id ? action.payload : el) }, 
      
  
  setSearchQuery: (state, action) => {
    state.searchQuery = action.payload;
  },
  setSelectedSupplier: (state, action) => {
    state.selectedSupplier = action.payload;
  },
},})



export const {addTender, deleteTender, editTender,setSearchQuery, setSelectedSupplier} = tenderSlice.actions;


export default tenderSlice.reducer;