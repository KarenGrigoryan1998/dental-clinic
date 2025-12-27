import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}

export default App;
