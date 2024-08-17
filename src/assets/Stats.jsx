import React, { useState, useEffect } from 'react';
import './stats.css';

function Stats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/harshdeepkv')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  // Display statistics from the data
  return (
    <div className='Stats'>
      <p className='stats'>LC Statistics</p>
      <div className='stats-details'>
        {data ? (
          <>
            <div className='statistics'>
                <div>Total Solved: {data.totalSolved}</div>
                <div>Easy Solved: {data.easySolved}</div>
                <div>Medium Solved: {data.mediumSolved} </div>
            </div>
            <div className='statistics'>
                <div>Hard Solved: {data.hardSolved} </div>
                <div>Contribution Points: {data.contributionPoints}</div>
                <div>Ranking: {data.ranking}</div>
            </div>
            
           
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Stats;
