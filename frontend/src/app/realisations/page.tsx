"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Wrench, PenTool as Tool, Zap, Building2, Sun, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects = [
    {
      title: "Mécanique Industrielle",
      description: "Installation et maintenance d'équipements industriels de haute précision",
      image: "../../../images/bannier.jpg"
    },
    {
      title: "Énergie Solaire",
      description: "Installation de panneaux solaires pour une énergie durable",
      image: "../../../images/bannier.jpg"
    },
    {
      title: "Construction Métallique",
      description: "Conception et réalisation de structures métalliques sur mesure",
      image: "../../../images/bannier.jpg"
    },
    {
      title: "Maintenance Électrique",
      description: "Service de maintenance et réparation d'installations électriques",
      image: "../../../images/bannier.jpg"
    },
    {
      title: "Automatisation",
      description: "Mise en place de systèmes d'automatisation industrielle",
      image: "../../../images/bannier.jpg"
    },
    {
      title: "Bâtiment Industriel",
      description: "Construction et rénovation de bâtiments industriels",
      image: "../../../images/bannier.jpg"
    },
    {
      title: "Générateurs",
      description: "Installation et maintenance de générateurs de puissance",
      image: "../../../images/bannier.jpg"
    },
    {
      title: "Infrastructure",
      description: "Développement d'infrastructures industrielles complètes",
      image: "../../../images/bannier.jpg"
    },
    {
      title: "Équipement Lourd",
      description: "Maintenance et réparation d'équipements lourds",
      image: "../../../images/bannier.jpg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".animate-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    { icon: <Tool className="mr-2" />, text: "Conception des structures métalliques" },
    { icon: <Sun className="mr-2" />, text: "Support des panneaux solaires" },
    { icon: <Zap className="mr-2" />, text: "Maintenance des générateurs" },
    { icon: <Wrench className="mr-2" />, text: "Fabrication de certaines machines" },
    { icon: <Building2 className="mr-2" />, text: "Installations des bâtiments" },
  ];

  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to projects section smoothly
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#131428] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#131428] to-[#131428]/80"></div>
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center items-center   h-[400px] md:h-[600px] max-w-full">
            <h1 className="text-5xl w-full md:w-[70%] font-bold mb-4 text-center">
              Des <span className="text-red-600">réalisations</span> qui répondent à toutes attentes.
            </h1>
            {/* <div className="space-y-4 animate-slide-up">
              {services.map((service, index) => (
                <div key={index} className="flex items-center text-lg md:text-xl">
                  {service.icon}
                  {service.text}
                </div>
              ))}
            </div> */}
            <div className="mt-8 space-x-4 animate-slide-up">
              <button className="bg-[#F83007] text-white px-8 py-3 rounded-full hover:bg-[#F83007]/90 
                transition-all duration-300 group">
                Demander un service
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full 
                hover:bg-white hover:text-[#F83007] transition-all duration-300">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </section>
              
      {/* Projects Section */}
      <section id="projects" className="bg-white py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll  text-[#131428]">
                Quelques grands projets réalisés
            </h2>
            <p className="text-center mb-12 animate-on-scroll  text-[#131428]/80">
            Depuis 2018, nous avons mené à bien plus de 100 projets et missions pour plus de 80 clients en RDC
            dans les deux villes : Kinshasa et Goma.
          </p> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentProjects.map((project, index) => (
              <div key={index} 
                className="bg-white shadow-lg p-6 rounded-lg animate-on-scroll 
                transform hover:scale-105 transition-all duration-300 border border-[#131428]/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4 w-full object-cover h-48"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#131428]">{project.title}</h3>
                <p className="text-[#131428]/80">{project.description}</p>
              </div>
            ))}
          </div>

              {/* Pagination Controls */}
              <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${
                currentPage === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-[#F83007] hover:bg-[#F83007]/10'
              } transition-colors duration-300`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`w-10 h-10 rounded-full ${
                  currentPage === index + 1
                    ? 'bg-[#F83007] text-white'
                    : 'text-[#131428] hover:bg-[#F83007]/10'
                } transition-colors duration-300`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${
                currentPage === totalPages 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-[#F83007] hover:bg-[#F83007]/10'
              } transition-colors duration-300`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}