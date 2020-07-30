import { noteHTML } from "./NoteHTML.js";
import { getNotes, useNotes } from "./NotesDataProvider.js";


const contentTarget = document.querySelector(".notesContainer")

export const listNotes = () => {
  getNotes()
    .then( () => {
      const notesHTML = useNotes().map( (note) => {
        return noteHTML(note)
      }).join("")

      render(notesHTML)
    })
}

const render = ( notesHTML ) => {
  contentTarget.innerHTML = notesHTML
}