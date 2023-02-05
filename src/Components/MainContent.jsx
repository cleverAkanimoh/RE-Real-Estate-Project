import "../Stylesheets/mainContent.css";
import Flexibility from "./Flexibility";
import AddNewProperty from "./addNewProperty";
import Minimum from "./Minimum";

export default function () {
   return (
      <section id="main__content">
         <Minimum />
         <Flexibility />
         <AddNewProperty />
      </section>
   )
}