"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { properties } from "../data/properties";
export default function ImmersiveEntrance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isBioOpen, setIsBioOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  // 1. Door Swing: Single door rotating away from user on left hinge
  const doorRotateY = useTransform(scrollYProgress, [0, 0.3], [0, -120]);
  const doorOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
  // 2. The "Opposing Zoom" Sequence:
  // Exterior (Wall/Door) zooms IN to dive through the threshold
  const exteriorZoom = useTransform(scrollYProgress, [0, 0.3], [1, 4]);
  // Interior (Lounge) zooms OUT to create the "getting bigger" expansion effect
  const interiorZoom = useTransform(scrollYProgress, [0, 0.3], [4, 1]);
  
  // Transition to final state (Scale 1) after passing threshold
  const finalZoom = useTransform(scrollYProgress, [0.3, 0.6], [1, 1]);
  // 3. The Frosting Transition (with Purple Brand Accents)
  const frostOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const frostBlur = useTransform(scrollYProgress, [0.3, 0.5], ["blur(0px)", "blur(15px)"]);
  
  // 4. UI Elements: Fade in and scale up after frosting
  const uiOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const uiScale = useTransform(scrollYProgress, [0.4, 0.6], [0.9, 1]);
  const forSale = properties.filter(p => p.status === 'sale');
  const sold = properties.filter(p => p.status === 'sold');
  return (
    <div ref={containerRef} className="relative h-[600vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ perspective: "1500px" }}>
        
        {/* Layer 1: The Luxury Interior (Deepest Layer) */}
        <motion.div 
          style={{ scale: interiorZoom }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8"
        >
          {/* User-Provided Interior Lounge */}
          <div className="absolute inset-0 z-[-1] overflow-hidden">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBRyA8LTYUArdhHmPv0AsmiSYcj7dcajJZg&s" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover"
            />
            {/* The Frosting Layer - Royal Purple Tint */}
            <motion.div 
              style={{ opacity: frostOpacity, backdropFilter: frostBlur }}
              className="absolute inset-0 bg-purple-100/30 z-10"
            />
          </div>
          {/* Content UI - Fades in after frosting */}
          <motion.div 
            style={{ opacity: uiOpacity, scale: uiScale }}
            className="relative z-20 w-full h-full flex flex-col items-center justify-center"
          >
            {/* Harcourts Logo */}
            <div className="absolute top-12 flex flex-col items-center gap-2">
              <img 
                src="https://www.harcourts.co.nz/assets/images/logo.png" 
                alt="Harcourts Logo" 
                className="h-16 object-contain"
              />
              <div className="h-1 w-24 bg-harcourts-blue" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-7xl w-full">
              {/* For Sale Column */}
              <div className="flex flex-col gap-6 order-2 md:order-1">
                <h2 className="text-3xl font-bold text-harcourts-blue text-center mb-4 uppercase tracking-widest">For Sale</h2>
                <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
                  {forSale.length > 0 ? (
                    forSale.map(p => (
                      <div key={p.id} className="bg-white/90 p-4 rounded-lg shadow-xl border-l-4 border-purple-600">
                        <p className="font-bold text-slate-800">{p.title}</p>
                        <p className="text-sm text-slate-500">{p.address}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-slate-400 italic">No current listings</p>
                  )}
                </div>
              </div>
              {/* User Photo */}
              <div className="flex flex-col items-center gap-6 order-1 md:order-2">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsBioOpen(true)}
                  className="relative cursor-pointer group"
                >
                  <div className="absolute -inset-2 bg-purple-600 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
                  <img 
                    src="https://assets.cloudhi.io/system/team-members/98e72742-1520-499c-b483-e4b7583c2b81.jpg.webp" 
                    alt="Zach Dunkley" 
                    className="relative w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                </motion.div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-harcourts-blue uppercase tracking-tighter">Zach Dunkley</h3>
                  <p className="text-slate-600 font-medium">Your Trusted Real Estate Partner</p>
                </div>
              </div>
              {/* Sold Column */}
              <div className="flex flex-col gap-6 order-3">
                <h2 className="text-3xl font-bold text-harcourts-blue text-center mb-4 uppercase tracking-widest">Solds</h2>
                <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
                  {sold.length > 0 ? (
                    sold.map(p => (
                      <div key={p.id} className="bg-white/90 p-4 rounded-lg shadow-xl border-l-4 border-slate-400">
                        <p className="font-bold text-slate-800">{p.title}</p>
                        <p className="text-sm text-slate-500">{p.address}</p>
                        <p className="text-xs font-bold text-harcourts-blue mt-1 uppercase">Sold</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-slate-400 italic">No sold listings</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* Layer 2: The Masked Wall and Single Swinging Door */}
        <motion.div 
          style={{ scale: exteriorZoom, opacity: doorOpacity }}
          className="absolute inset-0 z-30 flex items-center justify-center"
        >
          <div className="relative w-full h-full overflow-hidden">
            {/* The Wall: Your provided photo with a perfect SVG cutout for the door */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: `url('https://doorstore.ie/cdn/shop/files/amsterdam-white-primed-3-panel-living-room.jpg?v=1772642233&width=1946')`,
                maskImage: 'linear-gradient(black, black), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\'%3E%3Crect x=\'35%25\' y=\'15%25\' width=\'30%25\' height=\'70%25\' fill=\'black\' /%3E%3C/svg%3E")',
                maskComposite: 'exclude',
                WebkitMaskImage: 'linear-gradient(black, black), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\'%3E%3Crect x=\'35%25\' y=\'15%25\' width=\'30%25\' height=\'70%25\' fill=\'black\' /%3E%3C/svg%3E")',
                WebkitMaskComposite: 'destination-out'
              }}
            />
            {/* The Door: Swings open on the left hinge exactly within the cutout */}
            <motion.div 
              style={{ rotateY: doorRotateY }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[70%] overflow-hidden origin-left shadow-2xl"
            >
              <img 
                src="https://doorstore.ie/cdn/shop/files/amsterdam-white-primed-3-panel-living-room.jpg?v=1772642233&width=1946" 
                alt="Door" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              />
            </motion.div>
          </div>
        </motion.div>
        {/* Scroll Prompt */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-12 left-0 right-0 z-40 text-center text-white font-light tracking-[0.2em] uppercase text-xs"
        >
          Scroll to enter
        </motion.div>
        {/* Biography Modal */}
        <AnimatePresence>
          {isBioOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsBioOpen(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-harcourts-blue p-6 text-white flex justify-between items-center">
                  <h4 className="text-xl font-bold uppercase tracking-wide">About Zach Dunkley</h4>
                  <button 
                    onClick={() => setIsBioOpen(false)}
                    className="text-white/80 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                <div className="p-8 text-slate-700 leading-relaxed">
                  <p className="mb-4">
                    Zach Dunkley is a dedicated real estate professional committed to delivering exceptional results for his clients. 
                    With a deep understanding of the local market and a passion for helping people find their dream homes, 
                    Zach combines industry expertise with a personalized approach.
                  </p>
                  <p>
                    Whether you are buying your first home or selling a long-term investment, 
                    Zach provides the guidance, negotiation skills, and marketing strategies 
                    needed to ensure a smooth and successful transaction.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={() => setIsBioOpen(false)}
                    className="px-6 py-2 bg-harcourts-blue text-white rounded-full font-medium hover:bg-harcourts-darkBlue transition"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
