import React from 'react';
import './modal.css';

const Modal = (props) => {
    return (
            <div className='ModalMenu' >
                <div className='ModalMenu__Item' onClick={()=>props.navClick("ABOUT")}>About Tank's</div>
                <div className='ModalMenu__Item' onClick={()=>props.navClick("MENU")}>The Menu</div>
                <div className='ModalMenu__Item' onClick={()=>props.navClick("MERCH")}>Merchandise</div>
                <div className='ModalMenu__Item' onClick={()=>props.navClick("CONTACT")}>Contact Info</div>
            </div>
    )
}
export default Modal;