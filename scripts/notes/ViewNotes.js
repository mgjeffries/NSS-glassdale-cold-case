const contentTarget = document.querySelector(".viewNotesContainer")
const eventHub = document.querySelector(".container")

const viewNotesButton = 1
const hideNotesButton = 2
let buttonState = viewNotesButton
const shouldDisplayNotes = true
const shouldNotDisplayNotes = false

eventHub.addEventListener("click", clickEvent => {
  let viewNotesDetail = false
  if (clickEvent.target.id === "viewNotes") {
    if (buttonState === viewNotesButton) {
      viewNotesDetail = shouldDisplayNotes
      renderHideNotes()
      buttonState = hideNotesButton
    }
    else {
      viewNotesDetail = shouldNotDisplayNotes
      renderViewNotes()
      buttonState = viewNotesButton
    }

    const viewNotesEvent = new CustomEvent("viewNotesEvent", {
      detail: {
        viewNotes: viewNotesDetail 
      }
    })
    eventHub.dispatchEvent(viewNotesEvent)


  }
}
)

export const ViewNotesButton = () => renderViewNotes()

const renderViewNotes = () => {
  contentTarget.innerHTML = `
  <button id="viewNotes">View Notes</button>
  `
}

const renderHideNotes = () => {
  contentTarget.innerHTML = `
  <button id="viewNotes">Hide Notes</button>
  `
}