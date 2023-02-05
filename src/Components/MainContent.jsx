import { BsCurrencyDollar, BsBuilding, BsFlower1, BsLayerBackward } from "react-icons/bs";
import { VscLayers, VscShield } from "react-icons/vsc";
import { BiAdjust } from "react-icons/bi";
import Flexibility from "./Flexibility"
import swimmingImage from "../assets/swimmingpool.png";
import "../Stylesheets/mainContent.css";
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