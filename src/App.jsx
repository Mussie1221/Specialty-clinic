import Navbar from "./layout/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Facilities from "./pages/Facilities";
import Stats from "./pages/Stats";
import Contact from "./pages/Contact";
import Footer from "./layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Stats />
        <Facilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
