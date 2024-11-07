import Busqueda from './components/Busqueda'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RedesSociales from './components/RedesSociales'
import Titulo from './components/Titulo'

export default function App() {
  return (
    <div className='max-w-5xl py-4 mx-auto flex flex-col gap-y-8'>
      <RedesSociales />

      <Navbar />

      <Titulo />

      <img
        src='/imgs/cab1.jpg'
        alt='Footer Image'
        className='h-64 object-cover rounded-3xl'
      />

      <Busqueda />

      <Footer />
    </div>
  )
}
