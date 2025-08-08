import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con panel de administración, gestión de inventario y procesamiento de pagos.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y analytics avanzados.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Healthcare Dashboard',
      description: 'Dashboard médico para el seguimiento de pacientes con visualización de datos en tiempo real y reportes automatizados.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Python', 'Django'],
      category: 'design',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Fintech Mobile App',
      description: 'Aplicación móvil para gestión financiera personal con análisis de gastos, presupuestos y recomendaciones IA.',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'ML Kit'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Plataforma de análisis de redes sociales con métricas en tiempo real, reportes personalizados y predicciones.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Express', 'MongoDB', 'Chart.js'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'Sistema de gestión de aprendizaje con cursos interactivos, evaluaciones automáticas y seguimiento de progreso.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'UX/UI' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Mis Proyectos
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Una selección de proyectos que demuestran mi experiencia en desarrollo 
              Full-Stack y diseño UX/UI, desde aplicaciones web hasta móviles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-gray-600 dark:text-gray-400 mr-4">
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium">Filtrar por:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
            <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6'>Proximamante</h2>
              {/* {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                        <a
                          href={project.liveUrl}
                          className="flex-1 bg-accent-400 hover:bg-accent-500 text-black px-4 py-2 rounded-lg font-medium text-center transition-colors flex items-center justify-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ver Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))} */}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No hay proyectos en esta categoría todavía.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              ¿Te gusta lo que ves?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Estos son solo algunos ejemplos de mi trabajo. Si tienes un proyecto 
              en mente, me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-accent-400 hover:bg-accent-500 text-black font-semibold rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                Empezar un proyecto
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-200 dark:border-primary-700 text-primary-600 dark:text-primary-400 font-semibold rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
              >
                <Github className="mr-2 h-5 w-5" />
                Ver más en GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};