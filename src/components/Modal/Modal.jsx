import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';

const Modal = (props) => {
    return (
        <Router>
            <Switch>
                <div className='ModalMenu' >
                    <Link to='/about'><div className='ModalMenu__Item' onClick={()=>props.navClick("ABOUT")}>About Tank's</div></Link> 
                    <Link to='/menu'><div className='ModalMenu__Item' onClick={()=>props.navClick("MENU")}>The Menu</div></Link> 
                    <Link to='/merch'><div className='ModalMenu__Item' onClick={()=>props.navClick("MERCH")}>Merchandise</div></Link> 
                    <Link to='/contact'><div className='ModalMenu__Item' onClick={()=>props.navClick("CONTACT")}>Contact Info</div></Link> 
                </div>
            </Switch>
        </Router>
    )
}
export default Modal;