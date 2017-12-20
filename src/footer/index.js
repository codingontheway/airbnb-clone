import React from 'react'
import './index.css'

function Footer(){
    return(
        <div className='footerStyle'>
            <hr />
            <div className='row offset-md-2 col-md-10'>
                <div className='col-md-3'>
                    <div class="dropdown">
                        <button class="btn btn-outline-secondary dropdown-toggle dropdownStyle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            arabic
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item">English</a>
                            <a class="dropdown-item">Spainsh</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-outline-secondary dropdown-toggle dropdownStyle ddsec" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Egypt
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item">Egypt</a>
                            <a class="dropdown-item">Spain</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <h2 className='footerHead'>Airbnb</h2>
                    <p className='footerContent'>About us</p>
                    <p className='footerContent'>Careers</p>
                    <p className='footerContent'>Press</p>
                    <p className='footerContent'>Policies</p>
                    <p className='footerContent'>Help</p>
                    <p className='footerContent'>Diversity &amp; Belonging</p>
                </div>
                <div className='col-md-3'>
                    <h2 className='footerHead'>Discover</h2>
                    <p className='footerContent'>Trust &amp; Safety</p>
                    <p className='footerContent'>Travel Credit</p>
                    <p className='footerContent'>Travel Credit</p>
                    <p className='footerContent'>Airbnb Citizen</p>
                    <p className='footerContent'>Business Travel</p>
                    <p className='footerContent'>Guidebooks</p>
                </div>
                <div className='col-md-3'>
                    <h2 className='footerHead'>Hosting</h2>
                    <p className='footerContent'>Why Host</p>
                    <p className='footerContent'>Hospitality</p>
                    <p className='footerContent'>Responsible Hosting</p>
                    <p className='footerContent'>Community Center</p>
                </div>
            </div>

        </div>
    )
}

export default Footer