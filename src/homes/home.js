import React from 'react'
import './home.css'


function Home({img, title, details, price}){
    return (
        <div className='col-md-2 indHome'>
            <img src={img} alt='sewingimg'/>
            <p className='indTitle'>{title}</p>
            <p className='indDetails'>{details}</p>
            <p className='indPrice'>{price}</p>
        </div>
    )
}

export default Home 