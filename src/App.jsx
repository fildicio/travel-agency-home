import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Hero from "./components/Hero/Hero.jsx"
import TileCarousel from "./components/TileCarousel/TileCarousel.jsx"
import CalltoAction from "./components/CallToAction/CalltoAction.jsx"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TileCarousel />
        <CalltoAction />
      </main>
      <Footer />
    </>
  )
}

export default App
