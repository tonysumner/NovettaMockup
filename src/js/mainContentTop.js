import React from 'react';
import '../css/app.css';


function MainContentTop() {
  return (
    <div id="main-content-top">
      <div class="left-most-div">
        <div className="label lg bold padding-bottom-8 montserrat">
          Title of Widget
        </div>
        <div className="label required-fields">
          * required fields
        </div>
      </div>  
      <div class="right-most-div">
        <button id="create-page">Create Page</button>
        <button id="export-as">Export As...</button>
      </div>  
  </div>
  );
}
export default MainContentTop;
