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
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            var nodes = document.querySelectorAll("[data-reveal]");
            for (var i = 0; i < nodes.length; i++) {
              var rect = nodes[i].getBoundingClientRect();
              if (rect.top >= window.innerHeight * 0.9) nodes[i].classList.add("reveal-armed");
            }
          })();`,
        }}
      />
    </>
  );
}
