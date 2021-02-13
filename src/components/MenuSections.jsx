import { useState } from 'react';
import { createUseStyles } from 'react-jss';

import comingSoon from '../images/comingSoon.png'

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
    // const [sections, setSections] = useState([
    //     'http://placekitten.com/800/800',
    //     'http://placekitten.com/800/800',
    //     'http://placekitten.com/800/800'
    // ])

    // const [sectionToShow, setSectionToShow] = useState(sections[0]);

    // function handleChangePage (section) {
    //     setSectionToShow(sections[section])
    // }

    return (
        <div className={styles.menu}>
            <img className={styles.theMenu} src={comingSoon} style={{height: "80%", width: "80%", borderRadius:"16px"}}/>
            <div className={styles.menuButtonContainer}>
                {/* <div className={styles.menuButton} onClick={()=>handleChangePage(0)} >Platters</div> */}
                {/* <div className={styles.menuButton} onClick={()=>handleChangePage(1)} >A La Carte</div> */}
                {/* <div className={styles.menuButton} onClick={()=>handleChangePage(2)} >Sides and Sauces</div> */}
            </div>
        </div>
    )
}
export default MenuSections;