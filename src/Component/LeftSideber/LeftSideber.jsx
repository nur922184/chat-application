import React from 'react';
import './LeftSideber.css';
import assets from '../../assets/assets';

const LeftSideber = () => {
    return (
        <div className='ls'>
            <div className="ls-top">
                <div className="ls-nav">
                    <img src={assets.logo} className='logo' alt="logo" />
                    <div className="menu">
                        <img src={assets.menu_icon} alt="menu icon" />
                    </div>
                </div>
                <div className="ls-search">
                    <img src={assets.search_icon} alt="search icon" />
                    <input type="text" placeholder='Search here' />
                </div>
            </div>
            <div className="ls-list">
                {Array(12).fill("").map((_, index) => (
                    <div key={index} className="friends">
                        <img src={assets.profile_img} alt="profile" />
                        <div>
                            <p>Richard Sanford</p>
                            <span>Hello, How are You?</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeftSideber;
