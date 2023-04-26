import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTender } from '../redux/slice/TenderSlice';


const Header = () => {
  const [newTender, setNewTender] = useState({title:"",
   type:"", Quantity:"", TenderBudget:""});
  const dispatch=useDispatch()
  return (
 
    <div className='header-content'>
      <h1>Liste des avis d'appel d'offres</h1>
       <input value={newTender.title} type="text" placeholder='Tender Title' 
      onChange={(e)=> setNewTender ({...newTender,title:e.target.value})}></input>
      <input value={newTender.description} type="text" placeholder='Tender description' 
      onChange={(e)=> setNewTender ({...newTender,description:e.target.value})}></input>
      <input value={newTender.type} type="text" placeholder='Tender type' 
      onChange={(e)=> setNewTender ({...newTender,type:e.target.value})}></input>
      <input value={newTender.Quantity} type="text" placeholder='Tender Quantity' 
      onChange={(e)=> setNewTender ({...newTender,Quantity:e.target.value})}></input>
      <input value={newTender.TenderBudget} type="text" placeholder='Tender Budget' 
      onChange={(e)=> setNewTender ({...newTender,TenderBudget:e.target.value})}></input>
     
      <button onClick={()=> 
      {dispatch(addTender({...newTender, isDone:false, id:Math.floor(Math.random()*10000000000)}))
                            setNewTender({title:"", TenderBudget:"", type:"", Quantity:""})
      }}>AddTender</button>
      
    </div>
    
    
  );
}

export default Header;
