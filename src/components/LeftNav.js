import React from 'react'
import './Sidebar.css'


function Sidebar (props) {
  return (
    <div class="navrow">
   
        <img src={require('./NavButtons/Dashboard.png')} alt="Solutions Icon" ></img>
        <img src={require('./NavButtons/Sequences.png')} alt="Solutions Icon" ></img>
        <img src={require('./NavButtons/Allocations.png')} alt="Solutions Icon" ></img>
        <img src={require('./NavButtons/Templates.png')} alt="Solutions Icon" ></img>
        <img src={require('./NavButtons/Settings.png')} alt="Solutions Icon" ></img>
        <img src={require('./NavButtons/Security.png')} alt="Solutions Icon" ></img>
        <img src={require('./NavButtons/Taxonomy.png')} alt="Solutions Icon" ></img>
        <img src={require('./NavButtons/Logs.png')} alt="Solutions Icon" ></img>
        <img src={require('./NavButtons/Tags.png')} alt="Solutions Icon" ></img>

      
    </div>
  )
}

export default Sidebar;