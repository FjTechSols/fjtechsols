import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, Coffee, Mail, Send } from 'lucide-react';
import photo from "../assets/img/javi gonzalez portafolio.jpg"

export const About: React.FC = () => {
  const skills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'Node.js & Express', level: 90 },
    { name: 'UX/UI Design', level: 88 },
    { name: 'Python & Django', level: 85 },
    { name: 'AWS & DevOps', level: 82 },
    { name: 'Mobile Development', level: 80 },
  ];

  const experience = [
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      description: 'Liderando el desarrollo de aplicaciones web complejas y mentoring del equipo junior.'
    },
    {
      year: '2022',
      title: 'Full-Stack Developer & UX Designer',
      company: 'StartupXYZ',
      description: 'Desarrollo completo de producto desde cero, incluyendo investigación UX y arquitectura técnica.'
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Creación de interfaces modernas y responsive para clientes de diversos sectores.'
    },
    {
      year: '2019',
      title: 'Junior Developer',
      company: 'CodeBootcamp',
      description: 'Primeros pasos en desarrollo web, aprendizaje intensivo de tecnologías modernas.'
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Sobre mí
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Soy un desarrollador Full-Stack con más de 5 años de experiencia 
                creando soluciones digitales que combinan tecnología robusta con 
                diseño centrado en el usuario.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Mi pasión por la intersección entre desarrollo y diseño me ha llevado 
                a especializarme en crear productos que no solo funcionan perfectamente, 
                sino que también ofrecen experiencias excepcionales a los usuarios.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Calendar, label: '+5 años', desc: 'Experiencia' },
                  { icon: Award, label: '50+', desc: 'Proyectos' },
                  { icon: Users, label: '20+', desc: 'Clientes felices' },
                  { icon: Coffee, label: '∞', desc: 'Tazas de café' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm mb-2">
                      <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
                <img
                  src={photo}
                  alt="Javier Gonzalez"
                  className="w-full h-96 object-cover rounded-xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Javier Gonzalez</h3>
                  <p className="text-primary-600 font-medium">Full-Stack Developer & UX/UI Designer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones completas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                  <span className="text-primary-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-600 to-accent-400 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6">
              Newsletter Exclusivo
            </h2>
            <p className="text-lg text-black dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Únete a más de 1,000 desarrolladores y diseñadores que reciben contenido exclusivo, 
              recursos gratuitos y las últimas tendencias tech cada semana.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Newsletter Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl max-w-lg mx-auto mb-12 shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-primary-600 to-accent-400 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Ingresa tu email"
                    className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-800 border border-gray-600 dark:border-gray-700 rounded-lg text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Suscribirme Gratis
                </motion.button>
              </form>

              <p className="text-gray-400 text-xs mt-4 text-center">
                ✨ Sin spam. Cancela cuando quieras. Más de 1,000 suscriptores.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: '🎯', 
                  title: 'Contenido Exclusivo', 
                  desc: 'Tutoriales avanzados y casos de estudio reales' 
                },
                { 
                  icon: '🚀', 
                  title: 'Recursos Gratuitos', 
                  desc: 'Templates, snippets y herramientas útiles' 
                },
                { 
                  icon: '💡', 
                  title: 'Tendencias Tech', 
                  desc: 'Las últimas novedades en desarrollo y diseño' 
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-xl border:none dark:bg-gray-900/50 p-6 rounded-xl dark:border dark:border-gray-600/50"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-black dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-black dark:text-white text-sm leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};