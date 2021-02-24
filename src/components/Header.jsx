// import { createUseStyles } from 'react-jss';
import TankLogo from '../images/Logo_Tank.png';

// const useStyles = createUseStyles({
    // header: {
    //     color: 'black',
    //     display: 'flex',
    //     flexDirection: 'row-reverse',
    //     position: 'fixed',
    //     top: 0,
    //     alignItems: 'center',
    //     justifyContent: 'space-evenly',
    //     width: '100%',
    //     backgroundColor: '#D7DEE6',
    //     height: 80,
    //     fontSize: 'calc(10px + 2vmin)',
    // },
    // headerItem: {
    //     userSelect: 'none',
    //     cursor: 'pointer',
    //     height: 70,
    //     maxWidth: '60%',
    //     transition: '.5s',
    //     '&:hover': {
    //         transform: 'scale(1.05)'
    //     }
    // }
// })

const Header = (props) => {
    // const styles = useStyles();
    return (
        <div className='Header'>
            <img className='Header__Item' src={TankLogo} alt="Tank Logo" onClick={()=>props.navClick("ABOUT")}/>
            <div className='Header__Item' onClick={()=>props.navClick("MENU")} >MENU</div>
        </div>
    )
}
export default Header;