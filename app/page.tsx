import About from "./_components/about";
import Faq from "./_components/faq";
import Hero from "./_components/hero";
import HowItWorks from "./_components/how-it-works";
import Who from "./_components/who";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      <Hero />
      <HowItWorks/>
      <Who/>
      <About/>
      <Faq/>
    </main>
  );
}
