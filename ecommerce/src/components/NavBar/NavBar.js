import logo from '../../logo.svg';
import './NavBar.scss';
import {Link} from 'react-router-dom'
import {CgMenu} from "react-icons/cg";
import {BsHeart} from "react-icons/bs";
import {CartWidget} from "../CartWidget/CartWidget.js"


export const NavBar = () => {

    return (
    <nav className='navbar'>
        <div className='logo-container'> 
            <Link to='/'>
                <img src={logo} alt='logo' />
            </Link>
        </div>
        <ul className='navlinks'>
            <li className='nav-text'>
                <Link to='/'>
                    Home
                </Link>
            </li>
            <li className='nav-text'>
                <Link to='/#contactForm'>
                    Contact
                </Link>
            </li>
            <li className='nav-text'>
                <Link to='/products/low'>
                    Low Top
                </Link>
            </li>
            <li className='nav-text'>
                <Link to='/products/high'>
                    High Top
                </Link>
            </li>
            <li>
                <Link to='/wishlist'>
                    <BsHeart id='wishlist'/>
                </Link>
            </li>
            <li>
                <Link to='/cart'>
                    < CartWidget/>
                </Link>
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