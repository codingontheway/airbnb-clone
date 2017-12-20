import React from 'react'
import './index.css'
import Destination from './destination'

import japanImg from '../img/destinations/japan.PNG'
import parisImg from '../img/destinations/paris.PNG'
import capeImg from '../img/destinations/cape.PNG'
import miamiImg from '../img/destinations/miami.PNG'
import havanaImg from '../img/destinations/havana.PNG'
import londonImg from '../img/destinations/london.PNG'

const cities = {
    japan: [japanImg, 'Japan'],
    paris: [parisImg, 'paris'],
    cape: [capeImg, 'cape'],
    miami: [miamiImg, 'miami'],
    havana: [havanaImg, 'havana'],
    london: [londonImg, 'london'],
}


function FeaturedDestinations(){
    return (
        <div>
            <div className='row'>
                <div className='col-md-6 offset-md-2 desMainTitle '>
                    <p>Featured Destinations</p>
                </div>
            </div>
            <div className='row col-md-9 offset-md-2 coldestination'>
                    <Destination img={cities.japan[0]} title={cities.japan[1]} />
                    <Destination img={cities.paris[0]} title={cities.paris[1]} />
                    <Destination img={cities.cape[0]} title={cities.cape[1]} />
                    <Destination img={cities.miami[0]} title={cities.miami[1]} />
                    <Destination img={cities.havana[0]} title={cities.havana[1]} />
                    <Destination img={cities.london[0]} title={cities.london[1]} />
            </div>
        </div>
    )
}

export default FeaturedDestinations