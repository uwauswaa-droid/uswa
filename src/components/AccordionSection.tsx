import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function AccordionSection() {
  const [active, setActive] = useState<number | null>(null);

  const items = [
    {
      title: "Dunia Teknologi",
      content:
        "Saya mengeksplorasi berbagai teknologi seperti JavaScript, Python, dan C++. Fokus utama saya sekarang adalah membangun website modern yang interaktif, cepat, dan nyaman digunakan.",
    },
    {
      title: "Cara Saya Belajar",
      content:
        "Belajar bagi saya bukan hanya teori, tapi praktik. Saya sering membuat project kecil, mencoba error, lalu memperbaikinya. Dari situlah pemahaman saya berkembang.",
    },
    {
      title: "Arah Masa Depan",
      content:
        "Saya ingin menjadi developer yang tidak hanya paham kode, tetapi juga mampu menciptakan pengalaman digital yang berkesan dan bermanfaat bagi banyak orang.",
    },
  ];

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-28 px-4 max-w-5xl mx-auto text-white">
      
      {/* HEADER */}
      <div className="text-center mb-20">
        <p className="text-sm text-gray-500 tracking-widest mb-2">
          STORY
        </p>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Cerita Perjalanan Saya
        </h2>
      </div>

      {/* ACCORDION */}
      <div className="space-y-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md"
          >
            
            {/* BUTTON */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <motion.div
                animate={{ rotate: active === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-gray-400" />
              </motion.div>
            </button>

            {/* CONTENT */}
            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-6 text-gray-400 leading-relaxed"
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>

            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-pink-500/10 to-purple-500/10 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}