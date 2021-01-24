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
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        color: 'black',
        position: 'absolute',
        top: '0',
        width: '100%',
        backgroundColor: '#D7DEE6',
        maxHeight: '80px',
        minHeight: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontSize: 'calc(10px + 2vmin)',
        marginBottom: '5rem'
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        color: 'black',
        position: 'absolute',
        top: '0',
        width: '100%',
        backgroundColor: '#D7DEE6',
        maxHeight: '80px',
        minHeight: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontSize: 'calc(10px + 2vmin)',
        marginBottom: '5rem'
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
            <Header className={isMobileView ? mobileClasses.header : desktopClasses.header} navClick={(e)=>handleNavClick(e)}/>
            {isShowMenu ? <MenuSections /> : <About />}
        </div>
    </div>
  );
}

export default App;