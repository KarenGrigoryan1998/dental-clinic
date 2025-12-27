import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { clinicConfig } from '../config/clinic';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages = [
    { code: 'hy', label: 'ՀԱՅ' },
    { code: 'en', label: 'ENG' },
    { code: 'ru', label: 'РУС' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#' },
    { key: 'services', href: '#services' },
    { key: 'doctors', href: '#doctors' },
    { key: 'gallery', href: '#gallery' },
    { key: 'contact', href: '#contact' }
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setLangMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦷</span>
            </div>
            <span className={`font-display font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              {clinicConfig.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">{i18n.language}</span>
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[100px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-primary-50 transition-colors ${
                        i18n.language === lang.code ? 'text-primary-600 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Call Button */}
            <a
              href={`tel:${clinicConfig.phone}`}
              className="btn-primary"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('nav.bookNow')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl mt-2 p-6 animate-fade-in-down">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 font-medium py-2 hover:text-primary-500 transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </nav>
            
            <div className="flex gap-2 mt-6 pt-6 border-t">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    i18n.language === lang.code
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            
            <a
              href={`tel:${clinicConfig.phone}`}
              className="btn-primary w-full mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('nav.bookNow')}
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
