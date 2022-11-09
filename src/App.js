import React, { Component, useState, useEffect } from 'react';
import LoadingSpinner from './components/LoadingSpinner.js';
import './App.css';
import Header from './components/Header.js';
import Card from './components/Card.js';
import './components/card.css';
import Sidebar from './components/Sidebar.js';
import "./components/loadingspinner.css";
import Breadcrumb from "./components/Breadcrumb.js";
import LayoutFLexbox from './components/LayoutFlexbox.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class='row'>
            <Header/>  
            <Sidebar/>
            <div class='grid-row'>
            
            <div class='hero'>
                Hero
              </div>
            
                
              <div class='marketplacesmall'>
                Market
              </div>
              <div class='partnerplacesmall'>
                People Planning
              </div>
              <div class='openplacesmall'>
                Partner Place
              </div>
              <div class='blueprintsmall'>
                <h1>BLUEPRINT</h1>
              </div>
             
            
            <div class="row"> 
            <div class="grid-row-container-peopleplanning">People Planning</div>
            
            


    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
            </div>
            </div>
       
        </div>
        </div>
        </div>
      
    );
  }
}
export default App
