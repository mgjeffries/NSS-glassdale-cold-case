import { noteHTML } from "./NoteHTML.js";
import { getNotes, useNotes } from "./NotesDataProvider.js";


const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")
let shouldNotesDisplay = false

eventHub.addEventListener("noteStateChanged", customEvent => {
  if (shouldNotesDisplay) {
    listNotes()
  }
  }
)

eventHub.addEventListener("viewNotesEvent", customEvent => {
  shouldNotesDisplay = customEvent.detail.viewNotes
  if (shouldNotesDisplay) {
    listNotes()
  }

}
)

const listNotes = () => {
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