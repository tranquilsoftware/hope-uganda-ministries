import { Mail, Instagram, Phone } from 'lucide-react';
import { 
  // BRIEF_DESCRIPTION, 
  CONTACT_EMAIL, 
  BRAND_NAME, 
  INSTAGRAM_LINK, 
  TRANQUILSOFTWARE_LINK, 
  // HREF_HOME_LINK, 
  INSTAGRAM_USERNAME, 
  CONTACT_PHONE, 
  LOGO, 
  COOL_PITCH,
} from '../globals';
import { Link } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className = '' }: FooterProps) => {

  return (
    // <footer className="text-content-secondary bg-background border-t border-border">
    <footer id="footer" className={`relative bg-background-dark overflow-visible ${className}`}>

      <div className="container px-5 py-16 mx-auto flex flex-col md:flex-row">
        {/* Brand Info */}
        <div className="w-full md:w-1/3 lg:w-1/4 mb-10 md:mb-0">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link
              to="/" 
              className="flex items-center"
            >
              
              <div className="flex items-center">
                <img 
                  src={LOGO} 
                  alt="" 
                  className="h-8 w-8 mr-2"
                />
                <span className="text-2xl font-bold text-primary">
                  {BRAND_NAME}
                </span>
              </div>

            </Link>

            <p className="mt-2 text-sm text-content-white w-full max-w-md mx-auto md:mx-0">
              {COOL_PITCH}
            </p>

          </div>
        </div>

        {/* Quick Links and Contact */}
        <div className="w-full md:w-2/3 lg:w-3/4 flex flex-wrap">
          <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
           {/* Emptyspace */}
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="title-font text-primary font-medium text-content tracking-widest text-sm mb-3 text-center md:text-left">
              CONTACT
            </h2>
            <nav className="list-none space-y-3">

            <li className="flex items-start justify-center md:justify-start">
              <Instagram className="w-4 h-4 mt-0.5 mr-2 text-primary flex-shrink-0" />
              <a 
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-content-white"
              >
                @{INSTAGRAM_USERNAME}
              </a>
            </li>

              <li className="flex items-start justify-center md:justify-start">
                <Mail className="w-4 h-4 mt-0.5 mr-2 text-primary flex-shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-colors text-content-white">
                  {CONTACT_EMAIL}
                </a>
              </li>

              <li className="flex items-start justify-center md:justify-start">
                <Phone className="w-4 h-4 mt-0.5 mr-2 text-primary flex-shrink-0" />
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-primary transition-colors text-content-white">
                  {CONTACT_PHONE}
                </a>
              </li>

            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
          <p className="text-content-tertiary text-sm text-center sm:text-left mb-2 sm:mb-0">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <p className="text-content-tertiary text-sm">
            Made by{' '}
            <a 
              href={TRANQUILSOFTWARE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Tranquil Software
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;