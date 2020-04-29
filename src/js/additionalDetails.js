import React from 'react';
import '../css/app.css';
import caret from '../images/expand_more-24px (2).png';


function AdditionalDetails() {
  return (
        <div className="width-100 roboto">
        <div className="label bold padding-bottom-8 montserrat navy font-size-10 ">
          Additional Details
        </div>
        <div className="label sm bottom-border padding-bottom-6">
          * required field
        </div>
        <div className="label md padding-top-20 padding-bottom-6 slightly-expanded">
          * Section
        </div>
        <div className="dropdown label md margin-top-12 margin-bottom-16 ">
          <span class="placeholder"> * Drop Down</span>
          <span class="caret"><img src={caret} /></span>
        </div>
        <div className="text-field label md  margin-top-12 margin-bottom-16">
          <span class="placeholder">Field</span>
        </div>
        <div className="text-field label margin-top-20 margin-bottom-25">
          <span class="placeholder">Field</span>
        </div>
        <div className="label md slightly-expanded padding-top-30 padding-bottom-7">
          Optional
        </div>
        <div className="dropdown label md">
          <span class="placeholder"> Select Freqency</span>
          <span class="caret"><img src={caret} /></span>
        </div>
        <div className="label sm font-size-8">
          This is a subtext explaining what's up.
        </div>
      </div>
  );
}
export default AdditionalDetails;
