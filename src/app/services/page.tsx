"use client";

import { motion } from "framer-motion";


const services = [
  {
    title: "Ingénierie",
    description: "Le département d'Ingénierie est composé de mécaniciens, d'électriciens et de menuisiers qualifiés",
    image: "../../../images/view2.jpg",
  },
  {
    title: "Numérique",
    description: "Le département numérique propose des formations et un encadrement pour atteindre vos objectifs professionnels",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3",
  }
];

const departments = [
  {
    title: "Département ingénierie",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Delectus et, nam atque magni quia eligendi possimus sensim ex esse similique error non pariatur, molestiae quasi nihila commodo amet dicta.",
    image: "../../../images/view2.jpg",
    services: [
      {
        icon: "⚡",
        title: "Électricité",
        description: "Le lorem ipsum est, en imprimerie, une de mots, le défaut varendsg remplace le scGénéralement, on unification."
      },
      {
        icon: "🔧",
        title: "Mécanique",
        description: "Le lorem ipsum est, en imprimerie, une de mots, le défaut varendsg remplace le scGénéralement, on unification."
      },
      {
        icon: "🪚",
        title: "Menuiserie",
        description: "Le lorem ipsum est, en imprimerie, une de mots, le défaut varendsg remplace le scGénéralement, on unification."
      }
    ]
  },
  {
    title: "Département numérique",
    description: "Le lorem ipsum est, en imprimerie, une suite de mots, sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux texte dès qu'il est prêt ou que la mise en page est achevée.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3",
    services: [
      {
        icon: "📚",
        title: "Enseignement",
        description: "Le lorem ipsum est, en imprimerie, une de mots, le défaut varendsg remplace le scGénéralement, on unification."
      },
      {
        icon: "🤝",
        title: "Assistance",
        description: "Le lorem ipsum est, en imprimerie, une de mots, le défaut varendsg remplace le scGénéralement, on unification."
      },
      {
        icon: "👥",
        title: "Supervision",
        description: "Le lorem ipsum est, en imprimerie, une de mots, le défaut varendsg remplace le scGénéralement, on unification."
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-900 text-white py-20"
      >
        <div className="max-w-7xl h-[400px] md:h-[600px]  mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-5xl font-bold mb-6">
              Des Services <span className="text-red-600">Techniques</span> Modernes
            </h1>
            <p className="text-[0.9rem] text-gray-300 max-w-full  md:max-w-[50%] mx-auto">
              Nous vous offrons une gamme complète de services techniques modernes parfaitement adaptés à vos besoins
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
              >
                Demander un service
              </motion.button> */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors"
              >
                En savoir plus
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Découvrez nos services</h2>
            <p className="text-gray-600">Nous organisons nos services en deux grands départements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
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
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    En savoir plus →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Departments */}
      {departments.map((dept, index) => (
        <motion.section
          key={dept.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">{dept.title}</h2>
                <p className="text-gray-600 mb-8">{dept.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {dept.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.title}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: serviceIndex * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl mb-2">{service.icon}</div>
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}