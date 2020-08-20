import { criminalHTML } from './CriminalHTMLConverter.js'
import { getCriminals, useCriminals } from './CriminalProvider.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'
import { useOfficers } from '../officers/OfficerProvider.js'
import { getFacilities, useFacilities } from '../facilities/facilitiesProvider.js'
import { getIncarcerations, useIncarcerations } from '../incarcerations/incarcerationsProvider.js'

const targetContent = document.querySelector('.criminalsContainer')
const eventHub = document.querySelector(".container")
let criminals = []
let selections = {
  officer: "0",
  conviction: "0"
}

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.className.includes("nav--criminal")) {
    listCriminals()
    }
  }
)

eventHub.addEventListener("convictionChosen", (convictionEvent) => {
  selections.conviction = convictionEvent.detail.chosenConviction
  filterCriminals()
  render()
})


eventHub.addEventListener("officerSelected", (officerSelectEvent) => {
  selections.officer = officerSelectEvent.detail.officerID
  filterCriminals()
  render()
})

eventHub.addEventListener("click", clickEvent => {
  const [ clickTarget, criminalID ] = clickEvent.target.id.split("--")

  if (clickTarget === "associates-button") {
    const showAssociate = new CustomEvent("showAssociate", {
      detail: {
        criminalID: criminalID
      }
    })
    eventHub.dispatchEvent(showAssociate)
    
    const buttonElement = document.querySelector(`#${clickEvent.target.id}`)
    hideButton(buttonElement)
  }
})

export const listCriminals = () => {
  getCriminals()
    .then(getFacilities)
    .then(getIncarcerations)
    .then( () => { 
      filterCriminals()
      render()
  })
}

const render = () => {
  
  const allIncarcerations = useIncarcerations()
  const allFacilities = useFacilities()

  const allHTML = criminals.map( (criminal) => {
    const incarcerations = allIncarcerations.filter( incarcerarion => criminal.id === incarcerarion.criminalId)

    const facilities = incarcerations.map( incarceration => {
      return allFacilities.find( facility => {
        return facility.id === incarceration.facilityId
      })
    })

    return criminalHTML(criminal, facilities)
  }).join('')


  targetContent.innerHTML = allHTML
}

const hideButton = (buttonElement) => {
  buttonElement.style.display = "none"
}

const filterCriminals = () => {
  criminals = useCriminals()

  if (selections.conviction !== "0") {
    const convictionObj = useConvictions().find(conviction => conviction.id === parseInt(selections.conviction))

    criminals = criminals.filter( criminal => convictionObj.name === criminal.conviction )
  }

  if (selections.officer !== "0") {
    const officerObject = useOfficers().find( officer => officer.id === parseInt(selections.officer) )
    
    criminals = criminals.filter( criminal => officerObject.name === criminal.arrestingOfficer )
  }
}