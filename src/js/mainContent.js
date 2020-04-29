import React from 'react';
import '../css/app.css';
import AdditionalDetails from './additionalDetails.js';
import TitleContent from './titleContent';
import ClassificationBar from './classificationBar';
import MainContentTop from './mainContentTop';
import MainContentTable from './mainContentTable';

function MainContent() {
  return (
    <div className="main-content">
      <TitleContent />
      <ClassificationBar />
      <div className="content-body">
          <div className="content">
            <MainContentTop />
          </div>
          <div className="content">
            <div id="table"><MainContentTable /></div>
            <div id="additional-details"><AdditionalDetails /></div>
          </div>
      </div>
    </div>
  );
}

export default MainContent;

