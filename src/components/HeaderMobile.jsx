import { createUseStyles } from 'react-jss';
import TankLogo from '../images/Logo_Tank.png';

const useStyles = createUseStyles({
    header: {
        color: 'black',
        display: 'flex',
        flexDirection: 'row-reverse',
        position: 'fixed',
        top: 0,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        backgroundColor: '#D7DEE6',
        height: 46,
        fontSize: 'calc(10px + 2vmin)',
    },
    headerItem: {
        userSelect: 'none',
        height: 46,
        maxWidth: '60%',
        transition: '.1s',
        '&:active': {
            transform: 'scale(1.1)'
        }
    }
})

const Header = (props) => {
    const styles = useStyles();
    return (
        <div className={styles.header}>
            <img className={styles.headerItem} src={TankLogo} alt="Tank Logo" onClick={()=>props.navClick("ABOUT")}/>
            <div className={styles.headerItem} onClick={()=>props.navClick("MENU")} >MENU</div>
        </div>
    )
}
export default Header;