import { useTranslation } from 'react-i18next';
import { Award } from 'lucide-react';
import { clinicConfig } from '../config/clinic';

const Doctors = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <section id="doctors" className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('doctors.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('doctors.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicConfig.doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name[currentLang] || doctor.name.en}
                  className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {doctor.name[currentLang] || doctor.name.en}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {doctor.specialty[currentLang] || doctor.specialty.en}
                </p>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100">
                    <Award className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="font-semibold text-primary-700">{doctor.experience}</span>
                  <span className="text-gray-500">{t('doctors.experience')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
