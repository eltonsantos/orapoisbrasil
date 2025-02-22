"use client";

import React, { useEffect, useState } from "react";
import {
  MoonStars,
  Sun,
} from "phosphor-react";
import Links from "./components/Links";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setIsDarkMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);

  const toggleMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <div className="max-w-lg mx-auto p-6 dark:text-white transition mt-10">
      <Profile />

      {/* Dark Mode Switch */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleMode}
          className={`w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center transition-all ${
            isDarkMode ? "justify-end" : "justify-start"
          }`}
        >
          <span className="w-6 h-6 flex items-center justify-center">
            {isDarkMode ? (
              <Sun size={20} weight="bold" className="text-yellow-400" />
            ) : (
              <MoonStars size={20} weight="bold" className="text-gray-900" />
            )}
          </span>
        </button>
      </div>

      <Links />
      <SocialLinks />
      <Footer />
    </div>
  );
}
