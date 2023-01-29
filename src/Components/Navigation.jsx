import logo from '../assets/logo1.png';

export default function(){
    return (
       <nav>
        <img src={logo} alt="logo" />
        <ul id="navigation__unordered_list">
            <li className='active home'></li>
            <li className='active home'></li>
            <li className='active home'></li>
            <li className='active home'></li>
        </ul>
       </nav>
    )
   }