import React from 'react'
import './header.css'
import './Button.js'
import './card.css'


function Card() {
    return (
    <div class='card'>
        <div class='container'>
            <div class='icon'>
            </div>
            <div class='herofont'>
            <img src={require('./SolutionIcon.png')} alt="Solutions Icon" ></img>
            </div>
        </div>
        <div> 
        <div class='herofont'>Solution Title</div>
            <p>Streamlinessss the planning of capital assets and related impact to depreciation, maintenance and insurance across the P&L, Balance Sheet and Cash Flow Statement.</p>
        </div>
    </div> 
    );
    }

    export default Card
    