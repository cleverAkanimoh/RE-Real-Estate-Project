// import { VscHome } from "react-icons/vsc";
import swimmingImage from "../assets/swimmingpool.png";
import "../Stylesheets/mainContent.css";

export default function () {
   return (
      <section id="main__content">
         <article id="minimum__article">
            <h2>minimum living cost takes care of everything</h2>
            <div id="underline"></div>
            <div>
               <img src={swimmingImage} alt="swimming pool" />
               <aside></aside>
            </div>
         </article>
      </section>
   )
}