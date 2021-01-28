// credits: Gonzalo Moldonado, article @ https://medium.com/@mustwin/responsive-react-9b56d63c4edc

import './App.css';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import MediaQuery, { useMediaQuery } from 'react-responsive';

import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import About from './components/About';
import AboutMobile from './components/AboutMobile';
import Menu from './components/MenuSections';
import MenuMobile from './components/MenuSectionsMobile';

import MeatImg1 from './images/meat01.jpg';

const useStyles = createUseStyles({
    app: {
        color: '#FFFFF7',
        width: '100vw',
        height: '100vh',      
        backgroundImage: `url(${MeatImg1})`, 
        backgroundSize: 'fill', 
        backgroundRepeat: 'no-repeat',
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '95%',
        margin: 0,
    },
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
});

const useMobileStylesPortrait = createUseStyles({
    app: {
        color: '#FFFFF7',
        width: '100vw',
        height: '100vh',      
        backgroundImage: `url(${MeatImg1})`, 
        backgroundSize: 'fill', 
        backgroundRepeat: 'no-repeat'
    },
    header: {
        color: 'black',
        display: 'flex',
        flexDirection: 'row-reverse',
        position: 'fixed',
        top: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#D7DEE6',
        height: 40,
        fontSize: 'calc(10px + 2vmin)',
    },
    headerItem: {
        userSelect: 'none',
        height: 38,
        maxWidth: '60%',
        transition: '.5s',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    },
    about: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    aboutPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c348a',
        border: '2px solid darkslategray',
        borderRadius: '8px',
        margin: 8,
        padding: 4,
        width: '70%',
        overflow: 'scrollY'
    },
    menu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '90%'
    },
    menuButtonContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%'
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
        height: '30px'
    }
});

const useMobileStylesLandscape = createUseStyles({
    app: {
        color: '#FFFFF7',
        width: '100vw',
        height: '100vh',      
        backgroundImage: `url(${MeatImg1})`, 
        backgroundSize: 'fill', 
        backgroundRepeat: 'no-repeat'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '95%',
        paddingTop: 20,
        margin: 0
    },
    header: {
        color: 'black',
        display: 'flex',
        flexDirection: 'row-reverse',
        position: 'fixed',
        top: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#D7DEE6',
        height: 40,
        fontSize: 'calc(10px + 2vmin)',
    },
    headerItem: {
        userSelect: 'none',
        height: 38,
        maxWidth: '60%',
        transition: '.5s',
        '&:hover': {
            transform: 'scale(1.05)'
        }
    },
    about: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    aboutPanel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c348a',
        border: '2px solid darkslategray',
        borderRadius: '8px',
        margin: 8,
        padding: 4,
        width: '70%',
        overflow: 'scrollY'
    },
    menu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '90%'
    },
    menuButtonContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%'
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
        height: '30px'
    }
});

function App() {
    const isMobileView = useMediaQuery({ query: `(min-device-width: 1224px)` });
    const [isShowMenu, setIsShowMenu] = useState(false);
    const styles = useStyles();
    // let mobileClasses = useMobileStylesPortrait();
    
    function handleNavClick (target) {
        if (target === "MENU") {
            console.log(target);
            setIsShowMenu(true);
        } else setIsShowMenu(false);
    }
    
    return (
        <div className={styles.app}>
            <div className={styles.body}>
            <MediaQuery query='(min-device-width: 1224px)'>
                <Header 
                    navClick={(e)=>handleNavClick(e)}
                />
                {!isShowMenu ? 
                    <About /> : <Menu />
                }
                <div>You are a desktop or laptop</div>
            </MediaQuery>
            <MediaQuery query='(max-device-width: 1224px)'>
                <div>You are a tablet or mobile phone</div>
            </MediaQuery>
            <MediaQuery query='(orientation: portrait)'>
                <div>You are portrait</div>
            </MediaQuery>
            <MediaQuery query='(orientation: landscape)'>
                <div>You are landscape</div>
            </MediaQuery>
        </div>

            {/* {!isMobileView ? ( */}
                {/* <MediaQuery query='(min-device-width: 1224px)'> */}
                    {/* <div className={styles.body}> */}
                        {/* Desktop styled component goes here */}
                        {/* <Header  */}
                            {/* navClick={(e)=>handleNavClick(e)} */}
                        {/* /> */}
                    {/* </div> */}
                {/* </MediaQuery>) */}
            {/* : */}
                {/* <MediaQuery query='(max-device-width: 1224px)'> */}
                    {/* Mobile styled component goes here */}
                    {/* <HeaderMobile */}
                        {/* navClick={(e)=>handleNavClick(e)} */}
                    {/* /> */}
                {/* </MediaQuery> */}
            {/* } */}
        </div>
            
  );
}

export default App;