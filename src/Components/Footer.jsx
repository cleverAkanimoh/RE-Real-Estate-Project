import { MdLocationPin, MdCall, MdPrint } from "react-icons/md";
import { FaFacebookSquare, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaGooglePlus, FaPinterest, FaWifi } from "react-icons/fa";
import logo from "../assets/logo1.png";
import "../Stylesheets/footer.css";

export default function () {
   return (
      <footer>
         <div id="footer__container">
            <div id="footer__logo__address__container">
               <div id="footer__logo">
                  <img src={logo} alt="logo" />
                  <h1>logo</h1>
               </div>
               <aside id="footer__address">
                  <address id="footer__location"><MdLocationPin className="colorme" />345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</address>
                  <ul id="footer__contact_info">
                     <li><MdCall className="colorme" /> (123) 456-7890</li>
                     <li><MdPrint className="colorme" /> (123) 456-7890</li>
                  </ul>
                  <ul id="footer__social_links">
                     <li className="odd">Social Media</li>
                     <li><a href=""><FaFacebookSquare className="colorme" /></a></li>
                     <li><a href=""><FaTwitter className="colorme" /></a></li>
                     <li><a href=""><FaLinkedinIn className="colorme" /></a></li>
                     <li><a href=""><FaYoutube className="colorme" /></a></li>
                     <li><a href=""><FaInstagram className="colorme" /></a></li>
                     <li><a href=""><FaGooglePlus className="colorme" /></a></li>
                     <li><a href=""><FaPinterest className="colorme" /></a></li>
                     <li><a href=""><FaWifi className="colorme wifi" /></a></li>
                  </ul>
               </aside>
            </div>
            <div id="footer__navigation__copyright__container">
               <ul id="footer__navigation">
                  <li className="footer__nav _about">About us</li>
                  <li className="footer__nav _contact">Contact us</li>
                  <li className="footer__nav _help">Help</li>
                  <li className="footer__nav _privacy">Privacy Policy</li>
                  <li className="footer__nav _disclaimer">Disclaimer</li>
               </ul>
               <div className="odd footer__copyright">Copyright © {2023} Minimumlivingcost. All rights reserved</div>
            </div>
         </div>
      </footer>
   )
}