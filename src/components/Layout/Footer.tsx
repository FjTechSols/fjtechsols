import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FJ</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Javier Gonzalez</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Desarrollador Full-Stack y Diseñador UX/UI apasionado por crear 
              experiencias digitales excepcionales que conecten tecnología y diseño.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
              >
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-primary-600" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
              >
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-primary-600" />
              </a>
              <a
                href="mailto:fjtechsols@gmail.com"
                className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
              >
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-primary-600" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>FjTechSols@gmail.com</li>
              <li>+34 679 257 900</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2025 Francisco Javier Gonzalez Sanchez. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center mt-2 sm:mt-0">
              Hecho con <Heart className="h-4 w-4 text-red-500 mx-1" /> y mucho café
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};