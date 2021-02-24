// credits: Gonzalo Moldonado, article @ https://medium.com/@mustwin/responsive-react-9b56d63c4edc

import './App.css';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import MediaQuery from 'react-responsive';

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
        backgroundAttachment: 'fixed', 
        backgroundPosition: '0 0',
        backgroundRepeat: 'repeat',
        backgroundSize: 'stretch',
        
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '95%',
        margin: 0,
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        textAlign: 'center'
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

// const useMobileStylesPortrait = createUseStyles({
//     app: {
//         color: '#FFFFF7',
//         width: '100vw',
//         height: '100vh',      
//         backgroundImage: `url(${MeatImg1})`, 
//         backgroundSize: 'fill', 
//         backgroundRepeat: 'no-repeat'
//     },
//     header: {
//         color: 'black',
//         display: 'flex',
//         flexDirection: 'row-reverse',
//         position: 'fixed',
//         top: 0,
//         alignItems: 'center',
//         justifyContent: 'space-around',
//         width: '100%',
//         backgroundColor: '#D7DEE6',
//         height: 40,
//         fontSize: 'calc(10px + 2vmin)',
//     },
//     headerItem: {
//         userSelect: 'none',
//         height: 38,
//         maxWidth: '60%',
//         transition: '.5s',
//         '&:hover': {
//             transform: 'scale(1.05)'
//         }
//     },
//     about: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%'
//     },
//     aboutPanel: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#282c348a',
//         border: '2px solid darkslategray',
//         borderRadius: '8px',
//         margin: 8,
//         padding: 4,
//         width: '70%',
//         overflow: 'scrollY'
//     },
//     menu: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column',
//         height: '90%'
//     },
//     menuButtonContainer: {
//         display: 'flex',
//         flexDirection: "row",
//         alignItems: 'center',
//         justifyContent: 'space-evenly',
//         width: '100%'
//     },
//     menuButton: {
//         display: 'flex',
//         color: '#000000',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'whitesmoke',
//         border: '3px solid whitesmoke',
//         borderRadius: '8px',
//         userSelect: 'none',
//         cursor: 'pointer',
//         margin: '2px',
//         width: '3rem',
//         height: '30px'
//     }
// });

// const useMobileStylesLandscape = createUseStyles({
//     app: {
//         color: '#FFFFF7',
//         width: '100vw',
//         height: '100vh',      
//         backgroundImage: `url(${MeatImg1})`, 
//         backgroundSize: 'fill', 
//         backgroundRepeat: 'no-repeat'
//     },
//     body: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '95%',
//         paddingTop: 20,
//         margin: 0
//     },
//     header: {
//         color: 'black',
//         display: 'flex',
//         flexDirection: 'row-reverse',
//         position: 'fixed',
//         top: 0,
//         alignItems: 'center',
//         justifyContent: 'space-around',
//         width: '100%',
//         backgroundColor: '#D7DEE6',
//         height: 40,
//         fontSize: 'calc(10px + 2vmin)',
//     },
//     headerItem: {
//         userSelect: 'none',
//         height: 38,
//         maxWidth: '60%',
//         transition: '.5s',
//         '&:hover': {
//             transform: 'scale(1.05)'
//         }
//     },
//     about: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%'
//     },
//     aboutPanel: {
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#282c348a',
//         border: '2px solid darkslategray',
//         borderRadius: '8px',
//         margin: 8,
//         padding: 4,
//         width: '70%',
//         overflow: 'scrollY'
//     },
//     menu: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column',
//         height: '90%'
//     },
//     menuButtonContainer: {
//         display: 'flex',
//         flexDirection: "row",
//         alignItems: 'center',
//         justifyContent: 'space-evenly',
//         width: '100%'
//     },
//     menuButton: {
//         display: 'flex',
//         color: '#000000',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'whitesmoke',
//         border: '3px solid whitesmoke',
//         borderRadius: '8px',
//         userSelect: 'none',
//         cursor: 'pointer',
//         margin: '2px',
//         width: '3rem',
//         height: '30px'
//     }
// });

function App() {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const styles = useStyles();
    
    function handleNavClick (target) {
        if (target === "MENU") {
            console.log(target);
            setIsShowMenu(true);
        } else setIsShowMenu(false);
    }
    
    return (
        <div className='App'>
            <div className='Body'>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Header 
                        navClick={(e)=>handleNavClick(e)}
                    />
                    {!isShowMenu ? 
                        <About /> : <Menu />
                    }
            <p className='footer' >Web Design/Development by <a href='https://www.github.com/zckramer' 
                style={{
                    textDecoration:'none', 
                    color:'inherit', 
                    backgroundColor:'#282c34DD', 
                    padding:'3px!important', 
                    borderRadius:'6px', 
                    fontWeight:'bold',
                }}
                target='_blank'
                >Zack Kramer</a>
            </p>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <HeaderMobile 
                        navClick={(e)=>handleNavClick(e)}
                    />
                    {!isShowMenu ? 
                        <AboutMobile /> : <MenuMobile />
                    }
                </MediaQuery>
            </div>
        </div>
            
  );
}

export default App;