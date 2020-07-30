export const noteHTML = ( noteObj ) => {
  return `
  <section class='note card'>
  <h3>Case Note</h3>
  <p>Author: ${noteObj.author}</p>
  <p>Suspect: ${noteObj.suspect}</p>
  <p>Note Date: ${new Date(noteObj.unixTime).toLocaleDateString('en-US')}</p>
  <p>Note: ${noteObj.content}</p>
  </section>
  `
}