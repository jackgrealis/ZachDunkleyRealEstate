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
  // Door animations: Scales up and fades out
  const doorScale = useTransform(scrollYProgress, [0, 0.4], [1, 2.5]);
  const doorOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
  
  // Interior animations: Zooms in and becomes the main view
  const interiorScale = useTransform(scrollYProgress, [0.2, 0.8], [0.8, 1]);
  const interiorOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const forSale = properties.filter(p => p.status === 'sale');
  const sold = properties.filter(p => p.status === 'sold');
  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Layer 2: The Interior */}
        <motion.div 
          style={{ scale: interiorScale, opacity: interiorOpacity }}
          className="absolute inset-0 z-10 bg-harcourts-lightGray flex flex-col items-center justify-center p-8"
        >
          {/* Harcourts Logo/Header */}
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
                    <div key={p.id} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-harcourts-blue">
                      <p className="font-bold text-slate-800">{p.title}</p>
                      <p className="text-sm text-slate-500">{p.address}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-slate-400 italic">No current listings</p>
                )}
              </div>
            </div>
            {/* User Photo (Center) */}
            <div className="flex flex-col items-center gap-6 order-1 md:order-2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsBioOpen(true)}
                className="relative cursor-pointer group"
              >
                <div className="absolute -inset-2 bg-harcourts-blue rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img 
                  src="https://assets.cloudhi.io/system/team-members/98e72742-1520-499c-b483-e4b7583c2b81.jpg.webp" 
                  alt="Zach Dunkley" 
                  className="relative w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-harcourts-blue uppercase tracking-tighter">Zach Dunkley</h3>
              <p className="text-slate-600 font-medium">Your Trusted Real Estate Partner</p>
            </div>
            {/* Sold Column */}
            <div className="flex flex-col gap-6 order-3">
              <h2 className="text-3xl font-bold text-harcourts-blue text-center mb-4 uppercase tracking-widest">Solds</h2>
              <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
                {sold.length > 0 ? (
                  sold.map(p => (
                    <div key={p.id} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-slate-400">
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
