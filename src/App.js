import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Result from './Components/Result/Result';
import Footer from './Components/Footer/Footer';

const App = () => {
 return (
  <>
    <Navbar/>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Result" element={<Result />} />
      </Routes>
    </Router>
    <Footer />
    
  </>  
  );
};



export default App;
