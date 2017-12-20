import React from 'react'
import Home from './home'
import home1Img from '../img/home/home1.png'
import home2Img from '../img/home/home2.PNG'
import home3Img from '../img/home/home3.PNG'
import home4Img from '../img/home/home4.PNG'
import home5Img from '../img/home/home5.PNG'
import home6Img from '../img/home/home6.PNG'
import home7Img from '../img/home/home7.PNG'
import home8Img from '../img/home/home8.PNG'

const home1 = {
    img: home1Img,
    title: 'ENTIRE APARTMENT · 2 BEDS',
    details: 'Loft Studio in the Central Area',
    price: '50 USD per night'
}

const home2 = {
    img: home2Img,
    title: 'ENTIRE HOUSE · 1 BED',
    details: 'BALIAN TREEHOUSE w beautiful pool',
    price: '50 USD per night'
}

const home3 = {
    img: home3Img,
    title: 'ENTIRE CABIN · 1 BED',
    details: 'Unique Cob Cottage',
    price: '50 USD per night'
}

const home4 = {
    img: home4Img,
    title: 'ENTIRE APARTMENT · 1 BED',
    details: 'Superb location, Heian Shrine, Bus Stop in front',
    price: '50 USD per night'
}

const home5 = {
    img: home5Img,
    title: 'ENTIRE APARTMENT · 1 BED',
    details: 'Holiday in Toscany in the Strettoio',
    price: '50 USD per night'
}

const home6 = {
    img: home6Img,
    title: 'ENTIRE APARTMENT · 0 BEDS',
    details: 'Pettinarihome Campo de FIORI',
    price: '50 USD per night'
}

const home7 = {
    img: home7Img,
    title: 'ENTIRE APARTMENT · 7 BEDS',
    details: 'Penthouse, 4-5 rooms + 5 balconies',
    price: '50 USD per night'
}

const home8 = {
    img: home8Img,
    title: 'ENTIRE HOUSE · 2 BEDS',
    details: 'Off-grid itHouse',
    price: '50 USD per night'
}

function Homes(){
    return(
        <div>
        <div className='row'>
            <div className='col-md-6 offset-md-2 expMainTitle '>
                <p>Homes</p>
            </div> 
        </div>
        <div className='row offset-md-2 colHomes'>
            <Home img={home1.img} title={home1.title} details={home1.details} price={home1.price}/>
            <Home img={home2.img} title={home2.title} details={home2.details} price={home2.price}/>
            <Home img={home3.img} title={home3.title} details={home3.details} price={home3.price}/>
            <Home img={home4.img} title={home4.title} details={home4.details} price={home4.price}/>
        </div>
        <div className='row offset-md-2 colHomes'>
            <Home img={home5.img} title={home5.title} details={home5.details} price={home5.price}/>
            <Home img={home6.img} title={home6.title} details={home6.details} price={home6.price}/>
            <Home img={home7.img} title={home7.title} details={home7.details} price={home7.price}/>
            <Home img={home8.img} title={home8.title} details={home8.details} price={home8.price}/>
        </div>
    </div>
    )
}

export default Homes