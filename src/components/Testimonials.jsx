import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { clinicConfig } from '../config/clinic';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % clinicConfig.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + clinicConfig.testimonials.length) % clinicConfig.testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicConfig.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover"
            >
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                "{testimonial.text[currentLang] || testimonial.text.en}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name[currentLang] || testimonial.name.en}
                </p>
                <p className="text-sm text-primary-600">
                  {t('testimonials.clientLabel')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <Quote className="w-10 h-10 text-primary-200 mb-6" />
            
            <div className="flex gap-1 mb-4">
              {[...Array(clinicConfig.testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              "{clinicConfig.testimonials[currentIndex].text[currentLang] || clinicConfig.testimonials[currentIndex].text.en}"
            </p>
            
            <div className="border-t pt-6">
              <p className="font-semibold text-gray-900 text-lg">
                {clinicConfig.testimonials[currentIndex].name[currentLang] || clinicConfig.testimonials[currentIndex].name.en}
              </p>
              <p className="text-primary-600">
                {t('testimonials.clientLabel')}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-primary-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary-600" />
            </button>
            
            <div className="flex items-center gap-2">
              {clinicConfig.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-primary-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-primary-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
