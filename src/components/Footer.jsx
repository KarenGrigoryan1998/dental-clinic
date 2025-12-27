import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Instagram, Facebook, Heart } from 'lucide-react';
import { clinicConfig } from '../config/clinic';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { key: 'home', href: '#' },
    { key: 'services', href: '#services' },
    { key: 'doctors', href: '#doctors' },
    { key: 'gallery', href: '#gallery' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">🦷</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                {clinicConfig.name}
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {clinicConfig.social.instagram && (
                <a
                  href={clinicConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {clinicConfig.social.facebook && (
                <a
                  href={clinicConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('contact.title')}</h4>
            <div className="space-y-4">
              <a
                href={`tel:${clinicConfig.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-primary-400" />
                {clinicConfig.phone}
              </a>
              <a
                href={`mailto:${clinicConfig.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-primary-400" />
                {clinicConfig.email}
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>{clinicConfig.address[currentLang] || clinicConfig.address.en}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {clinicConfig.name}. {t('footer.rights')}
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              {t('footer.madeWith')} <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
