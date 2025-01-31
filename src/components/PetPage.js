import PetList from "./PetList";
import pets from "../data/pets";
import { useState } from "react";
import Search from "./Search"

function PetPage(){

    const [searchText, setSearchText] = useState("")

    const [petsState, setPetsState] = useState(pets)

    function deletePet(petId){
        const updatedArray = petsState.filter(pet => {
            return pet.id !== petId
            
        })
        setPetsState(updatedArray)
    }

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    const filteredPets = petsState.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    return (
        <main>
            <Search updateSearchTest={updateSearchText} />
            <PetList deletePet={deletePet} pets={filteredPets}/>
        </main>
    );
}

export default PetPage;