import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Website Portfolio',
    description: 'Website portfolio pribadi untuk menampilkan project dan skill saya.',
    tags: ['React', 'Tailwind'],
    image: '💻',
    status: 'Selesai',
    github: '#',
    demo: '#',
  },
  {
    title: 'To-Do List App',
    description: 'Aplikasi sederhana untuk mencatat tugas harian.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    image: '📝',
    status: 'Selesai',
    github: '#',
  },
  {
    title: 'Kalkulator',
    description: 'Kalkulator sederhana menggunakan JavaScript.',
    tags: ['JavaScript'],
    image: '🧮',
    status: 'Selesai',
    github: '#',
  },
  {
    title: 'Landing Page',
    description: 'Latihan membuat UI modern dan responsive.',
    tags: ['HTML', 'CSS'],
    image: '🌐',
    status: 'Belajar',
    github: '#',
  },
  {
    title: 'Python Tools',
    description: 'Script Python untuk membantu tugas sederhana.',
    tags: ['Python'],
    image: '🐍',
    status: 'Berjalan',
    github: '#',
  },
  {
    title: 'Eksperimen',
    description: 'Project kecil saat mencoba hal baru.',
    tags: ['Learning'],
    image: '⚡',
    status: 'Eksplorasi',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-28 px-4 bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-400 tracking-widest mb-2">
            PORTFOLIO
          </p>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Project Saya
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Beberapa project yang saya buat sebagai bagian dari perjalanan belajar dan eksplorasi teknologi.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >

              <div className="h-full p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-pink-400/40 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-pink-500/10 to-purple-500/10" />

                {/* ICON */}
                <div className="aspect-video rounded-xl mb-4 flex items-center justify-center bg-white/5 border border-white/10 text-5xl relative z-10">
                  {project.image}
                </div>

                <div className="space-y-3 relative z-10">

                  {/* TITLE + STATUS */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">
                      {project.title}
                    </h3>

                    <span className={`text-xs px-2 py-1 rounded-full border ${
                      project.status === 'Selesai'
                        ? 'bg-green-500/10 border-green-400/30 text-green-300'
                        : project.status === 'Belajar'
                        ? 'bg-yellow-500/10 border-yellow-400/30 text-yellow-300'
                        : 'bg-purple-500/10 border-purple-400/30 text-purple-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-white/10 border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <div className="flex gap-2 pt-3">

                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-white/20 text-white hover:bg-white hover:text-black"
                        asChild
                      >
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        size="sm"
                        className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90"
                        asChild
                      >
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}