import Navbar from './layout/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Stats from './pages/Stats'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Footer from './layout/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Doctors />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
