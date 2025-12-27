import { useTranslation } from 'react-i18next';
import { Phone, Calendar, ChevronRight } from 'lucide-react';
import { clinicConfig } from '../config/clinic';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(clinicConfig.whatsappMessage[currentLang] || clinicConfig.whatsappMessage.en);
    window.open(`https://wa.me/${clinicConfig.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400 rounded-full filter blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-medical-400 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Decorative tooth pattern */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="white">
          <path d="M50 10 C30 10 20 30 20 45 C20 60 30 80 35 90 C40 95 45 95 50 85 C55 95 60 95 65 90 C70 80 80 60 80 45 C80 30 70 10 50 10Z" />
        </svg>
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            {t('hero.headline')}
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subheadline')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={handleWhatsApp}
              className="btn-primary text-base px-8 py-4 group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {t('hero.bookAppointment')}
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href={`tel:${clinicConfig.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t('hero.callNow')}
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
            <div className="text-white/70 text-sm">{t('hero.badges.yearsExperience')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">5000+</div>
            <div className="text-white/70 text-sm">{t('hero.badges.happyPatients')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
            <div className="text-white/70 text-sm">{t('hero.badges.expertDoctors')}</div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
