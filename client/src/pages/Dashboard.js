import React from 'react';
import '../assets/styles/dashboardStyle.css';

function App() {
  return (
    <div className="aparthotel">
      <header>
        <h1>APARTHOTEL Management System</h1>
      </header>

      <section className="search-section">
        <h2>Search for rooms</h2>
      </section>

      <section className="dashboard">
        <h3>Dashboard</h3>
        <p className="date">Monday, April 14, 2025</p>

        <div className="front-desk">
          <table>
            <thead>
              <tr>
                <th>Front desk</th>
                <th>Overview</th>
                <th>Total</th>
                <th>Total</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Guests</td>
                <td>Today's Check-in</td>
                <td>25</td>
                <td>25</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Rooms</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="divider"></div>

        <div className="room-status">
          <h4>Room Status</h4>
          <ul>
            <li>Occupied Rooms: 100</li>
            <li>Clean: 50</li>
            <li>Dirty: 50</li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="occupancy-stats">
          <h4>Occupancy Statistics</h4>
          <ul>
            <li>Monthly</li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="feedback">
          <h4>Customers Feedback</h4>
          <div className="feedback-item">
            <p><strong>Jane</strong></p>
            <p>★★★★</p>
          </div>
          <div className="feedback-item">
            <p><strong>Mark</strong></p>
            <p>★★★</p>
          </div>
          <div className="feedback-item">
            <p><strong>Lily</strong></p>
            <p>★★★</p>
            <p className="comment">Room cleaning could be better.</p>
          </div>
          <div className="feedback-item">
            <p><strong>Jack</strong></p>
            <p>★★★★</p>
          </div>
        </div>
      </section>

      <button className="add-booking">Add booking</button>
    </div>
  );
}

export default App;