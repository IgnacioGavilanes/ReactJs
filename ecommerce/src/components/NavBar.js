import logo from '/Users/ignaciogavilanes/Documents/GitHub/ReactJs/ecommerce/src/logo.svg';
import wishlist from '/Users/ignaciogavilanes/Documents/GitHub/ReactJs/ecommerce/src/wishlist.svg';
import bag from '/Users/ignaciogavilanes/Documents/GitHub/ReactJs/ecommerce/src/bag.svg';

export const NavBar = () => {
    return (
    <nav className='navbar'>
        <ul className='navigation'>
            <li className='logo-container'><img src={logo} alt='logo' /></li>
            <li className='navlinks'><img src={bag} alt='shopping bag' id='bag'/></li>
            <li className='navlinks'><img src={wishlist} alt='wishlist' id='wishlist'/></li>
            <li className='navbar-text navlinks'>Contact</li>
            <li className='navbar-text navlinks'>Home</li>
        </ul>
    </nav>
    )
}

// export default NavBar

/* si hago esto no tengo que importarlo entre llaves en App.js xq exporta todo este archivo. 
De la manera en que esta hecho, estoy exportando solamente el modulo NavBar dentro de este archivo*/