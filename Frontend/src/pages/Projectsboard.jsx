import { useState } from "react";
import { motion } from "framer-motion";
import FadeInSection from "../components/FadeInSection";
import "./Home.css"; // Needed for glow-box styles

// Example project images
const Project1Img =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768241514/Donex_vzsfsa.png";
const Project3Img =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768241505/portfolio_nivt72.png";

export default function Projectsboard() {
  const projectsData = [
    {
      id: 1,
      title: "Automated Donation Platform",
      category: "Web Development",
      description: "Modern donation platform with React and TailwindCSS.",
      image: Project1Img,
      tech: ["React", "Tailwind", "Node.js"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Web Development",
      description: "Personal branding website with smooth animations.",
      image: Project3Img,
      tech: ["React", "Framer Motion", "Tailwind"],
    },
  ];

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [modalProject, setModalProject] = useState(null);

  const categories = ["All", "Web Development", "Digital Marketing", "SEO"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // ================= HANDLE CURSOR GLOW =================
  const handleMouseMove = (e) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    box.style.setProperty("--x", `${e.clientX - rect.left}px`);
    box.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="min-h-screen bg-black py-16 px-6 sm:px-12">
      {/* HEADER */}
      <FadeInSection>
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-black"
          style={{ backgroundColor: "#ac9e9e",  textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
        >
          Projects Board
        </h1>
        <p
          className="text-center text-gray-300 mb-8 max-w-4xl mx-auto"
          style={{ textShadow: "0 0 6px rgba(249,115,22,0.2)" }}
        >
          Explore our projects, filter by category or search by title. Click a card to view details.
        </p>

        {/* Search bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-700 bg-neutral-900 text-white w-full max-w-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === cat
                  ? "bg-orange-500 text-black"
                  : "bg-neutral-900 text-gray-300 border border-gray-700 hover:bg-orange-100 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeInSection>

      {/* PROJECT GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <FadeInSection key={project.id}>
            <motion.div
              onMouseMove={handleMouseMove}
              className="glow-box bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer border border-gray-800"
              whileHover={{
                y: -5,
                scale: 1.03,
                boxShadow: "0 0 20px rgba(255, 156, 43, 0.6)",
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setModalProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2
                  className="text-xl font-bold mb-2 text-orange-400"
                  style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
                >
                  {project.title}
                </h2>
                <p
                  className="text-gray-300 mb-4"
                  style={{ textShadow: "0 0 3px rgba(249,115,22,0.2)" }}
                >
                  {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeInSection>
        ))}
      </div>

      {/* MODAL */}
      {modalProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalProject(null)}
        >
          <div
            className="bg-neutral-900 rounded-2xl max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white font-bold text-xl"
            >
              &times;
            </button>
            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2
              className="text-2xl font-bold mb-2 text-orange-400"
              style={{ textShadow: "0 0 6px rgba(249,115,22,0.4)" }}
            >
              {modalProject.title}
            </h2>
            <p className="text-gray-300 mb-4">{modalProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {modalProject.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
