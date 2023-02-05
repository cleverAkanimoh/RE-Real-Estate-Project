import Minimum from "./Minimum";
import Flexibility from "./Flexibility";
import AddNewProperty from "./AddNewHouseProperty";
import Reviews from "./Reviews";
import "../Stylesheets/mainContent.css";

export default function () {
   return (
      <section id="main__content">
         <Minimum />
         <Flexibility />
         <AddNewProperty />
         <Reviews />
      </section>
   )
}