import React from 'react';
import { useSelector } from 'react-redux';
import Tender from "./Tender"


const TenderList = () => {

const tenders=useSelector((store) =>store.tender) ;


  return (
   
    <div className='tender-list'>
      {tenders.map((tender,i) => 
      <Tender key={i} tender={tender}/>)}
    </div>
    
  );
}

export default TenderList;
