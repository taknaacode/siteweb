import { motion } from "framer-motion";
import droneImg from "@/assets/stealth-drone.png";

export function Drone() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-6xl"
      animate={{ y: [0, -50, 0, 30, 0],
                 rotateZ: [0, 4, 0, -4, 0],
                 rotateY: [0, 3, 0, -3, 0],
      }}
      transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      }}
    >
      <div
        className="absolute inset-0 -z-10 animate-pulse-glow blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, rgba(80,129,118,0.55), transparent 65%)" }}
      />
      <img
        src={droneImg}
        alt="TaknaaCode autonomous stealth surveillance drone"
        width={1536}
        height={1024}
        className="w-full h-auto select-none"
        style={{
          maskImage: "radial-gradient(ellipse 75% 70% at center, black 55%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 70% at center, black 55%, transparent 95%)",
        }}
        draggable={false}
      />
    </motion.div>
  );
}
