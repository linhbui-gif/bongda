import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './css/Navigation.css'
import wcAudio from './css/audio/wcAudio.mp3';

function Navigation () {

  return (
      <audio src={wcAudio} autoPlay loop controls muted
      controlsList="nodownload noplaybackrate"
      className="navigation--audio-mute-btn"
      >
      </audio>
  )  
}

export default withRouter(Navigation);