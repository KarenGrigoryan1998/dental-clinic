import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, MapPin, Clock, Calendar } from 'lucide-react';
import { clinicConfig } from '../config/clinic';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(clinicConfig.whatsappMessage[currentLang] || clinicConfig.whatsappMessage.en);
    window.open(`https://wa.me/${clinicConfig.whatsapp}?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: clinicConfig.phone,
      href: `tel:${clinicConfig.phone}`,
      color: 'bg-primary-100 text-primary-600'
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: 'WhatsApp',
      onClick: handleWhatsApp,
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: clinicConfig.address[currentLang] || clinicConfig.address.en,
      color: 'bg-accent-100 text-accent-600'
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      value: clinicConfig.workingHours[currentLang] || clinicConfig.workingHours.en,
      color: 'bg-medical-100 text-medical-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const Component = item.href ? 'a' : item.onClick ? 'button' : 'div';
              const props = item.href 
                ? { href: item.href } 
                : item.onClick 
                  ? { onClick: item.onClick } 
                  : {};
              
              return (
                <Component
                  key={index}
                  {...props}
                  className={`flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors ${item.href || item.onClick ? 'cursor-pointer' : ''} w-full text-left`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    <p className="font-semibold text-gray-900">{item.value}</p>
                  </div>
                </Component>
              );
            })}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[300px]">
            <iframe
              src={clinicConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('contact.ctaTitle')}
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {t('contact.ctaSubtitle')}
          </p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-600 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            {t('hero.bookAppointment')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
