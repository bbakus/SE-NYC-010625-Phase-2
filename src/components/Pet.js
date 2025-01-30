import { useState } from "react";


function Pet({pet}){

    

    const [numberOfLikes, setNumberOfLikes] = useState(0)


    function increaseLikes(){
        setNumberOfLikes(numberOfLikes + 1)
        
    }

    const [displayName, setDisplayName] = useState(true)

    function toggleDisplay(){
        setDisplayName((displayName) => !displayName)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplay} className={displayName ? "" : pet.animal_type}>{displayName ? pet.name : pet.animal_type}</h4>
            <button onClick={increaseLikes} className="like-button">{numberOfLikes} Likes</button>
        </li>
    );
}

export default Pet;