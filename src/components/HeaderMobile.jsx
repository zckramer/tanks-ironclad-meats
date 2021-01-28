import { createUseStyles } from 'react-jss';
import TankLogo from '../images/Logo_Tank.png';

const styles = createUseStyles({
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
        height: 80,
        fontSize: 'calc(10px + 2vmin)',
    },
    headerItem: {
        userSelect: 'none',
        cursor: 'pointer',
        height: 70,
        maxWidth: '60%',
        transition: '.5s',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    }
})

const HeaderMobile = (props) => {
    return (
        <div className={styles.header} >
            <img className={styles.headerItem} src={TankLogo} alt="Tank Logo" id="Tank-Logo" onClick={()=>props.navClick("PIG")}/>
            <div className={styles.headerItem} onClick={()=>props.navClick("MENU")} >Menu</div>
        
        </div>
    )
}
export default HeaderMobile;