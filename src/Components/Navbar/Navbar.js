import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbar.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
import Home from '../Home/Home';


const Navbar = () => {
  const[active, setActive] = useState("navBar")

  //Function to Toggle
  const showNav = () => {
    setActive("navBar activeNavbar")
  }
  //Function to remove Toggle
  const removeNavbar = () => {
    setActive("navBar")
  }



  return (
    
       <section className = 'navBarSection'>
         <header className = "header flex">

         <div className = "logoDiv">
          
           <a href = '/' className = "logo flex">
            <h1><MdOutlineTravelExplore className="icon"/> Stud</h1>
           
           </a>
          </div>

           <div className = {active}>
             <ul className= "navLists flex">
               
               <li className = "navItem">   
                  <Link to = "/" className= "navLink">Home</Link>
               </li>
               <li className = "navItem">
                  <Link to= "/Contact" className= "navLink">Contact</Link>
               </li>
            
               <button className="btn">
                 <a href = "#">BOOK NOW</a>
               </button>  
             </ul>

             <div onClick={removeNavbar} 
             className = "closeNavbar">
               <AiFillCloseCircle className="icon"/> {/* Mentioned in css earlier*/}  
             </div>
            <Outlet/> 
        </div>
           

           <div onClick={showNav} className="toggleNavbar">
             <TbGridDots className="icon"/>
           </div>
          
 

           </header>
           </section>    
        
      
    );
}


export default Navbar;