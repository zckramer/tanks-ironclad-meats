import TankLogo from '../images/Logo_Tank.png';

const Header = (props) => {
    return (
        <div className={props.className}>
            <img className={props.headerItemClass} src={TankLogo} alt="Tank Logo" onClick={()=>props.navClick("ABOUT")}/>
            <div className={props.headerItemClass} onClick={()=>props.navClick("MENU")} >MENU</div>
        </div>
    )
}
export default Header;