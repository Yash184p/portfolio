import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Flutter Developer Intern',
      company: 'Infosys.',
      period: 'April - 2024',
      type: 'Internship',
      description:
        '"Working on front-end development using Flutter and collaborating with senior developers to build cross-platform mobile applications. Gained hands-on experience in building responsive UI, state management, and integrating APIs."',
      responsibilities: [
        'Developed user interfaces using Flutter widgets and Dart programming language',
        'Collaborated with the design team to implement UI/UX designs',
        'Assisted in debugging and optimizing application performance',
      ],
    },
    {
      title: 'Mobile App Developer',
      company: 'Silver Touch Technologies',
      period: 'May 2025',
      type: 'Freelance',
      description:
        'Developed mobile applications for various clients using Flutter. Managed projects from initial consultation to deployment on App Store and Google Play.',
      responsibilities: [
        'Built cross-platform mobile apps using Flutter and Dart',
        'Integrated RESTful APIs and Firebase services',
        'Delivered projects on time while maintaining high code quality',
      ],
    },
    {
      title: 'IT Support Intern',
      company: 'Digital Services Ltd.',
      period: 'December 2024',
      type: 'Internship',
      description:
        'Provided technical support to internal teams and assisted in maintaining company IT infrastructure. Learned troubleshooting, system administration, and database management.',
      responsibilities: [
        'Troubleshot hardware and software issues for 100+ employees',
        'Assisted in database maintenance and backup procedures',
        'Created technical documentation for common IT procedures',
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and work experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500 group">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-2xl mb-2 text-gray-800 dark:text-white">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg mb-3 text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </h4>

                    <div className={`flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 dark:text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
