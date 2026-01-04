type GlowButtonProps = {
  text: string;
};

export function GlowButton({ text }: GlowButtonProps) {
  return (
    <button
      style={{
        padding: "12px 24px",
        borderRadius: "8px",
        border: "none",
        background: "#6366f1",
        color: "white",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}
