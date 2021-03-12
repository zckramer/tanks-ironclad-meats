import './App.css';
import React, { 
    useState, 
} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

// Do NOT use 'Mobile' named components. Media queries are done in CSS now.
import Header from './components/Header';
import About from './components/About';
// import Menu from './components/MenuSections'; // PDF menu
import Menu from './components/MenuTyped'; // Typed Menu
import Contact from './components/Contact';
import ComingSoon from './components/ComingSoon';
import Modal from './components/Modal/Modal';

function App() {
    const [showModal, setShowModal] = useState(false);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })


    React.useEffect(()=> {
        function handleResize() {
            // variable for CSS viewport height
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);

            // update the state for react re-render
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    function handleNavClick (e) {
        handleToggleModal();
        if (e === "MENU") {
            window.open('/TanksMenu.pdf');
        }
    }

    function handleToggleModal () {
        setShowModal(!showModal);
    }
    
    return (
        <Router>
            <div className='App'>
                <div className='Background' />
                <div className='Body'>
                    <div className='HeaderBlock' />
                    <Header 
                        navClick={(e)=>handleNavClick(e)}
                        closeModal={(e)=>handleToggleModal(e)}
                        showModal={showModal}
                    />
                    {showModal ? 
                        <Modal 
                        navClick={(e)=>handleNavClick(e)}
                        /> : null
                    }  
                        <Switch> 
                            {/* <div style={{zIndex: 4}}>Rendered at {dimensions.width} x {dimensions.height}</div> */}
                            <Route path='/about'><About /></Route>
                            <Route path='/menu'><About /></Route>
                            <Route path='/merch'><ComingSoon /></Route>
                            <Route path='/contact'><Contact /></Route>
                            <Route path='/'><About /></Route>
                            <Redirect to='/About' /> 
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
        </Router>
    );
}

export default App;