import { NavLink } from "react-router-dom"
import { LuCake } from "react-icons/lu";

export const Navbar =() =>{
    return(
        <header className="bg-gradient bg-blend-plus-lighter">
            <br></br><p className="font-pinyon-script flex justify-center text-5xl"><LuCake style={{ marginRight: '0.5em' }} />Aux Petits Délices de Valérie<LuCake style={{ marginLeft: '0.5em' }} /></p>
            <nav className='flex justify-between items-center ml-10 mr-10 '>
            <img className='w-40' src='images/logo.jpg' alt='logo'/>
                <NavLink className='font-pinyon-script hover:underline mr-24 text-2xl' style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Accueil</NavLink>
                <NavLink className='font-pinyon-script hover:underline mr-24 text-2xl' style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})} to='/Apropos'>A propos</NavLink>
                <NavLink className='font-pinyon-script hover:underline mr-24 text-2xl' style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})} to='/Produits'>Produits</NavLink>
                <NavLink className='font-pinyon-script hover:underline mr-24 text-2xl' style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})} to='/Contact'>Contact</NavLink>
            </nav>
        </header>
    )
}