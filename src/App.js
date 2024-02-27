import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Result from './Components/Result/Result';
import Footer from './Components/Footer/Footer';
import Introduction from './Components/Introduction/Introduction';
const App = () => {
 return (
  <>
  
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={[<Introduction />]} />
         <Route path="/Home" element={<Home />} />
         <Route path="/Result" element={<Result />} />
      </Routes>
    </Router>
    
    <Footer />
    
  </>  
  );
};



export default App;
