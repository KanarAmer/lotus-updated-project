// About data fetching:
import { aboutParagraphs } from "../utils/data"
// Styles:
import Styles from "../styles/Pages/About.module.css"


// About Page - shows information about the Site
function About() {
  return (        
      <main className={Styles["About"]}>
        <h1 className={Styles["title"]}>About Us</h1>
        <span className={Styles["About-content"]}>
          {aboutParagraphs.map(par => (<><p>{par}</p><br/></>))}
        </span>
      </main>
  );
}


export default About;