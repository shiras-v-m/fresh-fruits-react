import Navbar from './components/Navbar/Navbar.jsx'
import ResponsiveMenu from './components/Navbar/ResponsiveMenu.jsx'
import Hero from './components/Hero/Hero.jsx'
import Menus from './components/Menus/Menus.jsx'
import Banners from './components/Banners/Banners.jsx'
import Banner2 from './components/Banners/Banner2.jsx'
import Banner3 from './components/Banners/Banner3.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {

  return (
    <main className='overflow-x-hidden'>
      <Navbar />
      <ResponsiveMenu />
      <Hero />
      <Menus />
      <Banners />
      <Banner2 />
      <Banner3 />
      <Footer />
    </main>
  )
}

export default App
