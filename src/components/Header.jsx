import TankLogo from '../images/Logo_Tank.png';

const Header = (props) => {
    return (
        <div className='Header'>
            <img className='Header__Item' 
                src={TankLogo} 
                alt="Tank Logo" 
                // onClick={()=>props.navClick("ABOUT")}
            />
            <div className='Header__Item' 
                onClick={()=>props.onClick()} >{props.showModal ? 'CLOSE' : 'MENU'}
            </div>
        </div>
    )
}
export default Header;