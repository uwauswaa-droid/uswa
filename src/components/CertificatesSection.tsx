import { motion } from 'framer-motion';
import { Code2, Coffee, Rocket, BookOpen } from 'lucide-react';

export function AccordionSection() {
  const items = [
    {
      title: "Teknologi & Tools",
      content:
        "Saya menggunakan berbagai tools seperti JavaScript, Python, dan C++. Saat ini saya juga mulai fokus ke teknologi modern untuk membangun website yang lebih interaktif dan responsif.",
    },
    {
      title: "Proses Belajar",
      content:
        "Saya belajar secara mandiri melalui eksperimen, membuat project kecil, dan mencoba hal baru. Bagi saya, belajar coding adalah proses eksplorasi tanpa henti.",
    },
    {
      title: "Ambisi & Tujuan",
      content:
        "Saya ingin berkembang menjadi developer yang kreatif dan mampu membangun sesuatu yang berdampak. Bukan hanya bisa coding, tapi juga bisa menciptakan pengalaman digital yang menarik.",
    },
  ];

  return (
    <section className="py-28 px-4 max-w-5xl mx-auto text-white">
      <div className="text-center mb-16">
        <p className="text-sm text-gray-500 tracking-widest mb-2">
          EXPLORE
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Mengenal Saya Lebih Dalam
        </h2>
      </div>

      <div className="space-y-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="group border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-all"
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-semibold group-hover:text-pink-300 transition">
                {item.title}
              </h3>
              <span className="text-gray-500 group-hover:rotate-45 transition">
                +
              </span>
            </div>

            <p className="mt-4 text-gray-400 leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: '10+', label: 'Project Dibuat' },
    { icon: Rocket, value: '2+', label: 'Tahun Belajar' },
    { icon: Coffee, value: '∞', label: 'Semangat' },
    { icon: BookOpen, value: 'Pelajar', label: 'Status' },
  ];

  const skills = ['Python', 'JavaScript', 'C++', 'HTML', 'CSS'];

  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white overflow-hidden"
    >
      {/* background dekoratif creative */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="text-pink-300 tracking-[0.3em] text-xs mb-3">
            TENTANG SAYA
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Cerita Saya di Dunia Coding
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-pink-400 via-purple-400 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-500/30 blur-2xl rounded-3xl opacity-70 group-hover:opacity-100 transition" />

              <img
                src="/profile.jpg"
                alt="profile"
                className="relative w-72 h-72 object-cover rounded-3xl border border-white/10 shadow-2xl"
              />

              {/* floating badge */}
              <div className="absolute -bottom-5 -right-5 px-4 py-2 bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg">
                <p className="text-xs text-gray-300">Fokus</p>
                <p className="text-sm font-semibold text-pink-300">Web Development</p>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
              Halo 👋, saya <br />
              <span className="text-pink-300">
                Cut Hayatul Uswani
              </span>
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Semua bermula dari rasa penasaran. Saat pertama kali mengenal dunia coding,
              saya tidak benar-benar tahu sejauh apa perjalanan ini akan membawa saya.
              Namun dari satu baris kode sederhana, perlahan saya mulai jatuh cinta
              dengan proses menciptakan sesuatu dari nol.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Sejak saat itu, saya terus belajar, mencoba, dan berkembang. Dari project kecil
              hingga tantangan yang lebih kompleks, setiap langkah menjadi bagian dari
              perjalanan saya untuk menjadi developer yang lebih baik.
            </p>

            <p className="text-gray-500 leading-relaxed">
              Bagi saya, coding bukan hanya tentang teknologi, tapi tentang bagaimana
              ide bisa diwujudkan menjadi sesuatu yang nyata dan bermanfaat.
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-3 pt-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/10 hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 text-center rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-md hover:-translate-y-2 hover:scale-105 transition-all"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-3 text-pink-300" />

              <p className="text-2xl font-bold">{stat.value}</p>

              <p className="text-sm text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ===== NEW CREATIVE LEARNING SECTION =====
export function LearningSection() {
  return (
    <section id="learning" className="relative py-28 overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black text-white">

      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-gray-400 mb-3">
            PERJALANAN BELAJAR
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Hal yang Sedang Saya Kuasai 🚀
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 space-y-12">

          {learning.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-10"
            >

              <div className="absolute left-[-10px] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 to-purple-500" />

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
              >

                <div className="flex items-center gap-4 mb-3">
                  <div className="text-3xl">{item.image}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>

                <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/10">
                  {item.progress}
                </span>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
