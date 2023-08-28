import { Logo } from 'images';
import { Link } from 'react-router-dom';
import NavStyles from './navbar.module.css';
import Button from 'components/button';
import { MENU_HEADER } from 'data';

const Navbar = () => {
   return (
      <nav className={NavStyles.nav}>
         <Link to={'/'}>
            <img src={Logo} alt="logo" />
         </Link>
         <div className={NavStyles.navMenu}>
            {MENU_HEADER.map((menu, index) => (
               <Link className={NavStyles.navItems} to={menu.link} key={index}>
                  {menu.name}
               </Link>
            ))}
            <Button className="" variant="primary" outline="black">
               Log In
            </Button>
         </div>
      </nav>
   );
};

export default Navbar;
