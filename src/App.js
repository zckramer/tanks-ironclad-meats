import './App.css';
import { useState, useEffect } from 'react';
import {
    Switch,
    Route,
    useLocation
} from 'react-router-dom';

// Do NOT use 'Mobile' named components. Media queries are done in CSS now.
import Header from './components/Header';
import About from './components/About';
import Menu from './components/MenuSections';
import Modal from './components/Modal/Modal';

function App() {
    // const [isShowMenu, setIsShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentURL, setCurrentURL] = useState(useLocation())
    
    let location = useLocation();

    function handleNavClick (e) {
        console.log(e);
        console.log(currentURL);
        setCurrentURL(location);
    }

    function handleToggleModal () {
        setShowModal(!showModal);
    }

    function useURLChange() {
        let location = useLocation();
        useEffect(() => {
          setCurrentURL(location);
        }, [location]);
    }
    useURLChange();

    return (
        <div className='App'>
            <div className='Body'>
                <div className='HeaderBlock' />
                <Header 
                    navClick={(e)=>handleNavClick(e)}
                    onClick={(e)=>handleToggleModal(e)}
                    showModal={showModal}
                />
                {showModal ? 
                    <Modal 
                        navClick={(e)=>handleNavClick(e)}
                        about={<About />}
                        menu={<Menu />}
                        merch={<About />}
                        contact={<About />}
                    /> : null
                }
                    <Switch>
                        <Route path='/'><About /></Route>
                        <Route path='/about'><About /></Route>
                        <Route path='/menu'><Menu /></Route>
                        <Route path='/merch'><About /></Route>
                        <Route path='/contact'><About /></Route>
                    </Switch>
                <p className='Footer' >Web Design/Development by  
                    <a href='https://www.github.com/zckramer' 
                        rel='noreferrer'
                        target='_blank'
                        style={{
                            textDecoration:'none', 
                            color:'inherit', 
                            backgroundColor:'#282c34DD', 
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