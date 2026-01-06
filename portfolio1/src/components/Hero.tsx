import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#062a22]">
      {/* EMERALD OVERLAY (not black) */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-emerald-950/50 to-black/40" />

      {/* SOFT EMERALD VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_65%)]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center px-6">
        <div className="grid md:grid-cols-2 gap-6 items-start w-full">

          {/* LEFT — TEXT */}
          <div className="relative z-20 pr-0 md:pr-24 text-center md:text-left">
            <h1 className="text-[clamp(3rem,6vw,6rem)] font-extrabold text-white leading-tight tracking-wide">
              <span className="block text-emerald-200/70 text-2xl md:text-3xl mb-6 tracking-widest">
                HELLO, I’M
              </span>
              <span className="block">HANNA ABDUL KAREEM</span>
            </h1>

            <p className="mt-6 max-w-md mx-auto md:mx-0 text-white/70 leading-relaxed">
              I create digital, editorial & interactive experiences with a strong
              focus on cinematic web design and storytelling.
            </p>
          </div>

          {/* RIGHT — IMAGE STACK */}
          <div className="relative flex justify-center md:justify-start items-start md:-ml-32 mt-16">

            {/* STRONG EMERALD GLOW */}
            <div className="absolute w-[560px] h-[560px] rounded-full bg-emerald-500/35 blur-[140px] z-0" />

            {/* BLACK CIRCLE */}
            <div
              className="absolute w-[420px] h-[420px] rounded-full bg-black z-10
                         ring-2 ring-emerald-300/40
                         shadow-[0_0_120px_rgba(16,185,129,0.55)]"
            />

            {/* PROFILE IMAGE */}
            <motion.img
              src={profile}
              alt="Hanna Kareem"
              className="relative w-[360px] object-contain grayscale z-30"
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
