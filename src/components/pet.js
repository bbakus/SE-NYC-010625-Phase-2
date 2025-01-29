


// the Pet component expects to receive a prop  named "pet" whose value should be an object
function Pet({pet}){


    return (
        <li key={pet.id} className="pet">
                <img src={pet.image} alt={pet.name}/>
                <h4>{pet.name}</h4>
        </li>
    )
}

export default Pet;
