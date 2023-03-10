import { VscSearch } from "react-icons/vsc"
import mapImg from "../assets/map-image.png";
import "../Stylesheets/header.css";

export default function () {
   return (
      <header>
         <section id="header__section">
            <h2 id="heading__text">the most affordable places to stay in the san francisco bay area</h2>
            <div id="map__filter__div">
               <picture>
                  <img src={mapImg} alt="map image" id="map__image" />
               </picture>
               <form id="form">
                  <select className="select types">
                     <option value="all">all type</option>
                  </select>
                  <select className="select neighborhood">
                     <option value="neighborhood">neighborhood</option>
                  </select>
                  <button id="searchBtn">
                     <VscSearch id="search__icon" />
                  </button>
               </form>
            </div>
         </section>
      </header>
   )
}