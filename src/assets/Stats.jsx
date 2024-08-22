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
                <div>Total Solved: 401</div>
                <div>Easy Solved: 70</div>
                <div>Medium Solved: 50 </div>
            </div>
            <div className='statistics'>
                <div>Hard Solved: 281 </div>
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
