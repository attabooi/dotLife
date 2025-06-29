import { Link } from "react-router";

const menus = [
  { name: "Quests", to: "/quests" },
  { name: "Achievement", to: "/achievement" },
  { name: "Shop", to: "/shop" },
  { name: "Leaderboard", to: "/leaderboard" },
];

export default function Navigation() {
  return (
    <nav className="flex px-10 h-16 items-center justify-between fixed top-0 left-0 right-0 z-50 bg-[#18181B]/80 backdrop-blur border-b border-[#232329]">
      <Link to="/" className="font-extrabold text-2xl tracking-tight text-white select-none">
        dotLife
      </Link>
      <ul className="flex gap-8 text-lg font-semibold text-[#F4F4F5]">
        {menus.map((item) => (
          <li key={item.name}>
            <Link to={item.to} className="hover:text-[#6C47FF] transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
