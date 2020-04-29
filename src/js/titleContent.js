import React from 'react';
import '../css/app.css';
import groupIcon from '../images/supervised_user_circle-24px (5).png'


function TitleContent() {
  return (
    <div className="top-section">
    <div id="title" class="left-most-div">
      <div className='page-title'>
        Insert Title Here
      </div>
      <div className='breadcrumb'>
        HSSC Placemat / USA / NORTHCOM / JPTA 0089 / Blood
      </div>
    </div>
    <div id="stats" class="right-most-div">
      <div id="icon"><img src={groupIcon} /></div>
      <div id="viewing-users">
        <span id="viewing">13 viewing</span>
        <span id="manage-users">Manage Users</span>
      </div>
      <div id="last-modified">
        <span id="updated">Updated: 1 hour ago</span>
        <span id="modified">Modified: 03/03/2020</span>
      </div>
    </div>
  </div>
  );
}
export default TitleContent;
