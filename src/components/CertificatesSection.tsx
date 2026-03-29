import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export default function CertificatesSection() {
  const certificates = [
    {
      title: "Dasar Pemrograman Web",
      issuer: "Dicoding",
      year: "2024",
      link: "#",
    },
    {
      title: "Python Fundamental",
      issuer: "Coursera",
      year: "2023",
      link: "#",
    },
    {
      title: "JavaScript Basics",
      issuer: "FreeCodeCamp",
      year: "2024",
      link: "#",
    },
  ];

  return (
    <section id="certificates" className="py-28 px-4 text-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 tracking-widest mb-2">
            ACHIEVEMENT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Sertifikat Saya
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certificates.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-pink-400/40 transition-all duration-300"
            >

              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 mb-4">
                <Award className="text-white" />
              </div>

              {/* CONTENT */}
              <h3 className="text-lg font-semibold mb-1 group-hover:text-pink-300 transition">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mb-3">
                {item.issuer}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{item.year}</span>

                <a
                  href={item.link}
                  target="_blank"
                  className="flex items-center gap-1 hover:text-white transition"
                >
                  Lihat
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl pointer-events-none" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}