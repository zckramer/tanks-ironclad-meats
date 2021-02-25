// credits: Gonzalo Moldonado, article @ https://medium.com/@mustwin/responsive-react-9b56d63c4edc

import './App.css';
import { useState } from 'react';

// Do NOT use 'Mobile' named components. Media queries are done in CSS now.
import Header from './components/Header';
import About from './components/About';
import Menu from './components/MenuSections';

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
                <div className='HeaderBlock' />
                <Header 
                    navClick={(e)=>handleNavClick(e)}
                />
                {isShowMenu ? <Menu /> : <About />}
                <p className='Footer' >Web Design/Development by  
                    <a href='https://www.github.com/zckramer' 
                        rel='noreferrer'
                        target='_blank'
                        style={{
                            textDecoration:'none', 
                            color:'inherit', 
                            backgroundColor:'#282c34DD', 
                            padding:'4px!important',
                            margin: '4px', 
                            borderRadius:'6px', 
                            fontWeight:'bold',
                        }}
                        > Zack Kramer 
                    </a>
                </p>
            </div>
            <div className='FooterBlock' />
        </div>
  );
}

export default App;