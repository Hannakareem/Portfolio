import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        padding: "40px",
        color: "black",
        marginTop: "40px",
      }}
    >
      <h2>Skills</h2>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            style={{
              padding: "10px 16px",
              background: "#e5e7eb",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
