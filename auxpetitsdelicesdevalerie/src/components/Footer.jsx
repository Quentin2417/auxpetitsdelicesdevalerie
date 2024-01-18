import { NavLink } from "react-router-dom";

export const Footer =() =>{
    return(
        <footer className="bg-gradient-2 bg-blend-plus-lighter"><br></br>
            <nav className="flex justify-center" >
            <NavLink className='hover:underline mr-3' style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Politiques</NavLink>
            <NavLink className='hover:underline mr-3' style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Mentions</NavLink>
            <NavLink className='hover:underline mr-3' style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Contact</NavLink>
            </nav><br></br>
            <p className="flex justify-center">Copyright@AuxPetitsDelicedeValerie2024</p>
            <p className="flex justify-center">Tous droits réservés</p><br></br>
        </footer>
    )
}