// VenuesPage.js
import React from 'react';
import './Venues.css';
import Navbar from '../navbar/navbar'; 

const Venues = () => {
  const venuesData = [
    { name: 'Eden Gardens', city: 'Kolkata', capacity: '66,000' },
    { name: 'Wankhede Stadium', city: 'Mumbai', capacity: '33,108' },
    { name: 'M. Chinnaswamy Stadium', city: 'Bangalore', capacity: '40,000' },
    { name: 'Narendra Modi Stadium', city: 'Ahmedabad', capacity: '132,000' },
    { name: 'Rajiv Gandhi International Stadium', city: 'Hyderabad', capacity: '55,000' },
    { name: 'Arun Jaitley Stadium', city: 'New Delhi', capacity: '41,820' },
    
  ];

  return (<>
  <Navbar/>
    <div className="venues-container">
      <h1>Venues</h1>
      <table className="venues-table">
        <thead>
          <tr>
            <th>Venue</th>
            <th>City</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          {venuesData.map((venue, index) => (
            <tr key={index}>
              <td>{venue.name}</td>
              <td>{venue.city}</td>
              <td>{venue.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Venues;
