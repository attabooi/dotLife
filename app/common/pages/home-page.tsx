import React from "react";
import { HeroSection } from "../components/ui/hero-section";
import Navigation from "../components/ui/navigation";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-36 bg-gradient-to-b from-[#18181B] via-[#232329] to-[#18181B] min-h-[60vh]">
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6C47FF] via-[#3A8FFF] to-[#6C47FF] mb-8 tracking-tight">
        Build your life, one day at a time.
      </h1>
      <p className="text-lg md:text-2xl text-[#A1A1AA] max-w-2xl mb-10 font-medium">
        Make every day count.<br />
        Stack your achievements and watch your progress grow.<br />
        Miss a day? Your tower reflects your journey—ups and downs included.
      </p>
      <div className="flex flex-col items-center gap-3 mb-12">
        <div className="flex items-center gap-2 text-base md:text-lg text-[#F4F4F5] font-normal">
          <span className="text-[#6C47FF]">●</span> Visualize your consistency
        </div>
        <div className="flex items-center gap-2 text-base md:text-lg text-[#F4F4F5] font-normal">
          <span className="text-[#3A8FFF]">●</span> Gamify your routines
        </div>
        <div className="flex items-center gap-2 text-base md:text-lg text-[#F4F4F5] font-normal">
          <span className="text-[#00E6C7]">●</span> Stay motivated with real stakes
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 rounded-full bg-[#6C47FF] hover:bg-[#3A8FFF] text-white font-bold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#6C47FF] focus:ring-offset-2">
          Start Building
        </button>
        <button className="px-8 py-4 rounded-full border-2 border-[#6C47FF] text-[#6C47FF] font-bold text-lg bg-transparent hover:bg-[#232329] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6C47FF] focus:ring-offset-2">
          See How It Works
        </button>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center bg-[#232329] rounded-2xl p-8 shadow-sm border border-[#232329] min-w-[220px] max-w-xs">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-lg font-semibold text-[#F4F4F5] mb-2">{title}</h3>
      <p className="text-[#A1A1AA] text-center text-base">{desc}</p>
    </div>
  );
}

function Features() {
  const features = [
    {
      title: "Track Quests",
      desc: "Break down your goals into daily quests and build momentum.",
      icon: "🎯",
    },
    {
      title: "Earn Achievements",
      desc: "Unlock milestones and celebrate your progress.",
      icon: "🏆",
    },
    {
      title: "Shop Rewards",
      desc: "Redeem your effort for real or virtual rewards.",
      icon: "🛒",
    },
    {
      title: "Climb Leaderboards",
      desc: "See how you stack up and stay inspired.",
      icon: "📈",
    },
  ];
  return (
    <section className="py-24 bg-[#18181B] flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#18181B] text-[#F4F4F5]">
      <Navigation isLoggedIn={false} hasNotifications={false} hasMessages={false} />
      <main className="pt-24">
        <HeroSection
          title="Build your life, one day at a time."
          description={
            `Make every day count.\nStack your achievements and watch your progress grow.\nMiss a day? Your tower reflects your journey—ups and downs included.`
          }
        />
        <Features />
      </main>
    </div>
  );
} 