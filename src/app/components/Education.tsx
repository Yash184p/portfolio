import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'Diploma in Information Technology',
      institution: 'Tech Institute of Excellence',
      period: '2023 - 2026',
      cgpa: '8.9/10',
      description:
        'Comprehensive program covering software development, database management, networking, and system administration. Graduated with distinction.',
      highlights: [
        'Dean\'s List - All Semesters',
        'Best Final Year Project Award',
        'Team Lead for the project Smart Attendance System',
      ],
    },
  ];

  const certifications = [
    {
      title: 'Flutter & Dart - Complete Guide',
      issuer: 'Udemy',
      year: '2025',
      icon: Award,
    },
   
    {
      title: 'Node.js Developer Course',
      issuer: 'Coursera',
      year: '2025',
      icon: Award,
    },
    {
      title: 'Database Design & SQL',
      issuer: 'LinkedIn Learning',
      year: '2024',
      icon: Award,
    },

  ];

  return (
    <section id="education" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl mb-2 text-gray-800 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                    </div>
                    <div className="mt-4 md:mt-0 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                      <p className="text-sm text-gray-600 dark:text-gray-400">CGPA</p>
                      <p className="text-xl text-gray-800 dark:text-white">{edu.cgpa}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h4 className="text-lg mb-3 text-gray-800 dark:text-white flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                        >
                          <span className="flex-shrink-0 w-2 h-2 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl text-center mb-12 text-gray-800 dark:text-white">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg mb-2 text-gray-800 dark:text-white leading-tight">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">{cert.year}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
