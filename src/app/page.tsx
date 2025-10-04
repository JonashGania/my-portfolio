import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects/Projects";
import Certificates from "../components/Certificates";
import SocialLinks from "../components/SocialLinks";
import TechStacks from "../components/TechStacks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="max-w-[900px] w-full px-4 mx-auto animate-fade-in">
      <Header />
      <section className="flex gap-4 pt-16 flex-col sm:flex-row">
        <About />
        <Experience />
      </section>
      <Projects />
      <section className="flex gap-4 pt-12 flex-col sm:flex-row">
        <Certificates />
        <div className="flex flex-col gap-4 flex-1">
          <TechStacks />
          <SocialLinks />
        </div>
      </section>
      <Footer />
    </main>
  );
}
