/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictons } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
// Get a reference to the container class to use as an event hub
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
  const convictionChosen = new CustomEvent("convictionChosen", {
    detail: {
      // TODO: Should this be called conviction ID?
      chosenConviction: changeEvent.target.value
    }
  })
  eventHub.dispatchEvent(convictionChosen)
})

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictons()
      .then( () => {
        const convictions = useConvictions()

        render(convictions)
      })   
}

const render = convictionsCollection => {
  contentTarget.innerHTML = `
      <select class="dropdown" id="crimeSelect">
          <option value="0">Please select a crime...</option>
          ${
              convictionsCollection.map(convictionObj => {
                return `<option value=${convictionObj.id}>${convictionObj.name}</option>`
              }).join("")
          }
      </select>
  `
}