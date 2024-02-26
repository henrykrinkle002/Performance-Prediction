import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.scss';

const Home = (props) => {
  const navigate = useNavigate();
  const [attendance, setAttendance] = useState('');
  const [sgpa, setSGPA] = useState('');
  const [mobile, setMobile] = useState('');
  const [Percentage, setPercentage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the backend
    const formData = new FormData();
    formData.append('ATTENDANCE', attendance);
    formData.append('SGPA', sgpa);
    formData.append('mobile', mobile);
    formData.append('Overall Percentage', Percentage);
    console.log('dafkdjhfas');

    // For demonstration purposes only, replace this with your own API call
    fetch('http://localhost:3000/Result', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Reset form fields
        setAttendance('');
        setSGPA('');
        setMobile('');
        setPercentage('');
        // Navigate to the next page
         navigate('/Result');

      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="home container">
        <form onSubmit={handleSubmit}>
         <div className="home-contents container">
          <h3 className="details">Enter you Details</h3>
          <div className="form-group">
            <label htmlFor="attendance">Enter attendance of your Child</label>
            <input type="text"
              className="input flex" id="attendance"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              placeholder="Enter attendance"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              className="input flex"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your Mobile Number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sgpa">SGPA </label>
            <input
              type="sgpa"
              className="input flex"
              id="sgpa"
              value={sgpa}
              onChange={(e) => setSGPA(e.target.value)}
              placeholder="Enter your SGPA "
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Percentage">Percentage</label>
            <input
              type="text"
              className="input flex"
              id="Percentage"
              value={Percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="Enter your Percentage"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Book your Free Session
          </button>
{  /*        <p className="small text-muted">
            Learn from India's best teachers.
          </p> */}
          <p className="small text-muted">
            Already have an account?{' '}
            <a href="/login" className="text-primary">
              Login
            </a>{' '}
            Offline. 
            Send OTP.
          </p>
         </div> 
        </form>
      
    </div>
  );
};

export default Home;