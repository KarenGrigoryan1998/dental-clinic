import { useTranslation } from 'react-i18next';
import { Award, Cpu, ShieldCheck, Heart } from 'lucide-react';

const WhyUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      key: 'certified',
      icon: Award,
      color: 'bg-primary-100 text-primary-600'
    },
    {
      key: 'equipment',
      icon: Cpu,
      color: 'bg-accent-100 text-accent-600'
    },
    {
      key: 'sterile',
      icon: ShieldCheck,
      color: 'bg-medical-100 text-medical-600'
    },
    {
      key: 'painless',
      icon: Heart,
      color: 'bg-primary-100 text-primary-600'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('whyUs.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.key}
                className="flex gap-5 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${reason.color} flex items-center justify-center`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {t(`whyUs.${reason.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`whyUs.${reason.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
