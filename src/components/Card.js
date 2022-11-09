import React from 'react'
import './header.css'
import './OnestreamCardGrid.css'
import './Button.js'
import './card.css'
import './layout.css'
import './Logo.js'
import Logo from './Logo.js'


function Card() {
    return (
    <div class='grid-item'>
        <div class='container'>
            <div class="card-main-icon">
            <img src={require('./solutions_placeholder.png')} alt="Solutions Icon" ></img>
            </div>
        </div>
        <Logo/>
        <div class="text-block"> 
            <p>Streamline the planning of capital assets and related impact to depreciation, maintenance and insurance across the P&L, Balance Sheet and Cash Flow Statement.</p>
        </div>
    </div> 
    );
    }

    export default Card
    