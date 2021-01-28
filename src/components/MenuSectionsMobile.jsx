import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const stylesDesktop = createUseStyles({
    menu: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        height: '100vh',
        marginTop: 100,
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
        border: '3px solid whitesmoke',
        borderRadius: '8px',
        userSelect: 'none',
        cursor: 'pointer',
        margin: '2px',
        width: '3rem',
        height: '20%'
    }

})

const MenuSections = (props) => {
    const [sections, setSections] = useState([
        'http://placekitten.com/1200/1200',
        'http://placekitten.com/1000/1000',
        'http://placekitten.com/600/600'
    ])

    const [sectionToShow, setSectionToShow] = useState(sections[0]);

    function handleChangePage (section) {
        setSectionToShow(sections[section])
    }

    return (
        <div className={stylesDesktop.menu}>
            <img src={sectionToShow} style={{height: "80%", width: "80%", borderRadius:"16px"}}/>
            <div className={stylesDesktop.menuButtonContainer}>
                <div className={stylesDesktop.menuButton} onClick={()=>handleChangePage(0)} style={{width: '20%'}}>A</div>
                <div className={stylesDesktop.menuButton} onClick={()=>handleChangePage(1)} style={{width: '20%'}}>B</div>
                <div className={stylesDesktop.menuButton} onClick={()=>handleChangePage(2)} style={{width: '20%'}}>C</div>
            </div>
        </div>
    )
}
export default MenuSections;