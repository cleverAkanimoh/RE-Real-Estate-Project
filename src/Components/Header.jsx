import "../Stylesheets/header.css"

export default function () {
   return (
      <header>
         <section id="header__section">
            <h2 id="heading__text">the most affordable places to stay in san francisco bay area</h2>
            <div id="map__filter__div">
               <picture>
                  <img src='' alt="" />
               </picture>
               <div id="filter__div">
                  <select>
                     <option value="all">all type</option>
                  </select>
                  <select>
                     <option value="neighborhood">neighborhood</option>
                  </select>
                  <button>sea</button>
               </div>
            </div>
         </section>
      </header>
   )
}