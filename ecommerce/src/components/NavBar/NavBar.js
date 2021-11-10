import logo from '../../logo.svg';
import './NavBar.scss';
import {CgMenu} from "react-icons/cg";
import {BsHeart} from "react-icons/bs";
import {CartWidget} from "../CartWidget/CartWidget.js"


export const NavBar = () => {

    return (
    <nav className='navbar'>
        <div className='logo-container'> 
            <a href='#/'>
                <img src={logo} alt='logo' />
            </a>
        </div>
        <ul className='navlinks'>
            <li className='nav-text'>
                <a href='#/'>
                    Home
                </a>
            </li>
            <li className='nav-text'>
                <a href='#/'>
                    Contact
                </a>
            </li>
            <li>
                <a href='#/'>
                    <BsHeart id='wishlist'/>
                </a>
            </li>
            <li>
                < CartWidget/>
            </li>
        </ul>
        <div id='burger'>
            <CgMenu/>
        </div>
    </nav>
    )
}

// export default NavBar

/* si hago esto no tengo que importarlo entre llaves en App.js xq exporta todo este archivo. 
De la manera en que esta hecho, estoy exportando solamente el modulo NavBar dentro de este archivo*/