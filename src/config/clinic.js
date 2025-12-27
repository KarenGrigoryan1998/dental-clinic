// ============================================
// DENTAL CLINIC CONFIGURATION
// Edit these values for each clinic instance
// ============================================

export const clinicConfig = {
  // Basic Info
  name: 'Your Dental Clinic',
  
  // Contact Information
  phone: '+374 00 123 456',
  whatsapp: '+37400123456',
  email: 'info@yourdentalclinic.am',
  
  // Address
  address: {
    hy: 'Երևան, Մաշտոցի պող. 1',
    en: 'Your Address, Street 1',
    ru: 'Ваш адрес, улица 1'
  },
  
  // Working Hours
  workingHours: {
    hy: 'Երկ-Շաբ: 09:00 - 19:00',
    en: 'Mon-Sat: 09:00 - 19:00',
    ru: 'Пн-Сб: 09:00 - 19:00'
  },
  
  // Social Media Links
  social: {
    instagram: 'https://instagram.com/yourdentalclinic',
    facebook: 'https://facebook.com/yourdentalclinic',
  },
  
  // Google Maps Embed URL (replace with your clinic's location)
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8830123456789!2d44.5!3d40.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEwJzQ4LjAiTiA0NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890',
  
  // WhatsApp message template
  whatsappMessage: {
    hy: 'Բարև, ցանկանում եմ ամրագրել ստոմատոլոգիական խորհրդատվություն',
    en: 'Hello, I would like to book a dental consultation',
    ru: 'Здравствуйте, я хотел бы записаться на консультацию к стоматологу'
  },
  
  // Doctors
  doctors: [
    {
      id: 1,
      name: {
        hy: 'Բժ. Աննա Հարությունյան',
        en: 'Dr. Anna Harutyunyan',
        ru: 'Др. Анна Арутюнян'
      },
      specialty: {
        hy: 'Ընդհանուր ստոմատոլոգ',
        en: 'General Dentist',
        ru: 'Стоматолог-терапевт'
      },
      experience: '15+',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 2,
      name: {
        hy: 'Բժ. Արմեն Պետրոսյան',
        en: 'Dr. Armen Petrosyan',
        ru: 'Др. Армен Петросян'
      },
      specialty: {
        hy: 'Օրթոդոնտ',
        en: 'Orthodontist',
        ru: 'Ортодонт'
      },
      experience: '12+',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 3,
      name: {
        hy: 'Բժ. Մարիա Սարգսյան',
        en: 'Dr. Maria Sargsyan',
        ru: 'Др. Мария Саргсян'
      },
      specialty: {
        hy: 'Իմպլանտոլոգ',
        en: 'Implantologist',
        ru: 'Имплантолог'
      },
      experience: '10+',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face'
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      id: 1,
      name: {
        hy: 'Աննա Ա․',
        en: 'Anna A.',
        ru: 'Анна А.'
      },
      text: {
        hy: 'Հիանալի սպասարկում։ Թիմը շատ պրոֆեսիոնալ է, իսկ կլինիկան՝ մաքուր և հարմարավետ։',
        en: 'Excellent service! The team is very professional and the clinic is spotlessly clean. My teeth have never looked better!',
        ru: 'Отличный сервис! Команда очень профессиональная, а клиника безупречно чистая. Мои зубы никогда не выглядели лучше!'
      },
      rating: 5
    },
    {
      id: 2,
      name: {
        hy: 'Գոռ Գ․',
        en: 'Gor G.',
        ru: 'Гор Г.'
      },
      text: {
        hy: 'Միշտ վախենում էի ստոմատոլոգից, բայց այստեղ ամեն ինչ շատ հանգիստ ու անցավ էր։ Շնորհակալ եմ։',
        en: 'I was afraid of dentists my whole life, but this clinic changed everything. Painless procedures and caring staff.',
        ru: 'Я всю жизнь боялся стоматологов, но эта клиника все изменила. Безболезненные процедуры и заботливый персонал.'
      },
      rating: 5
    },
    {
      id: 3,
      name: {
        hy: 'Լիլիթ Լ․',
        en: 'Lilit L.',
        ru: 'Лилит Л.'
      },
      text: {
        hy: 'Բրեկետները տեղադրել եմ այստեղ՝ արդյունքը գերազանց է։ Բժիշկ Պետրոսյանը շատ ուշադիր է։',
        en: 'Got my braces here and the results are amazing! Dr. Petrosyan is a true professional.',
        ru: 'Поставила здесь брекеты и результаты потрясающие! Доктор Петросян настоящий профессионал.'
      },
      rating: 5
    },
    {
      id: 4,
      name: {
        hy: 'Նարե Ն․',
        en: 'Nare N.',
        ru: 'Нарэ Н.'
      },
      text: {
        hy: 'Սպիտակեցման արդյունքը հրաշալի էր։ Բոլոր քայլերը մանրամասն բացատրեցին և ապահով միջավայր էր։',
        en: 'Best teeth whitening experience! The staff explained every step and the results exceeded my expectations.',
        ru: 'Лучший опыт отбеливания зубов! Персонал объяснил каждый шаг, и результаты превзошли мои ожидания.'
      },
      rating: 5
    }
  ],
  
  // Gallery images
  gallery: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
      alt: { hy: 'Ընդունարան', en: 'Reception Area', ru: 'Приемная' }
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop',
      alt: { hy: 'Բուժման սենյակ', en: 'Treatment Room', ru: 'Лечебный кабинет' }
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop',
      alt: { hy: 'Ժամանակակից սարքավորումներ', en: 'Modern Equipment', ru: 'Современное оборудование' }
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop',
      alt: { hy: 'Ստոմատոլոգիական բազկաթոռ', en: 'Dental Chair', ru: 'Стоматологическое кресло' }
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop',
      alt: { hy: 'Սպասասրահ', en: 'Waiting Area', ru: 'Зал ожидания' }
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&h=600&fit=crop',
      alt: { hy: 'Ստերիլիզացիայի սենյակ', en: 'Sterilization Room', ru: 'Стерилизационная' }
    }
  ]
};

export default clinicConfig;
