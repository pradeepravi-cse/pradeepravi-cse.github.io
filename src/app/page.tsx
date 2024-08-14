import Hero from "@/app/components/Hero";
import AboutMe from "@/app/components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="w-full m-0 p-0">
      <Hero />
      <AboutMe />
      <Skills/>
    </div>
  );
}
