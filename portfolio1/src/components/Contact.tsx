import { motion } from "framer-motion";

export function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        padding: "40px",
        marginTop: "40px",
        color: "black",
        background: "#eef2ff",
        textAlign: "center",
      }}
    >
      <h2>Contact Me</h2>
      <p style={{ marginBottom: "20px" }}>
        Let’s connect! Feel free to reach out.
      </p>

      <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
        <a href="mailto:hanna@example.com">📧 Email</a>
        <a href="https://github.com/Hannakareem" target="_blank">
          💻 GitHub
        </a>
        <a href="https://linkedin.com" target="_blank">
          🔗 LinkedIn
        </a>
      </div>
    </motion.section>
  );
}
