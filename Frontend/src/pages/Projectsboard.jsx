import { useState } from "react";
import { motion } from "framer-motion";
import FadeInSection from "../components/FadeInSection";

// Example project images
const Project1Img = "https://res.cloudinary.com/daqtttdb0/image/upload/v1768241514/Donex_vzsfsa.png";
// import Project2Img from "../assets/images/project2.jpg";
const Project3Img = "https://res.cloudinary.com/daqtttdb0/image/upload/v1768241505/portfolio_nivt72.png";

export default function Projectsboard() {
  const projectsData = [
    {
      id: 1,
      title: "automated donation Platform",
      category: "Web Development",
      description: "Modern donation platform with React and TailwindCSS.",
      image: Project1Img,
      tech: ["React", "Tailwind", "Node.js"],
    },
    // {
    //   id: 2,
    //   title: "SEO Campaign",
    //   category: "Digital Marketing",
    //   description: "Increased organic traffic by 250% in 3 months.",
    //   image: Project2Img,
    //   tech: ["SEO", "Analytics", "Content Marketing"],
    // },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Web Development",
      description: "Personal branding website with smooth animations.",
      image: Project3Img,
      tech: ["React", "Framer Motion", "Tailwind"],
    },
    // Add more projects here
  ];

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [modalProject, setModalProject] = useState(null);

  const categories = ["All", "Web Development", "Digital Marketing", "SEO"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7ED] to-[#FFE8CC] py-16 px-6 sm:px-12">
      {/* HEADER */}
      <FadeInSection>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-orange-500"
        style={{ textShadow: "0 0 15px #FF9F43, 0 0 25px #FFB870" }}>
          Projects Board
        </h1>
        <p className="text-center text-gray-700 mb-8 max-w-4xl mx-auto">
          Explore our projects, filter by category or search by title. Click a card to view details.
        </p>

        {/* Search bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-orange-400"
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
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-orange-100"
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
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
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
                <h2 className="text-xl font-bold mb-2 text-orange-500">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>

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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setModalProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-xl"
            >
              &times;
            </button>
            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-orange-500">{modalProject.title}</h2>
            <p className="text-gray-700 mb-4">{modalProject.description}</p>
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
