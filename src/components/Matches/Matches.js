
import Navbar from '../navbar/navbar';
import footer from '../footer/footer';
import React from 'react';
import './Matches.css'; 

const Matches = () => {
  const fixturesData = [
    { date: '2023-09-30', teams: 'Team A vs. Team B', venue: 'Stadium 1' },
    { date: '2023-10-02', teams: 'Team C vs. Team D', venue: 'Stadium 2' },
    { date: '2023-10-05', teams: 'Team E vs. Team F', venue: 'Stadium 3' },
  ];

  return (
    <>
    <Navbar/>
    <div className="fixtures-container">
      <h1>Fixtures</h1>
      <table className="fixtures-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Match</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {fixturesData.map((fixture, index) => (
            <tr key={index}>
              <td>{fixture.date}</td>
              <td>{fixture.teams}</td>
              <td>{fixture.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Matches;

