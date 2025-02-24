"use client";

import { useEffect, useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram, BookText as TikTok, Mail, Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentRealizationSlide, setCurrentRealizationSlide] = useState(0);
  //const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const heroSlides = [
    {
      image: "../../images/bannier.jpg",
      title: "Trouvez des techniciens qualifiés",
      subtitle: "pour vos besoins en Mécanique, Électricité et Menuiserie."
    },
    {
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3",
      title: "Solutions électriques innovantes",
      subtitle: "Installation et maintenance professionnelle"
    },
    {
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3",
      title: "Menuiserie sur mesure",
      subtitle: "Créations uniques et personnalisées"
    }
  ];

  const realizationSlides = [
    {
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3",
      title: "Installation bâtiment",
      description: "Installation complète pour un immeuble de 20 étages"
    },
    {
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3",
      title: "Installation panneaux",
      description: "Système solaire pour une entreprise"
    },
    {
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3",
      title: "Meuble personnalisé",
      description: "Création sur mesure pour un client"
    }
  ];

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const menuItems = [
    { href: "#", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#realisations", label: "Réalisations" },
    { href: "#about", label: "À propos" },
    { href: "#contact", label: "Contacts" }
  ];

  const filters = ['all', 'mecanique', 'electricite', 'menuiserie'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRealizationSlide((prev) => (prev + 1) % realizationSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
     

      {/* Add margin-top to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section with Carousel */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[400px] md:h-[600px] bg-gray-900 text-white overflow-hidden "
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center ">
                <div className="max-w-2xl ">
                  <motion.h1 
                    key={`${index}-title`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                    className="text-5xl  w-full font-bold mb-4 text-center"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    key={`${index}-subtitle`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                    className="text-[0.9rem] mb-8 text-center"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <div className="flex gap-4 justify-center">
                    {/* <button className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-6 py-3 rounded-md transition-colors">
                      Nous contacter
                    </button> */}
                    <button className="border border-white hover:bg-red-600 hover:text-gray-900 text-white px-6 py-3 rounded-md transition-colors">
                      Nous contacter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-red-600" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </motion.section>

        {/* Services Section with Filters */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          id="services" 
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === filter
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-red-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Mécanique",
                  image: "../../images/mec.jpg",
                  description: "Services mécaniques de qualité, fiables et experts",
                  category: "mecanique"
                },
                {
                  title: "Électricité",
                  image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3",
                  description: "Installation et maintenance électrique professionnelle",
                  category: "electricite"
                },
                {
                  title: "Menuiserie",
                  image: "../../images/menusier.jpg",
                  description: "Travaux de menuiserie sur mesure et personnalisés",
                  category: "menuiserie"
                }
              ].filter(service => activeFilter === 'all' || service.category === activeFilter)
                .map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <button className="mt-4 text-red-600 hover:text-red-700 font-medium">
                      En savoir plus →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          id="about"
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">À propos de nous</h2>
                <p className="text-gray-600 mb-6">
                  KTB WORKSHOP est une entreprise spécialisée dans les services techniques. Notre équipe d'experts qualifiés est dédiée à fournir des solutions innovantes et durables pour répondre à vos besoins en mécanique, électricité et menuiserie.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Notre mission</h3>
                      <p className="text-gray-600">Fournir des services techniques de haute qualité et des solutions innovantes à nos clients.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Nos valeurs</h3>
                      <p className="text-gray-600">Excellence, innovation, intégrité et satisfaction client sont au cœur de notre approche.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <img
                  src="../../images/message.png"
                  alt="About 1"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="../../images/ktb.jpg"
                  alt="About 2"
                  className="w-full h-48 object-cover rounded-lg mt-8"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Realizations Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          id="realisations"
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Réalisations</h2>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
              {realizationSlides.map((slide, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentRealizationSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="relative h-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-gray-200">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {realizationSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentRealizationSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentRealizationSlide === index ? "bg-red-600" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
                <p className="mb-8">La bonne équipe est un impératif que toute les entreprises doivent avoir.</p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nom complet"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Numéro de téléphone"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Ville"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  ></textarea>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors">
                    Envoyer
                  </button>
                </form>
              </div>
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-red-500" />
                    <span>servicetechnique@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-red-500" />
                    <span>+243 972 600 593</span>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <TikTok className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        {/* <footer className="bg-gray-800 text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>© 2024 KTB Workshop. Tous droits réservés.</p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
                <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              </div>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  );
}