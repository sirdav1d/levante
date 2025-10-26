import About from "./_components/about";
import Faq from "./_components/faq";
import { Header } from "./_components/header";
import Hero from "./_components/hero";
import HowItWorks from "./_components/how-it-works";
import Who from "./_components/who";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
        <Header/>
      <Hero />
     
      <About/>
      <Who/>
      <Faq/>
    </main>
  );
}
