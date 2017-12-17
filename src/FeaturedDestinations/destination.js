import React from 'react'
import './destination.css'

function Destination({img, title}){
    return(
        <div className='col-md-2 indDestination'>
            <img src={img} alt={title} />
            <p className='indTitle'>{title}</p>
        </div>
    )
}

export default Destination