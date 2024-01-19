import { NavLink } from "react-router-dom";

export const Footer =() =>{
    return(
        <footer className="bg-gradient-2 bg-blend-plus-lighter"><br></br>
            <nav className="flex justify-around" >
            <NavLink className='font-pinyon-script hover:underline mr-3' style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})} to='/Politiques'>Politiques</NavLink>
            <NavLink className='font-pinyon-script hover:underline mr-3' style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})} to='/Mentions'>Mentions</NavLink>
            <NavLink className='font-pinyon-script hover:underline mr-3' style={({isActive}) =>({fontWeight: isActive ? 'bold' : 'normal'})} to='/Contact'>Contact</NavLink>
            </nav><br></br>
            <p className="font-pinyon-script flex justify-center">Copyright@AuxPetitsDelicedeValerie2024</p>
            <p className="font-pinyon-script flex justify-center">Tous droits réservés</p><br></br>
        </footer>
    )
}