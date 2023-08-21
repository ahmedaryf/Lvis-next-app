"use client"
import HeroSection from "./components/HeroSection";
import PageRapper from "./components/PageRapper";

export default function Home() {
  return (
    <PageRapper>
      <main className="min-h-screen bg-gradient-to-r from-cyan-300 to-blue-500  dark:from-blue-900 dark:to-cyan-900">
      <HeroSection />

        <div></div>
      </main>
    </PageRapper>
  );
}

// color: #616164 #7E2E35  #DAB785