import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

// reusable animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black text-white"
    >
      {/* 3D */}
      <ThreeScene />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* FOTO */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 blur-2xl rounded-full opacity-60" />

            <img
              src="/profile.jpg"
              alt="Cut Hayatul Uswani"
              className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-white/10 shadow-2xl"
            />
          </motion.div>

          {/* TEXT */}
          <div className="text-center md:text-left flex-1">

            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm text-gray-300 mb-6 backdrop-blur-md"
            >
              ✨ Portfolio Pribadi
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Cut Hayatul Uswani
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Pelajar & Web Developer
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
            >
              Dari rasa penasaran sederhana, saya mulai menjelajahi dunia coding.
              Kini saya terus belajar dan berkembang untuk menciptakan karya digital
              yang tidak hanya berfungsi, tapi juga bermakna.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start"
            >
              <Button
                className="rounded-full px-8 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90"
                onClick={() => scrollTo('#projects')}
              >
                Lihat Karya 🚀
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-8 border-white/20 text-white hover:bg-white hover:text-black"
                onClick={() => scrollTo('#contact')}
              >
                Hubungi Saya
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <motion.button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown className="h-5 w-5 text-white" />
      </motion.button>
    </section>
  );
}