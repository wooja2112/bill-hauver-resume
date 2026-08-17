import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Competencies from "@/components/Competencies";
import Experience from "@/components/Experience";
import EarlierCareer from "@/components/EarlierCareer";
import Recommendations from "@/components/Recommendations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Summary />
        <Competencies />
        <Experience />
        <EarlierCareer />
        <Recommendations />
      </main>
      <Footer />
    </>
  );
}
