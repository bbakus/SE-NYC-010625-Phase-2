

import Pet from "./pet"

function PetList({pets}){

    // console.log(props)
    // console.log(props.pets)
    // console.log(props['greeting'])

    // const {pets} = props

    // console.log(pets)


    const petLiElements = pets.map((pet, index) => {
        
        return(

            <Pet key={pet.id} pet ={pet}/>
            // <li key={index} //or {pet.id} 
            //     className="pet" >
            //     <img src={pet.image} alt={pet.name}/>
            //     <h4>{pet.name}</h4>
            // </li>
        )
    })

    return (
        <ul className="pet-list">{petLiElements}</ul>
    );
}

export default PetList;