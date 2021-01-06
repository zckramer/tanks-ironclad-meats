import './App.css';
import { useState } from 'react';
// import { ReactComponent as TankLogo } from './images/Logo_Tank.svg';
import TankLogo from './images/Logo_Tank.svg';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';

import MeatImg1 from './images/meat01.jpg';

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
    <div className="App"  style={{ backgroundImage: `url(${MeatImg1})`, backgroundRepeat: 'no-repeat'} }>
      <Header navClick={(e)=>handleNavClick(e)} />
      <div className="Body">
        {/* <img src={MeatImg1} alt="Zoom in on meat background one" id="Background-Image-01"/> */}
        {isShowMenu ? <Menu menuImage='' /> : <About logo={<TankLogo id="Tank-Logo" />}/>}
      </div>
    </div>
  );
}

export default App;
