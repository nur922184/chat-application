import React from 'react';
import './LeftSideber.css'
import assets from '../../assets/assets';
const LeftSideber = () => {
    return (
        <div  className='ls'>
            <div className="ls-top">
                <div className="ls-nav">
                    <img src={assets} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LeftSideber;