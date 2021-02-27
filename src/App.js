import './App.css';
import { 
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
import Menu from './components/MenuSections';
import ComingSoon from './components/ComingSoon';
import Modal from './components/Modal/Modal';

function App() {
    const [showModal, setShowModal] = useState(false);

    function handleNavClick (e) {
        console.log(e);
    }

    function handleToggleModal () {
        setShowModal(!showModal);
    }

    return (
        <Router>
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
                            <Route path='/about'><About /></Route>
                            <Route path='/menu'><Menu /></Route>
                            <Route path='/merch'><ComingSoon /></Route>
                            <Route path='/contact'><ComingSoon /></Route>
                            <Redirect to='/about' />
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