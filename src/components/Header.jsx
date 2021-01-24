import TankLogo from '../images/Logo_Tank.png';

const Header = (props) => {
    return (
        <div className="Header" >
            <img className="Header__Item" src={TankLogo} alt="Tank Logo" id="Tank-Logo" onClick={()=>props.navClick("ABOUT")}/>
            <div className="Header__Item" onClick={()=>props.navClick("MENU")} >Menu</div>
        </div>
    )
}
export default Header;