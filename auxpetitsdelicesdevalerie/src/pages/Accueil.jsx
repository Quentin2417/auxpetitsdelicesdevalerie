export const Accueil =() =>{
    return(
        <main>
        <a href='/produitsAnniv' className="flex justify-between items-center mt-5">
            <img src="images/photo-accueil.jpg" alt="photo-accueil"/>
            <p className="font-mono mr-40 text-4xl">Des gâteaux d'anniversaire </p>
        </a>
        <a href='/produitsMar' className="flex justify-end justify-between items-center mt-10">
            <p className="font-mono  ml-48 text-4xl">Des gâteaux de mariage</p>
            <img src="images/photo-accueil-2.jpg" alt="photo-accueil-2"/>
        </a>
        <a href='/produitsBuche' className="flex justify-between items-center mt-10 mb-10">
            <img src="images/photo-accueil-3.jpg" alt="photo-accueil-3"/>
            <p className="font-mono mr-52 text-4xl"> Des bûches patissières</p>
        </a>
        </main>
    )
}