import React from 'react'
import homes from '../img/explore/homes.jpg'
import exp from '../img/explore/exp.jpg'
import res from '../img/explore/res.jpg'
import './ind-explore.css'

function IndvExplore() {
    return (
        <div className='row'>
            <div className='offset-md-2 col-md-2 d-flex indExp'>
                <img src={homes} alt='homes' />
                <p>Homes</p>
            </div>
            <div className='col-md-2 d-flex indExp'>
                <img src={exp} alt='homes' />
                <p>Experiences</p>
            </div>
            <div className='col-md-2 d-flex indExp'>
                <img src={res} alt='homes' />
                <p>Restaurants</p>
            </div>     
        </div>
    )
}

export default IndvExplore