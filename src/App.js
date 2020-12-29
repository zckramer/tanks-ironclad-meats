import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
// import MenuImage from '';


function App() {
  const [isShowMenu, setIsShowMenu] = useState(false)
  
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
    <div className="App">
      <Header navClick={(e)=>handleNavClick(e)} />
      <div className="Body" >
        <h3>Tank's Ironclad Meats</h3>
        {isShowMenu ? <Menu menuImage='' /> : <About />}
      </div>
    </div>
  );
}
 
export default App;
