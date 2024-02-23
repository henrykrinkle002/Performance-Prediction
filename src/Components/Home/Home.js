import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.scss';

const Home = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the backend
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('state', state);
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
        setName('');
        setEmail('');
        setMobile('');
        setState('');
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
            <label htmlFor="name">Enter Name of your Child</label>
            <input type="text"
              className="input flex" id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
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
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="input flex"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email Address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="input flex"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter your State"
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