import { getWitnesses, useWitnesses } from "./WitnesDataProvider.js"
import { witnessHTML } from "./WitnessHTMLConverter.js"

const targetContent = document.querySelector('.witnessesContainer')
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.className.includes("nav--witness")) {
    getWitnesses()
      
      .then( () => {
        const witnessArray = useWitnesses()
        render(witnessArray)
        }
      )

    }
  }
)


const render = (witnessArray) => {
  
  targetContent.innerHTML = witnessArray.map( (witness) => witnessHTML(witness) ).join('')
}