
import "./App.css";
import NavBar from "./components/Component/NavBar";
import Header from "./Tenders/Header";
import TenderList from "./Tenders/TenderList";
import SiteName from "./Tenders/SiteName";
import Tender from "./Tenders/Tender";
import { useState } from "react";
import React from 'react';
import { Provider } from 'react-redux';



import { store } from "./redux/store";
import SupplierLogin from "./Suppliers/SupplierLogin";
import TenderSearch from "./Suppliers/TenderSearch";


function App() {
  const [tender, setTender] = useState('');
  

  return (
    <div className="App">

        <NavBar />        
        <SiteName/>
        <Header/> 
        <TenderList />
        <Tender tender={tender}/>
        <SupplierLogin />
        {/* <TenderSearch /> */}
       
      
            
      
      
    </div>
  );
}

export default App;
