import { useTranslation } from 'react-i18next';
import { Stethoscope, Sparkles, Sun, Puzzle, SmilePlus } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'checkup',
      icon: Stethoscope,
      color: 'from-primary-500 to-primary-600'
    },
    {
      key: 'cleaning',
      icon: Sparkles,
      color: 'from-accent-500 to-accent-600'
    },
    {
      key: 'whitening',
      icon: Sun,
      color: 'from-medical-500 to-medical-600'
    },
    {
      key: 'implants',
      icon: Puzzle,
      color: 'from-primary-600 to-accent-500'
    },
    {
      key: 'orthodontics',
      icon: SmilePlus,
      color: 'from-accent-600 to-medical-500'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`services.${service.key}.title`)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
