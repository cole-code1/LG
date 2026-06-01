import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  const bg = dark
    ? "bg-gray-950 text-gray-100"
    : "bg-white text-gray-900";

  return (
    <div className={bg}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDark((d) => !d)}
          className={`p-2 rounded-full border transition ${
            dark
              ? "bg-gray-800 border-gray-700 text-yellow-400"
              : "bg-white border-gray-200 text-gray-600"
          }`}
          title="Toggle dark mode"
        >
          {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
        </button>
      </div>
    </div>
  );
}