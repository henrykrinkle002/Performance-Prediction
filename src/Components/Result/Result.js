import React, { useEffect, useState } from 'react';
import './result.scss'
import data from '/Users/amalkurian/client/src/Assets/percentile';

interface Props{}


const Result : React.FC<Props> = () => {
  const [percentile, setPercentile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/result');
       // const data = await response.json();
        setPercentile(data.percentile);
      } catch (error) {
        console.error('Error fetching result: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="result-container">
      <div className="result-percentage-circle">
        <div className="result-percentage-value">{percentile}%</div>
      </div>
      <h1 className="result-percentile">{percentile}</h1>
      <p className="result-description">
        {percentile === null ? (
          'Loading result...'
        ) : percentile >= 75 ? (
          'Excellent! You are in the top quartile of students.'
        ) : percentile >= 50 ? (
          'Good job! You are in the middle half of students.'
        ) : percentile >= 25 ? (
          'Keep practicing! You are in the bottom half of students.'
        ) : (
          'Uh oh! You are in the bottom quartile of students. Let\'s work together to improve your performance.'
        )}
      </p>
    </div>
  );
};

export default Result;