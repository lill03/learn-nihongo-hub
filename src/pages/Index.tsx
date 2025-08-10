import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Courses } from "@/components/Courses";
import { StudentProfiles } from "@/components/StudentProfiles";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Courses />
        <StudentProfiles />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
