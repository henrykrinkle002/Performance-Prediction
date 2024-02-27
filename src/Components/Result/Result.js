import React, { useState } from 'react';
import CircularBarGraph from './CircularBarGraph/CircularBarGraph'; 
import './result.scss';

const Result: React.FC = () => {
  const data = require('../../Assets/percentile.json');
  const [percentile, setPercentile] = useState(data.percentile);

  const getResultDescription = (percentile: number) => {
    if (percentile === null) {
      return 'Loading result...';
    } else if (percentile >= 8.25) {
      return 'Excellent! You are in the top quartile of students.';
    } else if (percentile >= 5.75) {
      return 'Good job! You are in the middle half of students.';
    } else if (percentile >= 3.25) {
      return 'Keep practicing! You are in the bottom half of students.';
    } else {
      return 'Uh oh! You are in the bottom quartile of students. Let\'s work together to improve your performance.';
    }
  };

  return (

    <div className="result-container">
      <div className="result-percentage-circle">
        <CircularBarGraph sgpa={percentile} />
      </div>
       
      <p className="result-description">{getResultDescription(percentile)} </p>
    </div>
  );
};

export default Result;