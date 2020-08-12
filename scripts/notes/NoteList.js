import { noteHTML } from "./NoteHTML.js";
import { getNotes, useNotes } from "./NotesDataProvider.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

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
  else {
    clearNotes()
  }

}
)

const listNotes = () => {
  getNotes()
    .then( getCriminals )
    .then( () => {
      const notesCollection = useNotes()
      const criminalsCollection = useCriminals()

      render(notesCollection, criminalsCollection)
    })
}

const render = ( notesCollection, criminalsCollection ) => {
  const notesHTML = notesCollection.map( (note) => {
    const relatedCriminal = criminalsCollection.find(criminal => criminal.id === parseInt(note.criminalId))
    return noteHTML(note, relatedCriminal)

  }).join("")
  contentTarget.innerHTML = notesHTML
}

const clearNotes = () => {
  contentTarget.innerHTML = ''
}

/*


import { useNotes } from './NoteProvider.js'
import { useCriminals } from '../criminals/CriminalProvider.js'


const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.noteText}
            </section>
        `
    })
}

const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()

            render(notes, criminals)
        })
}
*/