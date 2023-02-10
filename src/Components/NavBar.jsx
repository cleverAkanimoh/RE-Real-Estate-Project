import { useState } from 'react';
import { VscMenu } from "react-icons/vsc"
import logo from '../assets/logo1.png';
import "../Stylesheets/navBar.css";

export default function () {
    const [navList, setNavList] = useState(false);

    const navToggle = () => setNavList(prevState => !prevState);

    return (
        <nav>
            <div id="nav__container">
                <div id='logo__hamm__container'>
                    <img src={logo} alt="logo" />
                    <button id="hamm__btn" onClick={navToggle}>
                        <VscMenu id='menu__icon' />
                    </button>
                </div>
                <ul id="navigation__unordered_list" className={navList ? "show" : "hidden"}>
                    <li className='home active'>home</li>
                    <li className='landlord'>landlord</li>
                    <li className='tenants'>tenants</li>
                    <li className='contact'>contact us</li>
                </ul>
            </div>
        </nav>
    )
}