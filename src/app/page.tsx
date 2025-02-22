"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  GithubLogo,
  InstagramLogo,
  MoonStars,
  Sun,
  YoutubeLogo,
} from "phosphor-react";

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
    <div className="max-w-lg mx-auto p-6">
      {/* Profile Section */}
      <div className="text-center mb-6">
        <Image
          src="/orapoisbrasil.png"
          alt="Ora Pois, Brasil!"
          width={100}
          height={100}
          className="w-28 h-28 mx-auto rounded-full"
        />
        <p className="text-xl font-medium mt-2 dark:text-white">
          @orapoisbrasil
        </p>
      </div>

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

      {/* Links Section */}
      <ul className="space-y-4 mb-6">
        <li>
          <a
            href="https://www.eltonmelosantos.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 px-6 bg-gray-200 dark:bg-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            Ir para meu website
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@OraPoisBrasil"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 px-6 bg-gray-200 dark:bg-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            Ir para meu canal
          </a>
        </li>
      </ul>

      {/* Social Links Section */}
      <div className="flex justify-center space-x-4 mb-6">
        <a
          href="https://github.com/eltonsantos/orapoisbrasil"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          <GithubLogo size={32} />
        </a>
        <a
          href="https://www.instagram.com/OraPoisBrasil"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          <InstagramLogo size={32} />
        </a>
        <a
          href="https://www.youtube.com/@OraPoisBrasil"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          <YoutubeLogo size={32} />
        </a>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm dark:text-white">
        Feito com ♥ por{" "}
        <a
          href="https://eltonmelosantos.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Elton Santos
        </a>
      </footer>
    </div>
  );
}
