import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartPie } from '@fortawesome/free-solid-svg-icons'; 
import { faTable } from '@fortawesome/free-solid-svg-icons'; 
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'; 
import { faHotel } from '@fortawesome/free-solid-svg-icons'; 

import '../assets/styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-menu">
        <ul>
          <li>
           <FontAwesomeIcon icon={faChartPie} className='chart' />
            <span>Dashboard</span>
          </li>

          <li>
            <FontAwesomeIcon icon={faTable} className='table'/>
            <span>Front desk</span>
          </li>

          <li>
            <FontAwesomeIcon icon={faPeopleGroup} className='people' />
            <span>Guests</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faHotel} className='aparthotels'/>
            <span>Aparthotels</span>
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

