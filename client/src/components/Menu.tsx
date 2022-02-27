import { NavLink } from 'react-router-dom'
// Interfaces:
import { Menu__props } from "../Interfaces"
// Components:
import UserOptions from "./UserOptions"
// Styles:
import Styles from '../styles/Components/Menu.module.css'


// Menu component - the top Menu navigetor
// Input: isMenuOpened:boolean, setIsMenuOpened:setter
const Menu: React.FC<Menu__props> = ({isMenuOpened, setIsMenuOpened, userName, isLoggedIn}) => {
    return (
        <div className={`${Styles["menu-nav"]} ${isMenuOpened?Styles["menu-nav-show"]:""}`}>
            <NavLink className={Styles["HeaderNavLink"]} to="/about">About</NavLink>
            <NavLink className={Styles["HeaderNavLink"]} to="/">Tracker</NavLink>
            <NavLink className={Styles["HeaderNavLink"]} to="/">Reminder</NavLink>
            <NavLink className={Styles["HeaderNavLink"]} to="/">Articles</NavLink>
            <NavLink className={Styles["HeaderNavLink"]} to="/">Community</NavLink>
            <UserOptions isLoggedIn={isLoggedIn} />
        </div>
    )
}


export default Menu