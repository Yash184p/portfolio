import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle, Instagram } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'anilprajapati2859@gmail.com',
      link: 'mailto:anilprajapati2859@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9824565309',
      link: 'tel:+919824565309',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Santej , Ahmedabad, India',
      link: null,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      link: 'https://github.com/Yash184p',
      color: 'hover:bg-gray-800 hover:text-white',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/yash-prajapati-0bb906325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:bg-blue-600 hover:text-white',
    },
    {
      icon: Instagram,
      name: 'instagram',
      link: 'https://www.instagram.com/silentshadow.1909?igsh=ZDFjb2VjMWJuYXJx',
      color: 'hover:bg-blue-400 hover:text-white',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
            Get In Touch
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
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6 text-gray-800 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 bg-gradient-to-br ${info.color} rounded-lg`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {info.title}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-800 dark:text-white">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl mb-6 text-gray-800 dark:text-white">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 bg-gray-100 dark:bg-gray-800 rounded-lg transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9 }}
              className="hidden md:block relative mt-12"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                    '0 0 40px rgba(147, 51, 234, 0.3)',
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                  "Let's work together to bring your ideas to life. I'm always excited to take on new challenges and collaborate on innovative projects."
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-500/20"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800 dark:text-white"
                    placeholder="Yash Prajapati"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-800 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-gray-800 dark:text-white"
                    placeholder="Tell me about your project..."
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={submitted}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    submitted ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {submitted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </motion.div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
