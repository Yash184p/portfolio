import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Smartphone, Code, Globe, Database, Server, Layout } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setAnimate(true), 500);
    }
  }, [isInView]);

  const technicalSkills = [
    {
      name: 'App Development',
      level: 90,
      icon: Smartphone,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Java',
      level: 72,
      icon: Code,
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Flutter',
      level: 86,
      icon: Smartphone,
      color: 'from-blue-400 to-cyan-400',
    },
    {
      name: 'React',
      level: 62,
      icon: Globe,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Node.js',
      level: 60,
      icon: Server,
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'MySQL',
      level: 85,
      icon: Database,
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'PostgreSQL',
      level: 51,
      icon: Database,
      color: 'from-indigo-500 to-blue-600',
    },
    {
      name: 'UI/UX Design',
      level: 80,
      icon: Layout,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
      />

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
            Technical Skills
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
            Proficient in a wide range of technologies and frameworks for building modern applications
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 bg-gradient-to-br ${skill.color} rounded-lg`}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg text-gray-800 dark:text-white">{skill.name}</h4>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={animate ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={animate ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  >
                    <motion.div
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 bg-white/20"
                    ></motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl text-center mb-8 text-gray-800 dark:text-white">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git & GitHub',
              'REST APIs',
              'Firebase',
              'Express.js',
              'Tailwind CSS',
              'Material-UI',
              'VS Code',
              'Figma',
              'Postman',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -10 }}
                transition={{
                  duration: 0.5,
                  delay: 1 + index * 0.05,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
