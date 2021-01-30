import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import MediaQuery from 'react-responsive';

const useStylesLandscape = createUseStyles({
    menu: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: 30
    },
    menuButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '100%'
    },
    menuButton: {
        color: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        border: '1px solid black',
        borderRadius: '8px',
        userSelect: 'none',
        padding: 4,
        width: '90%',
        height: '1rem',
        whiteSpace: 'normal',
        textOverflow: '',
        transform: 'rotate(-90deg)',
        '&:hover': {
            transform: 'rotate(-90deg) scale(1.2)',
        },
    },
    theMenu: {
        margin: '1rem',
        height: 300,
        width: 300
    }
})

const MenuSections = () => {
    const styles = useStylesLandscape();
    const [sections, setSections] = useState([
        'http://placekitten.com/800/800',
        'http://placekitten.com/800/800',
        'http://placekitten.com/800/800'
    ])

    const [sectionToShow, setSectionToShow] = useState(sections[0]);

    function handleChangePage (section) {
        setSectionToShow(sections[section])
    }

    return (
        <div>
            <MediaQuery query='(orientation: portrait)'>
            <div className={styles.menu}>
                    <img className={styles.theMenu} src={sectionToShow} style={{height: "80%", width: "80%", borderRadius:"16px"}}/>
                    <div className={styles.menuButtonContainer}>
                        <div className={styles.menuButton} onClick={()=>handleChangePage(0)} >Platters</div>
                        <div className={styles.menuButton} onClick={()=>handleChangePage(1)} >A La Carte</div>
                        <div className={styles.menuButton} onClick={()=>handleChangePage(2)} >Sides</div>
                    </div>
                </div>
                <div>You are portrait</div>
            </MediaQuery>

            <MediaQuery query='(orientation: landscape)'>
                <div className={styles.menu}>
                    <img className={styles.theMenu} src={sectionToShow} style={{height: "80%", width: "80%", borderRadius:"16px"}}/>
                    <div className={styles.menuButtonContainer}>
                        <div className={styles.menuButton} onClick={()=>handleChangePage(0)} >Platters</div>
                        <div className={styles.menuButton} onClick={()=>handleChangePage(1)} >A La Carte</div>
                        <div className={styles.menuButton} onClick={()=>handleChangePage(2)} >Sides</div>
                    </div>
                </div>
                <div>You are landscape</div>
                </MediaQuery>
        </div>
    )
}
export default MenuSections;