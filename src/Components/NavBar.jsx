import logo from '../assets/logo1.png';
import "../Stylesheets/navBar.css";
import { VscMenu } from "react-icons/vsc"

export default function () {
    return (
        <nav>
            <div id="nav__container">
                <div id='logo__hamm__container'>
                    <img src={logo} alt="logo" />
                    <button id="hamm__btn">
                        <VscMenu id='menu__icon'/>
                    </button>
                </div>
                <ul id="navigation__unordered_list">
                    <li className='home active'>home</li>
                    <li className='landlord active'>landlord</li>
                    <li className='tenants active'>tenants</li>
                    <li className='contact active'>contact us</li>
                </ul>
            </div>
        </nav>
    )
}