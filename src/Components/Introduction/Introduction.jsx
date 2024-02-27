import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './introduction.scss';
import {GrLocation} from 'react-icons/gr';
import {HiFilter} from 'react-icons/hi';
import {FiFacebook} from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {BsListTask} from 'react-icons/bs';
import {TbApps} from 'react-icons/tb';
import Main from '../../Components/Main/Main';

//import video from '../../Components/Emotion-detection/video.mp4';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Introduction = () => {
    
    const navigate = useNavigate();
  useEffect(() =>{
     Aos.init({duration: 2000})
  }, [])

   

  const handleNavigate = () => {
     navigate("/Home");
  };

   

   return (
      <div>

       <section className="home">
   
         <div className="overlay"></div>
        {/*<video src={video} muted autoPlay loop type="video/mp4"></video>*/}
        <div className="homeContent container"> {/*classname space element to be considered as*/}
        <div data-aos="fade-up" className="cardDiv grid">
         
        <div className="destinationInput">
          <div className="textDiv">
            <h1 data-aos="fade-up" className="homeTitle">
             Performance Analysis
           </h1>    
         </div>
         <div className="caption">
               <p data-aos="fade-up"> 
               <br/>
               Empowering Education: Navigating Tomorrow's Success through Data-Driven Insights and Analysis. </p>
            </div>
        </div>
                
           <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <button onClick={handleNavigate}>Get Started</button>    
           </div>
        </div>
        

          <div data-aos="fade-up" className="homeFooterIcons flex">
           <div className="rightIcons">
             <FiFacebook className="icon"/>
             <AiOutlineInstagram className="icon"/>
             <FaTripadvisor className="icon"/>
           </div>
           
           <div className="leftIcons">
             <BsListTask className="icon"/>
             <TbApps className="icon"/>
           </div>
          </div>
       
        </div>
       </section>  
         <Main /> 
       </div>     
       )
  
}



export default Introduction;