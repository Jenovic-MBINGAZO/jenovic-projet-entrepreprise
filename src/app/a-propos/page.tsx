"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      title: "Mécanique",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af44?q=80&w=2070&auto=format&fit=crop",
      client: "Entreprise X",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page."
    },
    {
      title: "Construction",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
      client: "Entreprise Y",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page."
    },
    {
      title: "Énergie Solaire",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop",
      client: "Entreprise Z",
      description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page."
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNavigation = () => {
    router.push('/a-propos');  // Redirige vers la page "about"
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gray-900 z-10" />
        <Image
          src="../../../images/vieuws1.jpg"
          alt="Construction worker"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Des <span className="text-red-500">réalisations</span> qui répondent à toutes attentes.
            </h1>
            <div className="space-y-3 text-white mb-8">
              <p className="mb-4">
                Nos ingénieurs (bien qualifiés) vous offrent une main d'oeuvre avec des réalisations diversifiées dans les secteurs comme :
              </p>
              {[
                "Conception des structures métalliques",
                "Support des panneaux solaires",
                "Maintenance des générateurs",
                "Fabrication de certaines machines",
                // "Installations des bâtiments",
                // "Dimensionnement de l'énergie solaire",
                // "Maintenance des appareils électriques",
                "Conception des charpentes en bois et autres"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ArrowRight className="text-red-500 h-4 w-4" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              
              <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition">
                Demander un service
              </button>
              <button className="border border-white text-white px-6 py-3 rounded hover:bg-white/10 transition">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-red-500 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Quelques grands projets réalisés
          </h2>
          <p className="text-white text-center mb-12">
            Depuis 2018, nous avons mené à bien plus de 100 projets et missions pour plus de 80 clients en RDC dans les deux villes : Kinshasa et Goma.
          </p>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-[1.02]">
                      <div className="relative h-[400px]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2">Client: {project.client}</h3>
                        <p className="text-gray-600">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Slide indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nous réalisons vos projets,<br />
            au delà de vos attentes !
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition">
            Nous confier un projet
          </button>
        </div>
      </section>

    </main>
  );
}