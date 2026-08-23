import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
