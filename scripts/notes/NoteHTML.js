import { deleteNote } from "./NotesDataProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("noteDeleteButton")) {
    const [ name, noteId ] = clickEvent.target.id.split("--")
    deleteNote(noteId)
  }
})

export const noteHTML = ( noteObj, relatedCriminal ) => {
  return `
  <section class='note card'>
  <h3>Case Note</h3>
  <p>Author: ${noteObj.author}</p>
  <p>Suspect: ${relatedCriminal.name}</p>
  <p>Note Date: ${new Date(noteObj.unixTime).toLocaleDateString('en-US')}</p>
  <p>Note: ${noteObj.content}</p>
  <button id="noteDeleteButton--${noteObj.id}">Delete</button>
  </section>
  `
}