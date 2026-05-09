import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function ImmersiveEntrance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // Door animations: Scales up and fades out
  const doorScale = useTransform(scrollYProgress, [0, 0.4], [1, 2.5]);
  const doorOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
  
  // Interior animations: Zooms in and becomes the main view
  const interiorScale = useTransform(scrollYProgress, [0.2, 0.8], [0.8, 1.3]);
  const interiorOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Layer 2: The Interior (Now using image.jpg) */}
        <motion.div 
          style={{ scale: interiorScale, opacity: interiorOpacity }}
          className="absolute inset-0 z-10"
        >
          <img 
            src="/images/image.jpg" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        {/* Layer 1: The Door */}
        <motion.div 
          style={{ scale: doorScale, opacity: doorOpacity }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <img 
            src="https://img.freepik.com/free-photo/3d-rendering-cartoon-welcome-door_23-2151645374.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Welcome Door" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Scroll Prompt */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-12 left-0 right-0 z-30 text-center text-white font-light tracking-[0.2em] uppercase text-xs"
        >
          Scroll to enter
        </motion.div>
      </div>
    </div>
  );
}
