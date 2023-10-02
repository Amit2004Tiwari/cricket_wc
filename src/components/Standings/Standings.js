import Navbar from '../navbar/navbar'
import React from 'react';
import './Standings.css'; 

const StandingsPage = () => {
  const standingsData = [
    { team: 'India', matches: 10, won: 7, lost: 2, points: 14 },
    { team: 'Pakistan', matches: 10, won: 6, lost: 3, points: 12 },
    { team: 'Austrailia', matches: 10, won: 5, lost: 4, points: 10 },
    { team: 'England', matches: 10, won: 5, lost: 3, points: 10 },
    { team: 'South Africa', matches: 10, won: 6, lost:3 , points: 10 },
    { team: 'New Zealand', matches: 10, won: 6, lost: 4, points: 10 },
  ];

  return (<>
    <Navbar/>
    <div className="standings-container">
      <h1 className='dig'>Standings</h1>
      
      <table className="standings-table">
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standingsData.map((teamData, index) => (
            <tr key={index}>
              <td>{teamData.team}</td>
              <td>{teamData.matches}</td>
              <td>{teamData.won}</td>
              <td>{teamData.lost}</td>
              <td>{teamData.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default StandingsPage;
