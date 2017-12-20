import React from 'react'
import './mainheader.css'

function MainHeader() {
    return (
        <div className='offset-md-2 mainHeader'>
            <h1>Airbnb</h1>
            <p>Book unique homes and experience a <br /> city like a local</p>
            <form className='input-group formMutated col-md-9'>
                <input
                    placeholder="Try 'Ibiza'"
                    className='form-control inputMutated'
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-sumbit-style">Search</button>
                </span>         
            </form>
        </div>
    )
}

export default MainHeader