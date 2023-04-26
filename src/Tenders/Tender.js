import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTender, deleteTender, editTender } from '../redux/slice/TenderSlice';


const Tender = ({tender}) => {
    
    const dispatch = useDispatch();
    const [onUpdate, setOnUpdate] = useState(false);
    const [newTender, setNewTender] = useState(tender);
  return (
    <div className="tender-container" >
    
    {onUpdate ? 
    <div className='tender-container0'>
    <input type={"text"} defaultvalue={tender.title}  placeholder='title'
    onChange={(e)=> setNewTender({...newTender, title: e.target.value})
    }/>
    <input type={"text"} defaultvalue={tender.description} placeholder='description'
    onChange={(e)=> setNewTender({...newTender, description: e.target.value})
    }/>
    <input type={"text"} defaultvalue={tender.type} placeholder='type'
    onChange={(e)=> setNewTender({...newTender, type: e.target.value})
    }/>
    <input type={"text"} defaultvalue={tender.Quantity} placeholder='Quantity'
    onChange={(e)=> setNewTender({...newTender, Quantity: e.target.value})
    }/>
    <input type={"text"} defaultvalue={tender.TenderBudget} placeholder='TenderBudget'
    onChange={(e)=> setNewTender({...newTender, TenderBudget: e.target.value})
    }/>

    
    <button onClick={()=> {dispatch(editTender(newTender))
                           setOnUpdate(false)}}>Confirm</button>
    <button onClick={()=> setOnUpdate(false)}>Cancel</button>
      
    </div>  : 
    
     
    <div  className='tender-container1'>
      <h2>Tender Name:{tender.title}</h2>
      <h2>Tender Type:{tender.type}</h2>
      <h2>Tender Quantity: {tender.Quantity}</h2>
      <h2>Tender Budget:{tender.TenderBudget}</h2>
      <textarea>{tender.description}</textarea>
      <button onClick={()=> setOnUpdate(true)}>Update</button>
      <button onClick={()=> dispatch(deleteTender(tender))}>delete</button>
      <button onClick={()=> dispatch(addTender(newTender))}>Subbmit</button>
      </div>
            }  
    </div>
  );
}

export default Tender;
