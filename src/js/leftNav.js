import React from 'react';
import '../css/app.css';
import sidebar from '../images/sidebar-bg.png';
import dashboard from '../images/dashboard-24px.png';
import notification from '../images/notification_important-24px.png';
import help from '../images/help-24px (2).png';

const sideBarItems = [
  { title:'Main Page', icon: dashboard},
  { title:'Sub'},
  { title:'Sub'},
  { title:'Sub'},
  { title:'Sub'},
  { title:'Sub'},
  { title:'Alerts', icon: notification, totalAlerts: 10}
]



function NavLeft() {
  return (
      <div className="nav-left">
        {
          
          sideBarItems.map((element,idx) => (
            <>
           
            {(idx === sideBarItems.length-1 ? <hr class="margin-vertical-25" /> : "")}
            <div key={idx} className= {`nav-left-item ${element.title.toLowerCase()}`}>
              {(element.icon)?
                <div className='icon'><img src={element.icon} />
                 {(element.title.toLowerCase() === 'alerts' ? <div id='notification'>{element.totalAlerts}</div> : '')}
                </div> : ""
              }
              <div className="title">{element.title}</div>
            </div>
            </>
          ))
        }

       
        
        <div className="bottom-nav-elements">
        <hr class="margin-vertical-25" />
            <div key={sideBarItems.length} className='nav-left-item'>
              <div className="title">Link</div>
            </div>
            <div key={sideBarItems.length + 1} className='nav-left-item'>
              <div className='icon'><img src={help} /></div>
              <div className="title">Help</div>
            </div>
          </div>
          


      </div>
  );
}

export default NavLeft;
