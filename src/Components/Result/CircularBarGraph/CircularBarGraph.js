import React from 'react';

const CircularBarGraph = ({ percent }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percent) / 100;

  return (
    <svg width="160" height="150">
      <circle
        r={radius}
        cx="50"
        cy="50"
        stroke="blue"
        strokeWidth="10"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90) translate(-125, 25)"  
      />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24">
        {percent}%
      </text>
      <style jsx>{`
        svg {
          cursor: pointer;
        }
      `}</style>
    </svg>
  );
};

export default CircularBarGraph;