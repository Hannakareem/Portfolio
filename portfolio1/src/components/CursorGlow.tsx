interface CursorGlowProps {
  mousePosition: { x: number; y: number };
}

export function CursorGlow({ mousePosition }: CursorGlowProps) {
  return (
    <div
      className="fixed pointer-events-none z-20 transition-opacity duration-300"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
    </div>
  );
}
