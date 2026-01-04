import { motion } from "framer-motion";
import { Briefcase, Award } from 'lucide-react';
import { useInView } from './hooks/useInView';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechVision Studios',
    period: '2022 - Present',
    description: 'Leading development of innovative web applications and mentoring junior developers.',
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Innovations',
    period: '2020 - 2022',
    description: 'Crafted responsive interfaces and implemented design systems for enterprise clients.',
  },
  {
    title: 'UI/UX Developer',
    company: 'Creative Labs',
    period: '2018 - 2020',
    description: 'Bridged design and development to create seamless user experiences.',
  },
];

const leadership = [
  {
    title: 'Open Source Contributor',
    description: 'Active contributor to popular React libraries and frameworks',
  },
  {
    title: 'Tech Community Lead',
    description: 'Organized 20+ workshops and meetups for local developer community',
  },
  {
    title: 'Award Winner',
    description: 'Best Web Experience Award at Digital Innovation Summit 2023',
  },
];

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Experience & Leadership
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl text-cyan-400">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 to-transparent group-hover:from-cyan-500 transition-all duration-500" />
                  
                  <div className="pl-6 pb-8">
                    <div className="mb-2">
                      <h4 className="text-xl text-gray-200 group-hover:text-cyan-300 transition-colors duration-300">
                        {exp.title}
                      </h4>
                      <p className="text-cyan-400/80">{exp.company}</p>
                    </div>
                    
                    <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl text-purple-400">Leadership & Awards</h3>
            </div>
            
            <div className="space-y-6">
              {leadership.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    <h4 className="text-xl mb-2 text-gray-200 group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
