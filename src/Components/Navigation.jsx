import logo from '../assets/logo1.png';
import '../Stylesheets/navBar.css'

export default function(){
    return (
       <nav>
        <img src={logo} alt="logo" />
        <ul id="navigation__unordered_list">
            <li className='active home'>home</li>
            <li className='landlord'>landlord</li>
            <li className='tenants'>tenants</li>
            <li className='contact'>contact us</li>
        </ul>
       </nav>
    )
   }