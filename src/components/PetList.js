import Pet from "./Pet";
import { useState } from "react";

function PetList({pets, deletePet}){

    const [isDarkMode, setIsDarkMode] = useState(false)

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet} isDarkMode={isDarkMode}/>
    })

    function toggleIsDarkMode(){
        setIsDarkMode(!isDarkMode)

    }

    const modeText = isDarkMode ? "Light" : "Dark"


    return (
        <>
        <ul className="pet-list">{petComponents}</ul>
        
        <button className="dark-mode-button" onClick={toggleIsDarkMode}>{modeText} Mode</button>
        </>
    );
}

export default PetList;