import React, {useEffect} from 'react';
import './footer.scss'
import video2 from '../../Assets/video3.mp4';
import {FiSend} from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {FiChevronRight} from 'react-icons/fi';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

useEffect(()=>{
  Aos.init({duration: 2000})
},[])

	return (
        <section className="footer">
          <div className="videoDiv">
            <video src={video2} loop autoPlay muted type="video/mp4">
            </video> 
          </div>
          <div className="secContent container">
             <div className="contactDiv flex">
               <div data-aos = "fade-up" className="text">
                  <small>Keep IN TOUCH</small>
                  <h2>CONTACT US</h2>
               </div>

               <div className="inputDiv flex">
                 <input data-aos="fade up" type="text" placeholder="Enter Email Address"/>
                 <button data-aos="fade up" className="btn flex" type="submit"> SEND 
                   <FiSend className="icon"/>   
                 </button>
               </div>
             </div>
             
             <div className="footerCard flex">
                <div className="footerIntro flex">
                  <div className="logoDiv">
                    <a href="#" className="logo flex">
                    <MdOutlineTravelExplore className="icon"/> PrePer/. 
                    </a>
                  </div>

                  <div data-aos="fade up" className="footerParagraph">
             
                  </div>

                  <div data-aos="fade up" className="footerSocials">
                     <AiOutlineTwitter className="icon"/>
                     <AiOutlineYoutube className="icon"/>
                     <AiOutlineInstagram className="icon"/>
                     <FaTripadvisor className="icon"/> 
                  </div>
                </div>

                <div className="footerLinks grid">

                    <div data-aos="fade up" className="linkGroup">
                        <span className="groupTitle">
                          COURSES
                        </span>


                        <li className="footerList flex">
                          <FiChevronRight className="icon"/>
                            CBSE
                        </li>


                        <li className="footerList flex">
                          <FiChevronRight className="icon"/>
                            ICSE
                        </li>


                        <li className="footerList flex">
                          <FiChevronRight className="icon"/>
                            IAS 
                        </li>

                        <li className="footerList flex">
                          <FiChevronRight className="icon"/>
                            CAT
                        </li>


                        <li className="footerList flex">
                          <FiChevronRight className="icon"/>
                            Commerce
                        </li>
                    </div>

                     <div data-aos="fade up" data-aos-duration="4000" className="linkGroup">
                        <span className="groupTitle">
                        Resources
                        </span>


                        <li className="footerList flex">
                          <FiChevronRight className="icon"/>
                            CAT College Predctor
                        </li>


                        <li className="footerList flex">
                          <FiChevronRight className="icon"/>
                            Worksheets
                        </li>


                        <li className="footerList flex">
                          <FiChevronRight className="icon"/>
                            Home Tuition
                        </li>

                        <li className="footerList flex">
                          <FiChevronRight className="icon"/>
                            Formulas
                        </li>


                        <li className="footerList flex">
                          <FiChevronRight className="icon"/>
                            TripAdvisor
                        </li>
                    </div>
                </div>

                <div className="footerDiv flex">
                   <small>COPYRIGHTS RESERVED</small>
                </div>
             </div>
          </div>

        </section>
		)
}


export default Footer;