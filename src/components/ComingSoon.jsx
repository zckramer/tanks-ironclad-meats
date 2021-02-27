import React from 'react';
import comingSoon from '../images/comingSoon.png'
const ComingSoon = ()=> {
    return(
        <div className='ComingSoon'>
            <img 
                src={comingSoon} 
                alt='coming soon'
                style={{width: '50%', height: '50%', borderRadius: '15px'}}
            /> 
        </div>
    ) 
}

export default ComingSoon;