// Styles:
import Styles from "../styles/Components/SocialIcons.module.css"
// Assets:
import iconTwitter from "../styles/Assets/icon_twitter.svg"
import iconInstagram from "../styles/Assets/icon_instagram.svg"
import iconFacebook from "../styles/Assets/icon_facebook.svg"

// Social Icons Comopnent [Twitter, Instagram, etc.]
const SocialIcons:React.FC = () => {
    return (
        <div className={Styles["social-icons"]}>
            <img src={iconTwitter} alt="Twitter" />
            <img src={iconInstagram} alt="Instagram" />
            <img src={iconFacebook} alt="Facebook" />
        </div>
    )
}


export default SocialIcons