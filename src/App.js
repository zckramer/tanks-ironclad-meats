import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import About from './components/About';
import Menu from './components/MenuSections';

import MeatImg1 from './images/meat01.jpg';

function App() {
  const [isShowMenu, setIsShowMenu] = useState(false);

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
    <div className="App"  style={{ backgroundImage: `url(${MeatImg1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
      <Header navClick={(e)=>handleNavClick(e)} />
      <div className="Body">
        {isShowMenu ? <Menu /> : <About  />}
      </div>
    </div>
  );
}

export default App;