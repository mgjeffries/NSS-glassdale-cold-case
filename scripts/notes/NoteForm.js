import { saveNote } from "./NotesDataProvider.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    const noteAuthor = document.querySelector("#note--author").value
    const criminalId = document.querySelector('#note--criminal-select').value
    const noteContent = document.querySelector('#note--content').value

    // Make a new object representation of a note
    const newNote = {
        author: noteAuthor,
        criminalId: criminalId,
        unixTime: Date.now(),
        content: noteContent
    }

    // Change API state and application state
    saveNote(newNote)
    const criminals = useCriminals()
    render(criminals)
  }
})

export const NoteForm = () => {
    getCriminals()
      .then( () => {
        const criminals = useCriminals()
        render(criminals)
      })
}

const render = criminals => {
  const criminalOptions = criminals.map( criminal => {
    return `
    <option value="${criminal.id}">
      ${criminal.name}
    </option>`
    }).join("")

  contentTarget.innerHTML = `
    <label for="note--author">Note Author</label>
    <input type="text" id="note--author">
    <label for="note--suspect">Note Suspect</label>
    <select class="dropdown" id="note--criminal-select">
      <option value="0">Select a criminal</option>
      ${criminalOptions}
    </select>
    <label for="note--content">Note:</label>
    <input type="text" id="note--content">
    <button id="saveNote">Save Note</button>
  `
}