import { GithubLogo, InstagramLogo, YoutubeLogo } from "phosphor-react";

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      <a href="https://github.com/eltonsantos/orapoisbrasil" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition">
        <GithubLogo size={32} />
      </a>
      <a href="https://www.instagram.com/OraPoisBrasil" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition">
        <InstagramLogo size={32} />
      </a>
      <a href="https://www.youtube.com/@OraPoisBrasil" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition">
        <YoutubeLogo size={32} />
      </a>
    </div>
  );
}