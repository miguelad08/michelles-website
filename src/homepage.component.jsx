import React from 'react';

import './homepage.styles.scss';


const Homepage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Eye Lashes</h1>
                    <span classNAme='subtitle'>Book Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Make Up</h1>
                    <span classNAme='subtitle'>Book Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Hair Styles</h1>
                    <span classNAme='subtitle'>Book Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Nails</h1>
                    <span classNAme='subtitle'>Book Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Full Package</h1>
                    <span classNAme='subtitle'>Book Now</span>
                </div>
            </div>
        </div>
    </div>
);

export default Homepage;