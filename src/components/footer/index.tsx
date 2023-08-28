import { Logo } from 'images';
import { Link } from 'react-router-dom';
import { MENU_FOOTER } from 'data';
import FooterStyles from './footer.module.css';

const Footer = () => {
   return (
      <footer className={FooterStyles.footer}>
         <div className={FooterStyles.footerLeft}>
            <img src={Logo} alt="logo" />
            <p className={FooterStyles.footerContent}>
               Social media validation business model canvas graphical user interface launch party
               creative facebook iPad twitter.
            </p>
            <p className={FooterStyles.footerReserved}>All rights reserved.</p>
         </div>
         <div className={FooterStyles.footerRight}>
            {MENU_FOOTER.map((menu, index) => (
               <div key={index} className={FooterStyles.footerMenuWrapper}>
                  <h3>{menu.name}</h3>
                  {menu.menu.map((subMenu, index) => (
                     <Link
                        to={subMenu.link}
                        key={index}
                        className={`${FooterStyles.footerMenu}  ${
                           subMenu.name === 'Careers' ? FooterStyles.footerMenuCareer : null
                        }`}
                     >
                        {subMenu.name}
                        {menu.tag && subMenu.name === 'Careers' && (
                           <span className={FooterStyles.tag}>Hiring</span>
                        )}
                     </Link>
                  ))}
               </div>
            ))}
         </div>
      </footer>
   );
};

export default Footer;
