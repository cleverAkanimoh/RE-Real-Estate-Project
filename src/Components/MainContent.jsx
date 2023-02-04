import { FaDollarSign, FaLayerGroup } from "react-icons/fa";
import swimmingImage from "../assets/swimmingpool.png";
import "../Stylesheets/mainContent.css";

export default function () {
   return (
      <section id="main__content">
         <article id="minimum__article">
            <h2 id="minimum__text">minimum living cost takes care of everything</h2>
            <div id="underline"></div>
            <div id="image__aside">
               <img src={swimmingImage} alt="swimming pool" id="swimming__image" />
               <aside id="aside">
                  <div className="pay">
                     <FaDollarSign className="icons dollar" />
                     <p className="tag__line">pay as little as possible!</p>
                  </div>
                  <div className="pay">
                     <FaDollarSign className="icons house" />
                     <p className="tag__line">Enjoy wisdom of community!</p>
                  </div>
                  <div className="pay">
                     <FaLayerGroup className="icons layer" />
                     <p className="tag__line">Let's take care of Landlord!</p>
                  </div>
                  <div className="pay">
                     <FaDollarSign className="icons flower" />
                     <p className="tag__line">Enjoy peaceful Environment!</p>
                  </div>
                  <div className="pay">
                     <FaDollarSign className="icons shield" />
                     <p className="tag__line">Stay Safe!<br />Save Money!</p>
                  </div>
                  <div className="pay">
                     <FaDollarSign className="icons sun" />
                     <p className="tag__line">Pay for what you use!</p>
                  </div>
               </aside>
            </div>
         </article>
      </section>
   )
}