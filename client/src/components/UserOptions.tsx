import { NavLink } from 'react-router-dom'
// Interfaces:
import { UserOptions__props } from "../Interfaces"
// Styles:
import Styles from '../styles/Components/UserOptions.module.css'


// A component, rendering the profile/signup btn according to the user's state.
// Input: isLoggedIn:boolean, profileOpened:boolean, setProfileOpened:setter
// Output: SignUpOption:tsx | ProfileComponent:tsx
const UserOptions: React.FC<UserOptions__props> = (
    {isLoggedIn}) => {

    //logout method
    const logout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }
    // User is not logged in - render sign-up option
    if (!isLoggedIn) return (
        <NavLink to="/signin" className={Styles["btn-user-unsigned"]}>Sign in</NavLink>
    )
    // user is logged-in - render profile options
    else return (  
        <> 
        <button className={Styles["btn-user-unsigned"]}
        onClick={logout} title="Log Out">
            Log out
        </button>

          <NavLink to="/update" className={Styles["btn-user"]}
          title="Update Details">
             Update Details
         </NavLink>
         </>
    )
}


export default UserOptions