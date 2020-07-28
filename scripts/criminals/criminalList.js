import { criminalHTML } from './CriminalHTMLConverter.js'
import { getCriminals, useCriminals } from './CriminalProvider.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'

const targetContent = document.querySelector('.criminalsContainer')
const eventHub = document.querySelector(".container")

eventHub.addEventListener("convictionChosen", (convictionEvent) => {
  // Get the crime id
  const crimeID = convictionEvent.detail.chosenConviction
  
  const convictionObj = useConvictions().find( 
    (conviction) => {
      return conviction.id === parseInt(crimeID)
      } 
  )
  
  // Get an array of criminals, filtered by crime
  const filteredCriminals = useCriminals().filter(
    (criminal) => {
      return convictionObj.name === criminal.conviction
    }
  )

  // render the filtered criminals
  render(filteredCriminals)

})

export const listCriminals = () => {
  getCriminals()
    .then( () => { 
       render(useCriminals())
  })
}

const render = (criminalArray) => {
  
  targetContent.innerHTML = criminalArray.map( (criminal) => criminalHTML(criminal)).join('')
}