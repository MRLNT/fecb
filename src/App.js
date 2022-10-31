import ReactDOM from "react-dom";  //Import here
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


// import Home from "./page/Home" ;
import PPDB from "./page/PPDB";

export default function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PPDB />}/>
            {/* <Route path="/ppdb" element={<PPDB />}/> */}

          </Routes>
        </BrowserRouter>
      );
     
 }

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);