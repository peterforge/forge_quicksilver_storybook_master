import React from 'react'
import './OnestreamCardGrid.css'
import './Button.js'
import './card.css'
import './Logo.js'
import Sidebar from './Sidebar.js';
import Header from './Header.js';

function OnestreamCardGrid() {
    return (
<div class="container">
<div class='row'>
            <Header/>  
            <Sidebar/>
            </div>
<div class="grid-row">
  <div class="grid-item">
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top rex-ray">
          <span class="centered project-image-bg rex-ray-image"></span>
        </div>
        
      </div>
    </div>
  </div>
  <div class="grid-item">
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top sputnik">
          <span class="centered project-image-bg sputnik-image"></span>
        </div>
        
      </div>
    </div>
  </div>
  <div class="grid-item">
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top edgex">
          <span class="centered project-image-bg edgex-image"></span>
        </div>
        
      </div>
    </div>
  </div>
  <div class="grid-item">
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top openswitch">
          <span class="centered project-image-bg openswitch-image"></span>
        </div>
        
      </div>
    </div>
  </div>
  <div class="grid-item">
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top scaleio">
          <span class="centered project-image-bg scaleio-image"></span>
        </div>
        
      </div>
    </div>
  </div>
  
  <div class="grid-item">
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top csi">
          <span class="centered project-image-bg csi-image"></span>
        </div>
        
      </div>
    </div>
  </div>
  <div class="grid-item">
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top kubernetes">
          <span class="centered project-image-bg kubernetes-image"></span>
        </div>
        
      </div>
    </div>
  </div>
  <div class="grid-item">
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top grpc">
          <span class="centered project-image-bg grpc-image"></span>
        </div>
        
      </div>
    </div>
  </div>
  <div class="grid-item">
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top envoy">
          <span class="centered project-image-bg envoy-image"></span>
        </div>
        
      </div>
    </div>
  </div>
  <div class="grid-item">
    <div class="grid-item-wrapper">
      <div class="grid-item-container">
        <div class="grid-image-top istio">
          <span class="centered project-image-bg istio-image"></span>
        </div>
        
      </div>
    </div>
  </div>
</div>
</div>
    );
    }

    export default OnestreamCardGrid
    