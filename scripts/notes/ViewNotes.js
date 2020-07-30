const contentTarget = document.querySelector(".viewNotesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "viewNotes") {
    console.log('view notes clicked')
    const viewNotesEvent = new CustomEvent("viewNotesEvent", {
      detail: {
        viewNotes: true 
      }
    })
    eventHub.dispatchEvent(viewNotesEvent)
  }
}
)

export const ViewNotesButton = () => render()

const render = () => {
  contentTarget.innerHTML = `
  <button id="viewNotes">View Notes</button>
  `
}