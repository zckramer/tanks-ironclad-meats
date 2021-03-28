import React from 'react';

const Modal = (props) => {
    return (
                <div className='ModalMenu' >
                    <div className='ModalMenu__Item' data-scroll='.About' onClick={props.navClick}>About Tank's</div>
                    <div className='ModalMenu__Item' onClick={()=>props.navClick('MENU')}>The Menu</div>
                    {/* <div className='ModalMenu__Item' onClick={()=>props.navClick("ComingSoon")}>Merchandise</div> */}
                    <div className='ModalMenu__Item' data-scroll='.Contact' onClick={props.navClick}>Contact Info</div> 
                </div>
    )
}
export default Modal;