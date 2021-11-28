import React from 'react';
import { withRouter } from 'react-router-dom';
import Navigation from './Navigation'
import './css/ServicePage.css';
import backgroundVideo from './css/video/backgroundVideo.mp4';

function ServicePage() {
  
  return (
    <div className="service-page">
      <video autoPlay loop muted className="service-page--background-video">
        <source src={backgroundVideo} type="video/mp4" className="service-page--background-video"/>
      </video>
      <Navigation></Navigation>
    </div>
  );
}

export default withRouter(ServicePage);