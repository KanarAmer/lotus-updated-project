import { useState } from 'react';
import { Header__props } from '../Interfaces'
// Styles:
import Styles from '../styles/Components/Header.module.css'
import MenuIcon from "../styles/Assets/MenuIcon.svg"
// Components:
import Menu from './Menu';


// Header Component.
// Input: ...
// Output: The Top Fixed Header (JSX)
const Header: React.FC<Header__props> = ({user}) => {

  // State - opening/closing menu in sliding mode (@responsive):
  const [isMenuOpened, setIsMenuOpened] = useState(user.isLoggedIn?true:false);

  return (
      <header className={Styles["app-header"]}>
          <div className={Styles["navbar"]}>
            <a href="/" className={Styles["logo"]}>MyPragnency</a>

            <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened}
            userName={user.name} 
            isLoggedIn={user.isLoggedIn?true:false}/>
            
            <button className={Styles["btn-menu"]} onClick={()=>setIsMenuOpened(s=>!s)}>
                <img src={MenuIcon} alt="Menu" />
            </button>
          </div>
          {/* Hello Msg (Home) */}
          <div className={Styles["header-content-wrapper"]}>
            <h1 className={Styles["Slogen"]}>
              Simple. Interactive. Free.
            </h1>
            <h4 className={Styles["Sub-Slogen"]}>Getting helpful information about your pragnency, anytime, for free.</h4>
          </div>
      </header>
  );
}

export default Header;
