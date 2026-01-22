import { useState } from "react";
import { motion } from "framer-motion";
import FadeInSection from "../components/FadeInSection";
import "./Home.css";

// Project images
const Project1Img =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768241514/Donex_vzsfsa.png";
const Project2Img =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768989318/e-commerce_gvkmss.png";
const Project3Img =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768241505/portfolio_nivt72.png";
const Project4Img =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768896095/Orange_Modern_Non_Profit_Email_Header_1_bplmgk.png";
const Project5Img =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768896097/Orange_Modern_Africa_Connect_Icon_Logo_1_fygklu.png";
const Project6Img =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768896103/Grey_Modern_Kitchen_Set_Furniture_Instagram_Post_kvzzcr.png";
const Project7Img =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768896107/Black_and_White_Simple_Typographic_Product_Launch_Business_Instagram_Post_lqmrk2.png";
const Project8Img =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768897457/Copy_of_Copy_of_Copy_of_Simple_World_No_Tobacco_Day_Poster_iz1ii2.png";
const Project9Img =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768897447/Green_and_Red_Geometric_Community_Non-Profit_Logo-2_ggzpbu.png";
const Project10Img =
  "https://res.cloudinary.com/daqtttdb0/image/upload/v1768897440/Beige_Organic_Event_Planner_Business_Card_od6get-2_uwst7n.png";

export default function Projectsboard() {
  const projectsData = [
    {
      id: 1,
      title: "Automated Donation Platform",
      webLink: "https://donex-5ecc.vercel.app/",
      category: "Web Development",
      description: "Modern donation platform with React and TailwindCSS.",
      image: Project1Img,
      tech: ["React", "Tailwind", "Node.js"],
    },
    {
      id: 2,
      title: "E-commerce Website",
      webLink: "https://capital-bags.vercel.app/",
      category: "Web Development",
      description: "Full-featured online store with payment integration.",
      image: Project2Img,
      tech: ["React", "Tailwind", "Node.js"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      webLink: "https://collins-portfolio-delta.vercel.app/",
      category: "Web Development",
      description: "Personal branding website with smooth animations.",
      image: Project3Img,
      tech: ["React", "Framer Motion", "Tailwind"],
    },
    {
      id: 4,
      title: "Non-Profit Email Header",
      category: "Digital Marketing",
      description: "Engaging email header design for non-profit campaigns.",
      image: Project4Img,
      tech: ["Canva", "Email Marketing"],
    },
    {
      id: 5,
      title: "Africa Connect Logo Design",
      category: "Graphic Design",
      description: "Vibrant logo design for Africa Connect initiative.",
      image: Project5Img,
      tech: ["Canva", "Branding"],
    },
    {
      id: 6,
      title: "Furniture Store Instagram Post",
      category: "Digital Marketing",
      description: "Eye-catching Instagram post for furniture promotions.",
      image: Project6Img,
      tech: ["Canva", "Social Media"],
    },
    {
      id: 7,
      title: "Product Launch Instagram Post",
      category: "Digital Marketing",
      description: "Sleek Instagram post design for product launches.",
      image: Project7Img,
      tech: ["Canva", "Social Media"],
    },
    {
      id: 8,
      title: "No Tobacco Day Poster",
      category: "Graphic Design",
      description: "Informative poster design for No Tobacco Day awareness.",
      image: Project8Img,
      tech: ["Canva", "Graphic Design"],
    },
    {
      id: 9,
      title: "Community Non-Profit Logo",
      category: "Graphic Design",
      description: "Distinctive logo for community non-profit organization.",
      image: Project9Img,
      tech: ["Canva", "Branding"],
    },
    {
      id: 10,
      title: "Event Planner Business Card",
      category: "Graphic Design",
      description: "Professional business card design for event planners.",
      image: Project10Img,
      tech: ["Canva", "Graphic Design"],
    },
  ];

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [modalProject, setModalProject] = useState(null);

  const categories = ["All", "Web Development", "Digital Marketing", "Graphic Design"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Cursor glow tracking
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="min-h-screen py-16 px-6 sm:px-12 bg-white">
      <FadeInSection>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-orange-500">
          Projects Board
        </h1>
        <p className="text-center text-gray-700 mb-8 max-w-4xl mx-auto">
          Explore projects by category or search by title.
        </p>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border w-full max-w-md focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === cat
                  ? "bg-orange-500 text-white"
                  : "border hover:bg-orange-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeInSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            onMouseMove={handleMouseMove}
            onClick={() => setModalProject(project)}
            className="glow-box bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-300"
            whileHover={{
              y: -8,
              scale: 1.05,
              boxShadow: "0 0 25px rgba(249,115,22,0.6)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold text-orange-500 mb-2">
                {project.title}
              </h2>
              <p className="text-white-600 mb-4">{project.description}</p>

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
        ))}
      </div>

      {modalProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-xl font-bold"
              onClick={() => setModalProject(null)}
            >
              &times;
            </button>

            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="h-64 w-full object-cover rounded-xl mb-4"
            />

            <h2 className="text-2xl font-bold text-orange-500 mb-2">
              {modalProject.title}
            </h2>

            <p className="text-white-700 mb-4">{modalProject.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {modalProject.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {modalProject.webLink && (
              <a
                href={modalProject.webLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
              >
                View Live Project 🚀
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
