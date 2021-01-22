import TankLogo from '../images/Logo_Tank.png';

const HeaderMobile = (props) => {
    return (
        <div className="Header-Mobile" >
            <img className="Header-Mobile__Item" src={TankLogo} alt="Tank Logo" id="Tank-Logo" onClick={()=>props.navClick("PIG")}/>
            <div className="Header-Mobile__Item" onClick={()=>props.navClick("MENU")} >Menu</div>
        
        </div>
    )
}
export default HeaderMobile;