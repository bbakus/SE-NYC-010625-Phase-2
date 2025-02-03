import { v4 as uuid } from "uuid";
import { useState } from "react";

function NewPetForm({addPet}) {

  // const [name, setName] = useState('')
  // const [image, setImage] = useState('')
  // const [animal_type, setAnimal_type] = useState('')

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: ""
  })

  function handleSubmit(event){
    event.preventDefault()
    // console.log(name, image, animal_type)
    const newPet = {
      id: uuid(),
      name: formData.name,
      image: formData.image,
      animal_type: formData.animal_type,
      likes: 0
    }

    addPet(newPet)
  }

  function updateFormData(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  // function updateName(e){
  //   // console.log(e.target.value)
  //   setName(e.target.value)
  //   console.log({[e.target.name]: e.target.value})
  // }


  // function updateImage(e){
  //   // console.log(e.target.value)
  //   setImage(e.target.value)

  // }

  // function updateType(e){
  //   setAnimal_type(e.target.value)

  // }

    return (
      <div className="new-pet-form">
        <h2>New Pet</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} required/>
          <input onChange={updateFormData} type="text" name="image" placeholder="Image URL"  valuue={formData.image} required/>
          <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} required/>
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
  }
  
  export default NewPetForm;