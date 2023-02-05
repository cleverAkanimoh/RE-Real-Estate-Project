import { MdLocationPin, MdCall, MdPrint } from "react-icons/md";
import logo from "../assets/logo1.png";
import "../Stylesheets/footer.css";

export default function () {
   return (
      <footer>
         <div id="footer__container">
            <div id="footer__logo__address__container">
               <div id="footer__logo">
                  <img src={logo} alt="logo" />
               </div>
               <aside id="footer__address">
                  <address id="footer__location"><MdLocationPin className="colorme" />345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</address>
                  <ul id="footer__contact_info">
                     <li><MdCall className="colorme" /> (123) 456-7890</li>
                     <li><MdPrint className="colorme" /> (123) 456-7890</li>
                  </ul>
                  <ul id="footer__social_links">
                     <li className="odd">Social Media</li>
                     <li className="colorme"></li>
                     <li className="colorme"></li>
                     <li className="colorme"></li>
                     <li className="colorme"></li>
                     <li className="colorme"></li>
                     <li className="colorme"></li>
                  </ul>
               </aside>
            </div>
            <div id="footer__navigation__copyright__container">
               <ul id="footer__navigation">
                  <li>About us</li>
                  <li>Contact us</li>
                  <li>Help</li>
                  <li>Privacy Policy</li>
                  <li>Disclaimer</li>
               </ul>
               <div id="footer__copyright">Copyright © 2020 Minimumlivingcost. All rights reserved</div>
            </div>
         </div>
      </footer>
   )
}