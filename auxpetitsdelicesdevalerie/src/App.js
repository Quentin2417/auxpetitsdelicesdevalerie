import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Accueil } from "./pages/Accueil";
import { Apropos } from "./pages/Apropos";
import { Produits } from "./pages/Produits";
import { Contact } from "./pages/Contact";
import { Mentions } from "./pages/Mentions";
import { Politiques } from "./pages/Politiques";
import {Routes, Route} from 'react-router-dom';

function App() {
  return(
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Accueil/>} />
            <Route path="/Apropos" element={<Apropos/>} />
            <Route path="/Produits" element={<Produits/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Mentions" element={<Mentions/>} />
            <Route path="/Politiques" element={<Politiques/>} />
            <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App;