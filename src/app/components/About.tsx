import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { User, MessageCircle, Briefcase, Users } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const personalSkills = [
    {
      icon: MessageCircle,
      title: 'Communication',
      description: 'Strong verbal and written communication skills, able to convey complex technical concepts clearly.',
    },
    {
      icon: Briefcase,
      title: 'Project Management',
      description: 'Experienced in managing projects from conception to deployment, ensuring timely delivery.',
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Natural leader with the ability to motivate teams and drive collaborative success.',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl text-gray-800 dark:text-white">My Journey</h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I recently completed my <span className="text-blue-600 dark:text-blue-400">Diploma in Information Technology</span>,
              where I developed a strong foundation in software development, database management, and system architecture.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Throughout my academic journey, I've worked on numerous projects involving mobile app development with
              Flutter, web applications using React and Node.js, and database design with MySQL and PostgreSQL.
              I'm passionate about learning new technologies and applying them to solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My goal is to continue growing as a developer while contributing to innovative projects that make
              a positive impact on users' lives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <h4 className="text-xl mb-6 text-gray-800 dark:text-white">Quick Facts</h4>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Degree</span>
                <span className="text-gray-800 dark:text-white">Diploma in IT</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Specialization</span>
                <span className="text-gray-800 dark:text-white">Full Stack Development</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Focus Areas</span>
                <span className="text-gray-800 dark:text-white">Mobile & Web Apps</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-600 dark:text-gray-400">Availability</span>
                <span className="text-green-600 dark:text-green-400">Open to Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Personal Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl text-center mb-12 text-gray-800 dark:text-white">
            Personal Strengths
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {personalSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-2">
                  <div className="mb-6 inline-block p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl mb-3 text-gray-800 dark:text-white">{skill.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
