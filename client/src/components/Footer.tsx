
// Components:
import SocialIcons from "./SocialIcons"
//Styles:
import Styles from "../styles/Components/Footer.module.css"
import { FooterDescription } from "../utils/data"

// Footer (Static) Comopnent
const Footer: React.FC = () => {
    return (
        <footer>
            <section className={Styles["info"]}>
                <div className={Styles["MyPragnency"]}>
                    <h4 className={Styles["info-title"]}>MyPragnency</h4>
                    <span className={Styles["info-content"]}>
                        {FooterDescription.map(par => (<p>{par}</p>))}
                    </span>
                </div>
                <div className={Styles["ContactUs"]}>
                    <h4 className={Styles["info-title"]}>Contact Us</h4>
                    <span className={Styles["info-content"]}>
                        mail@gmail.com<br/>
                        +972-8-338-9201<br/>
                        6036 shlomo street, shlomo
                    </span>
                </div>
            </section>
            <section className={Styles["meta-info"]}>
                <SocialIcons />
                <h5 className={Styles["m_copyrights"]}>Copyright 2022 MyPregnancy Software, Inc. All rights reserved.</h5>
            </section>
        </footer>
    )
}


export default Footer