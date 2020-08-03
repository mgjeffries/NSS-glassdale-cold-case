import { AssociateHTML } from "../associates/AssociatesHTMLConverter.js";
import { useCriminals } from "./CriminalProvider.js";


const eventHub = document.querySelector(".container")

eventHub.addEventListener("showAssociate", showEvent => {
  const criminalID = showEvent.detail.criminalID
  const contentTarget = document.querySelector(`.card-id--${criminalID}`)
  const allCriminals = useCriminals()
  const criminalObj = allCriminals.find( criminal => criminal.id === parseInt(criminalID) )
  render(contentTarget, criminalObj)
})

const render = (contentTarget, criminalObj) => {
  
  const associates = criminalObj.known_associates
  contentTarget.innerHTML += associates.map(AssociateHTML).join('')
}