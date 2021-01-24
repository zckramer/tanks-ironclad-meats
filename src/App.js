import './App.css';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';

import Header from './components/Header';
import About from './components/About';

import MeatImg1 from './images/meat01.jpg';
import MenuSections from './components/MenuSections';

const useDesktopStyles = createUseStyles({
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
    header: {
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
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
    },
    about: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
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
    

const useMobileStyles = createUseStyles({
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
        paddingTop: 20,
        margin: 0,
    },
    header: {
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
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
        width: '100%',
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
        flexDirection: window.innerHeight > window.innerWidth ? "column" : "row-reverse" ,
        height: '90%',
        
    },
    menuButtonContainer: {
        display: 'flex',
        flexDirection: window.innerHeight > window.innerWidth ? "row" : "column",
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
        height: window.innerHeight > window.innerWidth ? '30px' : '20%',

    }
});

function App() {
  const isMobileView = useMediaQuery({ query: `(max-width: 760px)` });
  const [isShowMenu, setIsShowMenu] = useState(false);
  const mobileClasses = useMobileStyles();
  const desktopClasses = useDesktopStyles();

  function handleNavClick (target) {
    if (target === "MENU") {
      console.log(target);
      setIsShowMenu(true);
    } else setIsShowMenu(false);
  }

  return (
    <div className={isMobileView ? mobileClasses.app : desktopClasses.app} >
        <div className={isMobileView ? mobileClasses.body : desktopClasses.body}>
            <Header 
                className={isMobileView ? mobileClasses.header : desktopClasses.header} 
                headerItemClass={isMobileView ? mobileClasses.headerItem : desktopClasses.headerItem}
                navClick={(e)=>handleNavClick(e)}

            />
            {isShowMenu ? 
                <MenuSections 
                    className={isMobileView ? mobileClasses.menu : desktopClasses.menu}
                    buttonContainerClass={isMobileView ? mobileClasses.menuButtonContainer : desktopClasses.menuButtonContainer}
                    buttonClass={isMobileView ? mobileClasses.menuButton : desktopClasses.menuButton}
                /> : 
                <About 
                    className={isMobileView ? mobileClasses.about : desktopClasses.about}
                    panelClass={isMobileView ? mobileClasses.aboutPanel : desktopClasses.aboutPanel}
                />
            }
        </div>
    </div>
  );
}

export default App;