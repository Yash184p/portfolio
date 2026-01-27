import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Mobile App',
      category: 'Mobile Apps',
      description: 'Full-featured e-commerce app built with Flutter and Firebase, including payment integration and real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjkzMzMzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Flutter', 'Firebase', 'Stripe'],
      demoLink: '#',
      githubLink: '#',
      icon: Smartphone,
    },
    {
      title: 'Task Management System',
      category: 'Web Apps',
      description: 'Collaborative task management platform with real-time updates, built using React, Node.js, and PostgreSQL.',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njk0MzE2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      demoLink: '#',
      githubLink: '#',
      icon: Globe,
    },
    {
      title: 'Fitness Tracker App',
      category: 'Mobile Apps',
      description: 'Mobile fitness application with workout tracking, calorie counting, and progress visualization using Flutter.',
      image: 'https://images.unsplash.com/photo-1683701251422-912fe98f2b5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2OTMyODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Flutter', 'SQLite', 'Charts'],
      demoLink: '#',
      githubLink: '#',
      icon: Smartphone,
    },
    {
      title: 'Portfolio Website Builder',
      category: 'Web Apps',
      description: 'Drag-and-drop portfolio builder with customizable templates, built with React and a Node.js backend.',
      image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3Njk0MzE2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#',
      githubLink: '#',
      icon: Globe,
    },
    {
      title: 'Restaurant POS System',
      category: 'Mobile Apps',
      description: 'Point of sale system for restaurants with order management, inventory tracking, and sales analytics.',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjkzMzMzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Flutter', 'Java', 'MySQL'],
      demoLink: '#',
      githubLink: '#',
      icon: Smartphone,
    },
    {
      title: 'Social Media Dashboard',
      category: 'Web Apps',
      description: 'Analytics dashboard for social media management with real-time metrics and post scheduling.',
      image: 'https://images.unsplash.com/photo-1683701251422-912fe98f2b5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2OTMyODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      demoLink: '#',
      githubLink: '#',
      icon: Globe,
    },
  ];

  const categories = ['All', 'Mobile Apps', 'Web Apps'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5"
      >
        <div className="w-full h-full border-4 border-blue-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-4 border-purple-500 rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of my recent work and personal projects
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-lg border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.demoLink}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/90 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/90 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 rounded-lg backdrop-blur-sm"
                  >
                    <project.icon className="w-5 h-5 text-blue-600" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-xl mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        className="px-3 py-1 text-sm bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.demoLink}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={project.githubLink}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
