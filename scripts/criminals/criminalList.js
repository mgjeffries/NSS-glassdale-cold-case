import { criminalHTML } from './criminalHTMLConverter.js'
import { getCriminals, useCriminals } from './criminalProvider.js'
import { getConvictons, useConvictions } from '../convictions/convictionProvider.js'

const targetContent = document.querySelector('.criminalsContainer')
const eventHub = document.querySelector(".container")

eventHub.addEventListener("convictionChosen", (convictionEvent) => {
  // Get the crime id
  const crimeID = convictionEvent.detail.chosenConviction
  // Try logging the id to make sure that its working
  console.log(crimeID) // ITS WORKING !!!!! ... So Far


  // Get the name of the crime, without calling getConvictions - This Should Work, but doesn't
  const allCrimes = useConvictions()
  console.log("Should be a list of all crimes, but shows up empty", allCrimes)


  //Instead, call getconvictions first, and wait for the fetch to return
  const allConvictions = getConvictons().then( ()=> {
    const convictionObj = useConvictions().find( 
      (conviction) => {
        return conviction.id === parseInt(crimeID)
        } 
      )
    console.log("After waiting for the getConvictions Call, we can access the convictions:", convictionObj.name)
    }
    )
  
  // Get an array of criminals, filtered by crime
  
  // render the filtered criminals
})

export const listCriminals = () => {
  getCriminals()
    .then( () => { 
       
      let allCriminalHTML = ''
      useCriminals().forEach(criminalObj => {
        allCriminalHTML += criminalHTML(criminalObj)
      })

      targetContent.innerHTML = allCriminalHTML
  })
}