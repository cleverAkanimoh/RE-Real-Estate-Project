import { BsCurrencyDollar, BsBuilding, BsFlower1, BsLayerBackward } from "react-icons/bs";
import { VscLayers, VscShield } from "react-icons/vsc";
import { BiAdjust } from "react-icons/bi";
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
                     <BsCurrencyDollar className="icons dollar" />
                     <p className="tag__line">pay as little<br/>as possible!</p>
                  </div>
                  <div className="pay">
                     <BsBuilding className="icons house" />
                     <p className="tag__line">Enjoy wisdom<br/>of community!</p>
                  </div>
                  <div className="pay">
                     <VscLayers className="icons layer" />
                     <p className="tag__line">Let somebody else<br/>take care of Landlord!</p>
                  </div>
                  <div className="pay">
                     <BsFlower1 className="icons flower" />
                     <p className="tag__line">Enjoy peaceful<br/>Environment!</p>
                  </div>
                  <div className="pay">
                     <VscShield className="icons shield" />
                     <p className="tag__line">Stay Safe!<br />Save Money!</p>
                  </div>
                  <div className="pay">
                     <BiAdjust className="icons moon" />
                     <p className="tag__line">Pay for what<br/>you use!</p>
                  </div>
               </aside>
            </div>
         </article>

         <article id="flexibility__article" >
            <div id="flexibility__images">
               <h4 className="flexibility__h4 bed">flexible lease</h4>
               <h4 className="flexibility__h4 happy">7-Day happiness quaranteed</h4>
               <h4 className="flexibility__h4 cleaning">monthly house cleaning</h4>
               <h4 className="flexibility__h4 roommates">choose your own roommate</h4>
            </div>
            <div id="flexibility__write_up">
               <h2 id="flexibility__h2">Flexibility and options to suit your lifestyle.</h2>
               <p id="flexibility__para">You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.</p>
               <a href="" id="rooms__btn">search rooms</a>
            </div>
         </article>
      </section>
   )
}