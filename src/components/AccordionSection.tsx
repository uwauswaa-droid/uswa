import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function AccordionSection() {
  const [active, setActive] = useState<number | null>(null);

  const items = [
    {
      title: "Awal Ketertarikan",
      content:
        "Semua dimulai dari rasa penasaran. Saya mulai mengenal dunia coding secara perlahan, mencoba hal-hal kecil, hingga akhirnya jatuh cinta dengan proses menciptakan sesuatu dari nol.",
    },
    {
      title: "Proses Belajar",
      content:
        "Saya belajar dengan cara eksplorasi dan praktik langsung. Dari error ke error, dari gagal ke berhasil. Setiap kesalahan justru menjadi bagian penting dari perjalanan saya berkembang.",
    },
    {
      title: "Fokus Saat Ini",
      content:
        "Saat ini saya fokus membangun website modern dengan teknologi seperti React dan Tailwind. Tujuannya bukan hanya membuat tampilan, tapi menciptakan pengalaman yang nyaman dan interaktif.",
    },
    {
      title: "Visi Kedepan",
      content:
        "Saya ingin menjadi developer yang tidak hanya menulis kode, tetapi mampu menciptakan solusi digital yang berdampak dan memberikan pengalaman yang berkesan bagi banyak orang.",
    },
  ];

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative py-28 px-4 text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-sm text-gray-400 tracking-widest mb-2">
            STORY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Perjalanan Cut Hayatul Uswani
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Setiap langkah dalam perjalanan ini adalah proses belajar, berkembang, dan menemukan arah.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md transition hover:border-pink-400/30"
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
                  <ChevronDown className="text-pink-400" />
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

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-pink-500/10 to-purple-500/10 pointer-events-none" />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}