import { FaDollarSign, FaWarehouse } from "react-icons/fa";
import { VscFile } from "react-icons/vsc";
import swimmingImage from "../assets/swimmingpool.png";
import "../Stylesheets/mainContent.css";

export default function () {
   return (
      <section id="main__content">
         <article id="minimum__article">
            <h2 id="minimum__text">minimum living cost takes care of everything</h2>
            <div id="underline"></div>
            <div>
               <img src={swimmingImage} alt="swimming pool" id="swimming__image" />
               <aside id="aside">
                  <div className="pay">
                     <FaDollarSign className="icons" />
                     <p className="tag__line">pay as little as possible!</p>
                  </div>
                  <div className="pay">
                     <FaWarehouse className="icons" />
                     <p className="tag__line">Enjoy wisdom of community!</p>
                  </div>
                  <div className="pay">
                     <VscFile className="icons" />
                     <p className="tag__line">Let somebody else take care of Landlord!</p>
                  </div>
                  <div className="pay">
                     <FaDollarSign className="icons" />
                     <p className="tag__line">Enjoy peaceful Environment!</p>
                  </div>
                  <div className="pay">
                     <FaDollarSign className="icons" />
                     <p className="tag__line">Stay Safe!<br />Save Money!</p>
                  </div>
                  <div className="pay">
                     <FaDollarSign className="icons" />
                     <p className="tag__line">Pay for what you use!</p>
                  </div>
               </aside>
            </div>
         </article>
      </section>
   )
}