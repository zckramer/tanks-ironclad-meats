import TankLogo from '../images/Logo_Tank.png';
import HamburgerMenuIcon from '../images/Hamburger_icon_black.png';
import CloseIcon from '../images/x_icon_black.png';

const Header = (props) => {
    return (
        <div className='Header'>
            <img className='Header__Item' 
                src={TankLogo} 
                alt="Tank Logo" 
                // onClick={()=>props.navClick("ABOUT")}
            />
            {props.showModal ? 
                <img 
                    src={CloseIcon}
                    className='Header__Item' 
                    alt='Close Navigation Menu'
                    onClick={()=>props.closeModal()} 
                />
                    
                :
                <img 
                    src={HamburgerMenuIcon} 
                    className={'Header__Item'} 
                    alt='Open Navigation Menu' 
                    onClick={()=>props.closeModal()} 
                />
            }
        </div>
    )
}
export default Header;