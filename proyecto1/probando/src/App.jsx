import { FaMagnifyingGlass } from "react-icons/fa6";
import './App.css'

function App() {
 

  return (
    <>
    
      <header className='headerclass'>
        <nav className='navclass'>
        <div className=' text-red-600 font-bold text-lg'>COMICS</div>
        <div className="flex content-between"><input type="search" placeholder='Search' /><FaMagnifyingGlass /></div>
        </nav>
   
      </header>
      <main>
        <div>
        <h2 className='text-left font-bold text-3xl'>DISCOVER</h2>
         <h2 className="text-left font-bold text-3xl"> ALL COMICS</h2>
        </div>
     
      
        <div className='Tarjetas'>
        <div className='card'>
          <img src="https://acdn.mitiendanube.com/stores/001/184/069/products/reino-de-los-supermanes-cov1-77983b8b7fb40ec32b15997760948652-640-0.jpg" alt="imagen" className='imagenTarjeta'/>
          <h2>Superman</h2>
          <p>El reinado de los supermanes</p>
        </div>

        <div className='card'>
          <img src="https://i1.whakoom.com/large/07/0a/d8b887ef002b49a1984bf19b6bf766f0.jpg" alt="imagen" className='imagenTarjeta'/>
          <h2>Batman</h2>
          <p>La broma asesina</p>
        </div>

        <div className='card'>
          <img src="https://i1.whakoom.com/small/1e/05/defa7078e92e46fb987d530097ebfa82.jpg" alt="imagen" className='imagenTarjeta'/>
          <h2>Tarzán</h2>
          <p>Tarzán vs Depredador</p>
        </div>

        <div className='card'>
          <img src="https://images.cdn2.buscalibre.com/fit-in/360x360/d8/6c/d86c204d5df413b894b58bd9676cedb5.jpg" alt="imagen" className='imagenTarjeta'/>
          <h2>Punisher</h2>
          <p>Puniser vs Universo Marvel</p>
        </div>
      
          
        </div>
        
      </main>
     
    
      
      <footer className="card">
      <p>
          Kim Im Soo®️
        </p>
      </footer>
    
    </>
  )
}

export default App
