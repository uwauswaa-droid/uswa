import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Website Portfolio Pribadi",
    description:
      "Website portfolio yang saya bangun untuk menampilkan perjalanan, skill, dan project yang terus berkembang.",
    status: "Selesai",
  },
  {
    title: "To-Do List App",
    description:
      "Aplikasi sederhana untuk mengatur aktivitas harian agar lebih terstruktur dan produktif.",
    status: "Selesai",
  },
  {
    title: "Kalkulator Sederhana",
    description:
      "Project latihan JavaScript untuk memahami logika perhitungan dan interaksi user.",
    status: "Selesai",
  },
  {
    title: "Landing Page Modern",
    description:
      "Eksperimen desain UI dengan fokus pada tampilan modern, clean, dan responsive.",
    status: "Belajar",
  },
  {
    title: "Python Mini Tools",
    description:
      "Kumpulan tools kecil berbasis Python untuk membantu pekerjaan sederhana sehari-hari.",
    status: "Berjalan",
  },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Selesai":
      return "bg-green-500/10 text-green-400 border-green-500/20";
    case "Berjalan":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    case "Belajar":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    default:
      return "bg-white/10 text-gray-400";
  }
};

export default function ProjectsCarousel() {
  return (
    <section
      id="projects"
      className="relative py-28 px-4 bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-hidden"
    >
      {/* GLOW BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-400 tracking-widest mb-2">
            PROJECT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Karya & Eksplorasi Saya
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Setiap project adalah bagian dari proses belajar dan berkembang dalam dunia teknologi.
          </p>
        </div>

        {/* CAROUSEL */}
        <Carousel>
          <CarouselContent>

            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-pink-400/30 transition-all duration-300 relative overflow-hidden"
                >

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-pink-500/10 to-purple-500/10" />

                  <h3 className="text-2xl font-semibold mb-3 relative z-10">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 relative z-10 leading-relaxed">
                    {project.description}
                  </p>

                  <span
                    className={`text-xs px-4 py-1 rounded-full border ${getStatusStyle(
                      project.status
                    )} relative z-10`}
                  >
                    {project.status}
                  </span>

                </motion.div>
              </CarouselItem>
            ))}

          </CarouselContent>

          {/* NAV BUTTON */}
          <CarouselPrevious className="border-white/10 bg-white/5 hover:bg-white/10" />
          <CarouselNext className="border-white/10 bg-white/5 hover:bg-white/10" />

        </Carousel>

      </div>
    </section>
  );
}