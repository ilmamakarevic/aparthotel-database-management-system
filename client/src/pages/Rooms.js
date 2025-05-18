import React, { useState } from 'react';
import '../assets/styles/rooms.css';

const Rooms = () => {
  const [rooms, setRooms] = useState([
    { 
      roomNumber: '100', 
      roomFloor: 'Floor 1', 
      status: 'Available', 
      description: 'AC, double bed, TV, balcony, towel' 
    },
    { 
      roomNumber: '201', 
      roomFloor: 'Floor 2', 
      status: 'Unavailable', 
      description: 'AC, double bed, TV, balcony, towel' 
    },
    { 
      roomNumber: '301', 
      roomFloor: 'Floor 3', 
      status: 'Reserved', 
      description: 'AC, double bed, TV, balcony, towel' 
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredRooms = rooms.filter(room =>
    room.roomNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.roomFloor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rooms-container">
      <h1>Rooms Management</h1>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search rooms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="rooms-table-container">
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Room Floor</th>
              <th>Status</th>
              <th>Room Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredRooms.map((room, index) => (
              <tr key={index}>
                <td>{room.roomNumber}</td>
                <td>{room.roomFloor}</td>
                <td>
                  <span className={`status-badge ${room.status.toLowerCase()}`}>
                    {room.status}
                  </span>
                </td>
                <td>{room.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rooms;