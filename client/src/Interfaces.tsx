/* Global Interfaces Module */

// Menu.tsx => Menu
export interface Menu__props {
    isMenuOpened: Boolean,
    setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>,
    userName: String,
    isLoggedIn: Boolean
}

// Menu.tsx => UserStatusOpts
export interface UserOptions__props {
    isLoggedIn: Boolean
}

// Home.tsx => Home
export interface Header__props {
    user: {
        isLoggedIn: Boolean,
        password: String,
        email: String,
        name: String
    }
}