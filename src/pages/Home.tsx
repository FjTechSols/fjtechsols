import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Smartphone } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-primary-600 text-sm font-medium">Disponible para proyectos</span>
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">Hola, soy</span>
              <span className="block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Javier Gonzalez
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Desarrollador <span className="font-semibold text-primary-600">Full-Stack</span> y 
              Diseñador <span className="font-semibold text-primary-600">UX/UI</span> que 
              transforma ideas en experiencias digitales excepcionales
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-accent-400 hover:bg-accent-500 text-black font-semibold rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
              >
                Trabajemos juntos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-200 dark:border-primary-700 text-primary-600 dark:text-primary-400 font-semibold rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
              >
                Ver mis proyectos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Especializado en crear experiencias completas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Desde el concepto hasta el producto final, combino desarrollo técnico 
              con diseño centrado en el usuario
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Desarrollo Full-Stack",
                description: "React, Node.js, TypeScript, bases de datos y APIs robustas",
                color: "primary"
              },
              {
                icon: Palette,
                title: "Diseño UX/UI",
                description: "Interfaces intuitivas, investigación de usuarios y prototipado",
                color: "primary"
              },
              {
                icon: Smartphone,
                title: "Responsive & Mobile",
                description: "Experiencias optimizadas para todos los dispositivos",
                color: "primary"
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-xl mb-6 ${
                  skill.color === 'primary' ? 'bg-primary-100 dark:bg-primary-900/30' : 'bg-accent-100 dark:bg-accent-900/30'
                }`}>
                  <skill.icon className={`h-8 w-8 ${
                    skill.color === 'primary' ? 'text-primary-600' : 'text-accent-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Estoy aquí para ayudarte a materializarlo. Desde la conceptualización 
              hasta el lanzamiento, creemos algo increíble juntos.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Hablemos de tu proyecto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};