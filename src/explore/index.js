import React from 'react'
import IndvExplore from './ind-explore'
import './index.css'

function Explore(){
    return(
        <div>
            <div className='row'>
                <div className='col-md-6 offset-md-2 mainTitle '>
                    <p>Explore Airbnb</p>
                </div> 
            </div> 
            <IndvExplore />
        </div>
    )
}

export default Explore