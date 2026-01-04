import { motion } from "framer-motion";

const projects = [
  {
    title: "KTU Agenda",
    description: "A college planner web app for KTU students.",
  },
  {
    title: "Evento",
    description: "Event management and registration platform.",
  },
  {
    title: "Gender Reveal App",
    description: "A fun app that predicts gender based on inputs.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        padding: "40px",
        marginTop: "40px",
        color: "black",
        background: "#f9fafb",
      }}
    >
      <h2>Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            style={{
              padding: "20px",
              borderRadius: "12px",
              background: "white",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
