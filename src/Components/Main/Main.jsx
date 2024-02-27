import React, {useEffect} from 'react';
import './main.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi';
import img from '../../Assets/img.jpg';
import img2 from '../../Assets/img.jpg';
import img3 from '../../Assets/img.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
	{
	    id:1,
	    imgSrc: img,
      description: 'Student performance forecasting and analysis play crucial roles in educational institution, aiding educators and administrators in making informed decisons. The first step in this process involves collecting relevant data, including academic records, attendance, and other pertinent information. Utitlizing advanced data analytics, schools can identify patterns and trends that contribute to student success or challenges.'
	},

	{
		id: 2,
		imgSrc: img2,
		description: 'Predictive modelling is an integral aspect of student performance forecasting. By employing macine learning algorithms, educational institutions can anticipate future academic outcomes based on historical data. This not only allows for early interventions in cases of potenital academic struggles but also helps in tailoring educational strategies to individual needs. It promotes a proactive approach to address challenges before they significantly impact a student`s academic journey.'
	},
  {
    id: 3,
    imgSrc: img3,
    description: 'Additionally, performance analysis provides valuable insights into the effectiveness of teaching methodolgies and curriculum. Educators can assess which instructional mehods yield the best results and adapt their approaches accordingly. This data-driven approach enhances the overall quality of education by fostering continuous improvment in teaching practices and curriculum development.'
     },
     
]

const Main = () => {
	  useEffect(() =>{
     Aos.init({duration: 2000})
  }, [])
	return (
       <section className = "main container section">

             <div className="secTitle">
              <h3 className="title">
                  ABSTRACT
              </h3>
              </div>


              <div className="secContent grid">
                
              

              {
              	Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=> {
                   return(
                   	<div data-aos="fade-up" key = {id} className = "singleDestination">
                        {/*return single id from the array mentioned above */}
                   	    <div className="imageDiv">
                   	     <img src = {imgSrc} alt={destTitle}/>
                   	     </div>
                   	     <div className="cardInfo">
                            <h4 className="destTitle">
                            {destTitle}</h4>

                            <div className="fees flex">
                            <div className="desc">
                              <p>{description}</p>
                            </div> 
                             <div className="price">
                              <h5>{fees}</h5>
                             </div>
                            </div>

                            <button className="btn flex">
                               Details <HiOutlineClipboardCheck className="icon"/>
                            </button>
                   	     </div>
                   	</div>
 
                   	) 
              	})
              }
              </div>

        </section>        
		)
}


export default Main;