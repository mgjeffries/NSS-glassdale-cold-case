const contentTarget = document.querySelector(".noteFormContainer")



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