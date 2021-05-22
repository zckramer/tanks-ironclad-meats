import './App.css';
import React, { 
    useState, 
} from 'react';

// Do NOT use 'Mobile' named components. Media queries are done in CSS now.
import Header from './components/Header';
import IntroBlock from './components/IntroBlock';
import About from './components/About';
import MenuBlock from './components/MenuBlock';
// import Menu from './components/MenuSections'; // PDF menu
// import Menu from './components/MenuTyped'; // Typed Menu
import Contact from './components/Contact';
import ComingSoon from './components/ComingSoon';
import Modal from './components/Modal/Modal';
import Footer from './components/KramerFooter';

function App() {
    // const [activePage, setActivePage] = useState(<About/>);
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
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    function handleNavClick (e) {
        toggleModal();
        if (e === "MENU") {
            if (dimensions.width > 1224) {
                window.open('/TanksMenu.pdf');
            } else {
                window.open('/TanksMenu.pdf', '_self');
            }
            return ;
        }
        
        const scrollToElement = document.querySelector(e.target.dataset.scroll);
        scrollToElement.scrollIntoView();
    }

    function toggleModal () {
        setShowModal(!showModal);
    }

    return (
        <div className='App'>
            <div className='Background' />
            <div className='Body'>
                <Header 
                    navClick={(e)=>handleNavClick(e)}
                    closeModal={(e)=>toggleModal(e)}
                    showModal={showModal}
                />
                {showModal ? 
                    <Modal 
                    navClick={(e)=>handleNavClick(e)}
                    /> : null
                }
                <IntroBlock dimensions={dimensions}/>
                <About />
                <MenuBlock />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;