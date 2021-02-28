import TankLogo from '../images/Logo_Tank.png';
import RibsMenuIcon from '../images/ribs_menu_icon.png';
import CrossRibsIcon from '../images/cross_ribs_icon.png';

const Header = (props) => {
    return (
        <div className='Header'>
            <img className='Header__Item' 
                src={TankLogo} 
                alt="Tank Logo" 
            />
            {props.showModal ? 
                <img 
                    src={CrossRibsIcon}
                    className='Header__Item' 
                    alt='Close Navigation Menu'
                    onClick={()=>props.closeModal()} 
                />
                    
                :
                <img 
                    src={RibsMenuIcon} 
                    className={'Header__Item'} 
                    alt='Open Navigation Menu' 
                    onClick={()=>props.closeModal()} 
                />
            }
        </div>
    )
}
export default Header;