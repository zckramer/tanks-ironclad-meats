import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';


import MenuFile from './Tanks_Menu_5.pdf';
import MeatImg1 from './images/meat01.jpg';

function App() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleNavClick (target) {
    if (target === "MENU") {
      console.log(target);
      setIsShowMenu(true)
    } else setIsShowMenu(false);

    if (target === "PIG") {
      console.log(target);
      setIsShowMenu(false);
    }
  }

  return (
    <div className="App"  style={{ backgroundImage: `url(${MeatImg1})`, backgroundRepeat: 'no-repeat'} }>
      <Header navClick={(e)=>handleNavClick(e)} />
      <div className="Body">
        {isShowMenu ? <Menu menu={MenuFile} /> : <About  />}
      </div>
    </div>
  );
}

export default App;