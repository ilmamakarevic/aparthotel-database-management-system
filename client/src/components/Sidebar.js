import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt, 
  faDesk, 
  faUsers, 
  faBed,
  faCalendarPlus
} from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-menu">
        <ul>
          <li>
            
            <span>Dashboard</span>
          </li>

          <li>
            
            <span>Front desk</span>
          </li>

          <li>
            
            <span>Guests</span>
          </li>
          <li>
            
            <span>Rooms</span>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="add-booking-btn">
          
          <span>Add booking</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;