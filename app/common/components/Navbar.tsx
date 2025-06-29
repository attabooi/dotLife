import React from "react";
import Logo from "./Logo";

const menu = [
  "Quests",
  "Achievement",
  "Shop",
  "Leaderboard"
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-black/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <Logo />
      <ul className="flex gap-8 text-lg font-semibold text-white">
        {menu.map((item) => (
          <li key={item} className="hover:text-indigo-400 transition-colors cursor-pointer select-none">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
} 