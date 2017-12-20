import React from 'react'
import './index.css'
import IndEXP from './ind-experience'
import sewingImg from '../img/exp/1.png'
import nightlifeImg from '../img/exp/2.PNG'
import photoClassImg from '../img/exp/3.PNG'
import concertImg from '../img/exp/4.PNG'
import SurfImg from '../img/exp/5.PNG'
import hikeImg from '../img/exp/6.PNG'
import foodImg from '../img/exp/7.PNG'
import foodDrinkImg from '../img/exp/8.PNG'

const sewing = {
    img: sewingImg,
    title: 'SEWING CLASS . TOKYO',
    details: 'Make a unique and original kimono',
    price: '50 USD per person'
}

const nightlife = {
    img: nightlifeImg,
    title: 'NIGHTLIFE · NEW YORK',
    details: 'Discover the city\'s party scene',
    price: '38 USD per person'
}

const photoClass = {
    img: photoClassImg,
    title: 'PHOTO CLASS · LOS ANGELES',
    details: 'Must Have L.A. Pictures!',
    price: '29 USD per person'
}

const concert = {
    img: concertImg,
    title: 'CONCERT · LOS ANGELES',
    details: 'Concert and talk with Industry Exec',
    price: '48 USD per person'
}
const surf = {
    img: SurfImg,
    title: 'SURF LESSON · BALI',
    details: 'The Surf Champion',
    price: '57 USD per person'
}

const  hike = {
    img: hikeImg,
    title: 'GUIDED HIKE · LOS ANGELES',
    details: 'Hike Runyon Canyon with a rescue dog',
    price: '24 USD per person'
}

const food = {
    img: foodImg,
    title: 'FOOD TASTING · HAVANA',
    details: 'Cultural Walking Food Tour of Havana',
    price: '37 USD per person'
}

const foodDrink = {
    img: foodDrinkImg,
    title: 'FOOD & DRINK · MEXICO CITY',
    details: 'Bikes&Munchies - The Foodie Bike Tour',
    price: '41 USD per person'
}
function Experiences(){
    return(
        <div>
            <div className='row'>
                <div className='col-md-6 offset-md-2 expMainTitle '>
                    <p>Experiences</p>
                </div> 
            </div>
            <div className='row offset-md-2 colexp'>
                <IndEXP img={sewing.img} title={sewing.title} details={sewing.details} price={sewing.price}/>
                <IndEXP img={nightlife.img} title={nightlife.title} details={nightlife.details} price={nightlife.price}/>
                <IndEXP img={photoClass.img} title={photoClass.title} details={photoClass.details} price={photoClass.price}/>
                <IndEXP img={concert.img} title={concert.title} details={concert.details} price={concert.price}/>
            </div>
            <div className='row offset-md-2 colexp'>
                <IndEXP img={surf.img} title={surf.title} details={surf.details} price={surf.price}/>
                <IndEXP img={hike.img} title={hike.title} details={hike.details} price={hike.price}/>
                <IndEXP img={food.img} title={food.title} details={food.details} price={food.price}/>
                <IndEXP img={foodDrink.img} title={foodDrink.title} details={foodDrink.details} price={foodDrink.price}/>
            </div>
        </div>
    )
}

export default Experiences