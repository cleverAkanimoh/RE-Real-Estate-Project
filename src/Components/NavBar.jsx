import logo from '../assets/logo1.png';
import "../Stylesheets/navBar.css";

export default function () {
    return (
        <nav>
            <div id="nav__container">
                <div id='logo__hamm__container'>
                    <img src={logo} alt="logo" />
                    <button id="hamm__btn"><i className=''>&list;</i></button>
                </div>
                <ul id="navigation__unordered_list">
                    <li className='active home'>home</li>
                    <li className='landlord'>landlord</li>
                    <li className='tenants'>tenants</li>
                    <li className='contact'>contact us</li>
                </ul>
            </div>
        </nav>
    )
}