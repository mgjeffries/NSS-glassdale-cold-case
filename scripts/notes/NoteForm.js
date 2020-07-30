import { saveNote } from "./NotesDataProvider.js";

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
      const noteAuthor = document.querySelector("#note--author").value
      const noteSuspect = document.querySelector('#note--suspect').value
      const noteContent = document.querySelector('#note--content').value

      // Make a new object representation of a note
      const newNote = {
          author: noteAuthor,
          suspect: noteSuspect,
          unixTime: Date.now(),
          content: noteContent
      }

      // Change API state and application state
      saveNote(newNote)
      render()
  }
})

export const NoteForm = () => {
    render()
}

const render = () => {
  contentTarget.innerHTML = `
    <label for="note--author">Note Author</label>
    <input type="text" id="note--author">
    <label for="note--suspect">Note Suspect</label>
    <input type="text" id="note--suspect">
    <label for="note--content">Note:</label>
    <input type="text" id="note--content">
    <button id="saveNote">Save Note</button>
  `
}