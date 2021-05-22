import React from 'react';

const KramerFooter = () => {
    return(
        <div 
        className='Footer'
        style={{
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }} 
    >
        Web Design/Development by  
        <a href='https://www.linkedin.com/in/zckramer/' 
            rel='noreferrer'
            target='_blank'
            style={{
                textDecoration:'none', 
                color:'inherit', 
                backgroundColor:'#282c34DD', 
                margin: '4px', 
                borderRadius:'6px', 
                fontWeight:'bold',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
            > Zack Kramer 
        </a>
    </div>

    )
}

export default KramerFooter;