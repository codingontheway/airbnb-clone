import React from 'react'
import './ind-experience.css'

function IndEXP({img, title, details, price}) {
    return(
        <div className='col-md-2 indExperience'>
            <img src={img} alt='experience img'/>
            <p className='indTitle'>{title}</p>
            <p className='indDetails'>{details}</p>
            <p className='indPrice'>{price}</p>
        </div>           
    )
}

export default IndEXP