import Header from "./Header";
import PetList from "./PetList";

import {pets} from "../data/petsData";

// console.log(pets);

function App() {
  return (
    <div className="app">
        <Header/>
        <PetList pets={pets}/>
        {/* {PetList({pets, greeting: 'hello world'})} */}
        
    </div>
  );
}

export default App;