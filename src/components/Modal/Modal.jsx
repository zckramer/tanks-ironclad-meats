import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Modal = (props) => {
    return (
                <div className='ModalMenu' >
                    <NavLink to='/about'><div className='ModalMenu__Item' onClick={()=>props.navClick("ABOUT")}>About Tank's</div></NavLink> 
                    <NavLink to='/menu'><div className='ModalMenu__Item' onClick={()=>props.navClick("MENU")}>The Menu</div></NavLink> 
                    <NavLink to='/merch'><div className='ModalMenu__Item' onClick={()=>props.navClick("MERCH")}>Merchandise</div></NavLink> 
                    <NavLink to='/contact'><div className='ModalMenu__Item' onClick={()=>props.navClick("CONTACT")}>Contact Info</div></NavLink> 
                </div>
    )
}
export default withRouter(Modal);