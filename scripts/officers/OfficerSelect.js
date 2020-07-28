import { getOfficers, useOfficers } from './OfficerProvider.js'

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (officerSelectEvent) => {
  const officerSelected = new CustomEvent("officerSelected", {
    detail: {
      officerID: officerSelectEvent.target.value
    }
  })
  eventHub.dispatchEvent(officerSelected)
})

export const OfficerSelect = () => {
  getOfficers()
    .then( () => {
      render(useOfficers())
    })
}

const render = officersCollection => {
  contentTarget.innerHTML = `
      <select class="dropdown" id="officerSelect">
          <option value="0">Please select an officer...</option>
          ${
            officersCollection.map(officer => {
              return `<option value=${officer.id}>${officer.name}</option>`
            }).join("")
          }
      </select>
  `
}