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

function App() {
    const [isShowMenu, setIsShowMenu] = useState(false);
    
    function handleNavClick (target) {
        if (target === "MENU") {
            console.log(target);
            setIsShowMenu(true);
        } else setIsShowMenu(false);
    }
    
    return (
        <div className='App'>
            <div className='Body'>
                <span className='HeaderBlock' />
                <Header 
                    navClick={(e)=>handleNavClick(e)}
                />
                {isShowMenu ? <Menu /> : <About />}
                <p className='Footer' >Web Design/Development by  
                    <a href='https://www.github.com/zckramer' 
                        style={{
                            textDecoration:'none', 
                            color:'inherit', 
                            backgroundColor:'#282c34DD', 
                            padding:'4px!important',
                            margin: '4px', 
                            borderRadius:'6px', 
                            fontWeight:'bold',
                        }}
                            target='_blank'
                        > Zack Kramer 
                    </a>
                </p>
            </div>
        </div>
  );
}

export default App;