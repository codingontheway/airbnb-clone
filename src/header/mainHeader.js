import React from 'react'

function MainHeader() {
    return (
        <div>
            <h1>Airbnb</h1>
            <p>Book unique homes and experience a city like a local</p>
            <span class="glyphicons glyphicons-search"></span>
            <input
                placeholder="Try 'Ibiza'"
            />
            <button>Search</button>
        </div>
    )
}

export default MainHeader