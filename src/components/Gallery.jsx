import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { clinicConfig } from '../config/clinic';

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % clinicConfig.gallery.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + clinicConfig.gallery.length) % clinicConfig.gallery.length);
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicConfig.gallery.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer card-hover aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.alt[currentLang] || image.alt.en}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">
                    {image.alt[currentLang] || image.alt.en}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-primary-300 transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-primary-300 transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <img
            src={clinicConfig.gallery[selectedImage].url}
            alt={clinicConfig.gallery[selectedImage].alt[currentLang] || clinicConfig.gallery[selectedImage].alt.en}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
