import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import MediaQuery from 'react-responsive';

// import comingSoon from '../images/comingSoon.png'
import menu1 from '../images/TP_1.jpg';
import menu2 from '../images/TP_2.jpg';
import menu3 from '../images/TP_3.jpg';

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
        height: '75vh',
        width: '75vw'
    }
})
const useStylesPortrait = createUseStyles({
    menu: {
        display: 'flex',
        flexDirection: 'column',
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
        '&:hover': {
            transform: ' scale(1.2)',
        },
    },
    theMenu: {
        margin: '1rem',
        height: '80vh',
        width: '80vw'
    }
})

const MenuSections = () => {
    const stylesLandscape = useStylesLandscape();
    const stylesPortrait = useStylesPortrait();

    const [sections, setSections] = useState([
        menu1,
        menu2,
        menu3
    ])

    const [sectionToShow, setSectionToShow] = useState(sections[0]);

    function handleChangePage (section) {
        setSectionToShow(sections[section])
    }

    return (
        <div>
            <MediaQuery query='(orientation: portrait)'>
            <div className={stylesPortrait.menu}>
                    <img className={stylesPortrait.theMenu} src={sectionToShow} />
                    <div className={stylesPortrait.menuButtonContainer}>
                        <div className={stylesPortrait.menuButton} onClick={()=>handleChangePage(0)} >1</div>
                        <div className={stylesPortrait.menuButton} onClick={()=>handleChangePage(1)} >2</div>
                        <div className={stylesPortrait.menuButton} onClick={()=>handleChangePage(2)} >3</div>
                    </div>
                </div>
            </MediaQuery>

            <MediaQuery query='(orientation: landscape)'>
                <div className={stylesLandscape.menu}>
                    <img className={stylesLandscape.theMenu} src={sectionToShow} />
                    <div className={stylesLandscape.menuButtonContainer}>
                        <div className={stylesLandscape.menuButton} onClick={()=>handleChangePage(0)} >1</div>
                        <div className={stylesLandscape.menuButton} onClick={()=>handleChangePage(1)} >2</div>
                        <div className={stylesLandscape.menuButton} onClick={()=>handleChangePage(2)} >3</div>
                    </div>
                </div>
                </MediaQuery>
        </div>
    )
}
export default MenuSections;