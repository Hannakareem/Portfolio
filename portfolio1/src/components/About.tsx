import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        padding: "40px",
        color: "black",
        background: "#f5f5f5",
        marginTop: "40px",
      }}
    >
      <h2>About Me</h2>
      <p>
        I’m Hanna, a Computer Science student passionate about building clean,
        interactive web experiences.
      </p>
    </motion.section>
  );
}
