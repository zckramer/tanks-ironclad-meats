import { useState } from 'react';
import { createUseStyles } from 'react-jss';

// import comingSoon from '../images/comingSoon.png'
import menu1 from '../images/TP_1.jpg';
import menu2 from '../images/TP_2.jpg';
import menu3 from '../images/TP_3.jpg';


const useStyles = createUseStyles({
    menu: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    menuButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    menuButton: {
        display: 'flex',
        color: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        border: '1px solid black',
        borderRadius: '8px',
        userSelect: 'none',
        cursor: 'pointer',
        margin: 2,
        padding: 4,
        width: '30%',
        height: '10%',
        transform: 'rotate(-90deg)',
        '&:hover': {
            transform: 'rotate(-90deg) scale(1.2)',
        },
    },
    theMenu: {
        margin: '1rem',
        height: 800,
        width: 800
    }
})

const MenuSections = () => {
    const styles = useStyles();
    const [sections] = useState([
        menu1,
        menu2,
        menu3
    ])

    const [sectionToShow, setSectionToShow] = useState(sections[0]);

    function handleChangePage (section) {
        setSectionToShow(sections[section])
    }

    return (
        <div className={styles.menu}>
            <img className={styles.theMenu} src={sectionToShow} style={{height: "80%", width: "80%", borderRadius:"16px"}}/>
            <div className={styles.menuButtonContainer}>
                <div className={styles.menuButton} onClick={()=>handleChangePage(0)} >1</div>
                <div className={styles.menuButton} onClick={()=>handleChangePage(1)} >2</div>
                <div className={styles.menuButton} onClick={()=>handleChangePage(2)} >3</div>
            </div>
        </div>
    )
}
export default MenuSections;