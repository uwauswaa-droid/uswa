import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {

  const text = "Menyiapkan Portfolio Cut Hayatul Uswani...";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black">

      {/* GLOW BACKGROUND */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full"
      />

      <div className="relative text-center">

        {/* NAMA */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-bold tracking-wide bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
        >
          Cut Hayatul Uswani
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mt-2"
        >
          Pelajar & Web Developer
        </motion.p>

        {/* TYPING TEXT */}
        <p className="text-gray-500 mt-6 h-6 text-sm">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>

        {/* LOADING BAR */}
        <div className="w-64 h-[3px] bg-white/10 rounded-full overflow-hidden mt-8 mx-auto">

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="h-full w-1/2 bg-gradient-to-r from-pink-500 to-purple-500"
          />

        </div>

      </div>

    </div>
  );
}