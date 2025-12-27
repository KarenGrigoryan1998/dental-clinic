# Dental Clinic Landing Page

A clean, trust-based landing page template for dental clinics built with React.js and Tailwind CSS.

## Features

- **Medical / Trust-based Design**: Clean white + blue gradients, modern cards and icons
- **Multi-language Support**: Armenian (default), English, Russian with language switcher
- **Mobile-First**: Fully responsive design optimized for all devices
- **Smooth Animations**: Lightweight, modern motion
- **SEO-Friendly**: Meta tags and semantic structure
- **Fast Loading**: Vite + optimized assets
- **Easy Customization**: Single configuration file for all clinic-specific content

## Sections

1. **Hero** - Headline + primary CTAs (Book Consultation, Call Now)
2. **Services** - Check-up, cleaning, whitening, implants, orthodontics
3. **Doctors** - Placeholder doctor cards
4. **Why Trust Us** - Certified doctors, modern equipment, sterile environment, painless procedures
5. **Testimonials** - Patient reviews (grid + mobile carousel)
6. **Clinic Gallery** - Gallery grid with lightbox
7. **Contact** - Phone, WhatsApp, address, working hours, Google Maps embed + CTA

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Customization

Edit the `src/config/clinic.js` file to customize:

- Clinic name and branding
- Phone number, WhatsApp, email
- Address and working hours (per-language)
- Social media links
- Google Maps embed URL
- Doctors
- Testimonials
- Gallery images

### Example Configuration

```javascript
export const clinicConfig = {
  name: 'Your Dental Clinic',
  phone: '+374 77 316 566',
  whatsapp: '+37477316566',
  address: {
    hy: 'Երևան, Ձեր հասցեն, փող. 1',
    en: 'Your Address, Street 1',
    ru: 'Ваш адрес, улица 1'
  },
  // ... more options
};
```

## Creating a New Clinic Instance

To create a landing page for a new clinic:

1. Duplicate the entire project folder
2. Update `src/config/clinic.js` with the new clinic's information
3. Update translations (optional) in `src/i18n/translations.js`
4. Update meta tags in `index.html`
5. Deploy

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **i18next** - Internationalization
- **Lucide React** - Icons

## Project Structure

```
dental-clinic/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Doctors.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── config/
│   │   └── clinic.js      # ⭐ Main configuration file
│   ├── i18n/
│   │   ├── index.js
│   │   └── translations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## License

MIT
