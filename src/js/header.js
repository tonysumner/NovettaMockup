import React from 'react';
import logo from '../images/logo-bank-gothic.png';
import search from '../images/search.png';
import chat from '../images/chat-24px.png';
import appIcon from '../images/App-Icon.png';
import photo from '../images/Pic.png';
import '../css/app.css';

const headerLinks = [
  { title: 'Something' },
  { title: 'Page Two Here' },
  { title: 'Something Here' },
  { title: 'Something Here' },
  { title: 'Something Here' }
]

function Header() {
  return (
    <header className="header">

      <div id="header-logo">
        <img src={logo} />
      </div>
      <div id="header-links">
        {
          headerLinks.map((element, idx) => (
            <div key={idx} className='header-item '>
              <span className='nav-link underline'>
                {element.title}
              </span>
            </div>
          ))
        }
      </div>
      <div id='header-misc'>
        <div className='search'>
          <img src={search} />
          <span > Search...</span>
          <img className='chat' src={chat} />
        </div>

        <div className=' user'>
          <span> User Name</span>
          <div className="appIcon" />
        </div>

        <div className="userPhoto">
          <div className = "photo"></div>
        </div>

      </div>
    </header>
  );
}

export default Header;

//Replaced with screencaps b/c
//BankGothic font was not free
//search icon was missing 
