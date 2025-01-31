import { useState } from "react";

function Pet({pet, deletePet, isDarkMode}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(!displayAnimalType)
    }

    const darkModeClass = isDarkMode ? "dark-mode" : ""


    return (
        
        <li className={`Pet ${darkModeClass}`}>
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            <button className="like-button">{pet.likes} Likes</button>
            <button onClick={() => deletePet(pet.id)}className="adopt-button">Adopt</button>
        </li>
        
    );
}

export default Pet;