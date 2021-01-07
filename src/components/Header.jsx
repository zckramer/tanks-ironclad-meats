import pigImage from '../images/pigline.png';
import TankLogo from '../images/Logo_Tank.png';

const Header = (props) => {
    return (
        <div className="Header" >
            <img className="Header__Item" id="Logo__Header" src={pigImage} onClick={()=>props.navClick("PIG")} />
            <img src={TankLogo} alt="Tank Logo" id="Tank-Logo"/>
            <div className="Header__Item" onClick={()=>props.navClick("MENU")} >Menu</div>
            
            {/* <div className="Header__Item">Catering</div>
            <div className="Header__Item">Contact</div> */}
        </div>
    )
}
export default Header;