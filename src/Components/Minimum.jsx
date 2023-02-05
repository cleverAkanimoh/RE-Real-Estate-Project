import { BsCurrencyDollar, BsBuilding, BsFlower1, BsLayerBackward } from "react-icons/bs";
import { VscLayers, VscShield } from "react-icons/vsc";
import { BiAdjust } from "react-icons/bi";
import swimmingImage from "../assets/swimmingpool.png";

export default function(){
    return (
        <article id="minimum__article">
            <h2 id="minimum__text"><span className="colorme">minimum living cost</span> takes care of everything</h2>
            <div className="underline"></div>
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
    )
}