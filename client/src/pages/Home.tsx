// import { Home__props } from '../Interfaces'
// Styls:
import Styles from '../styles/Pages/Home.module.css'
// Components:
import SocialIcons from '../components/SocialIcons'
// Assets:
import signInSecionDraw from '../styles/Assets/sign-in-section-draw.svg'
import card2 from '../styles/Assets/tests-reminder-card2.svg'
import card3 from '../styles/Assets/frequantly-updated-articles-card3.svg'
import card1 from '../styles/Assets/pragnency-tracker-card1.svg'
import card4 from '../styles/Assets/community-icon.svg'
import { Link } from 'react-router-dom'


// Home Page - default page
const Home = () => {
  return (        
      <main className={Styles["Home-Main-Section"]}>
        <section className={Styles["why_use_mypragnency-wrapper"]}>
          <h2>Why Use MyPragnency?</h2>
        </section>

        <section className={Styles["cards"]}>
          <div className={Styles["card"]}>
            <h3>Pregnancy tracker</h3>
            <img src={card1} alt="Pragnency tracker" />
          </div>
          <div className={Styles["card"]}>
            <h3>Tests reminder</h3>
            <img src={card2} alt="Tests reminder" />
          </div>
          <div className={Styles["card"]}>
            <h3>Frequantly updated articles</h3>
            <img src={card3} alt="Frequantly updated articles" />
          </div>
          <div className={Styles["card"]}>
            <h3>MyPregnancy Community</h3>
            <img src={card4} alt="Community" />
            </div>
        </section>

        <section className={Styles["sign-up-section"]}>
          <div className={Styles["sign-up-box"]}>
            <div className={Styles["text-wrapper"]}>
              <h2 className={Styles["color1"]}>Ready?&nbsp;</h2>
              <h2 className={Styles["color2"]}>Sign up today for Free.</h2>
            </div>
            <button className={Styles["btn-create-account"]}><Link to="signup" style={{all: "unset"}}>Create an account</Link></button>
            <SocialIcons />
          </div>
          <div className={Styles["svg-container"]}>
            <img src={signInSecionDraw} alt="Sign in img" />
          </div>
        </section>
      </main>
  );
}

export default Home;
